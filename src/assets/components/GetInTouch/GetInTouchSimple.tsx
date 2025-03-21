import { Button, Group, SimpleGrid, Textarea, TextInput, Title, Modal } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface GetInTouchSimpleProps {
  closeModal: () => void;
}

emailjs.init('H7zIxPY_AjtsJtkru'); // Initialize EmailJS with Public Key

export function GetInTouchSimple({ closeModal }: GetInTouchSimpleProps) {
  const [responseModalOpened, setResponseModalOpened] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validate: {
      name: (value) => (value.trim().length < 2 ? 'Name must be at least 2 characters' : null),
      email: (value) => (!/^\S+@\S+$/.test(value) ? 'Invalid email' : null),
      phone: (value) => (!/^\d{10}$/.test(value) ? 'Invalid phone number' : null),
    },
  });

  const sendEmail = async (values: typeof form.values) => {
    console.log("Sending email with values:", values);

    try {
      const response = await emailjs.send(
        'service_ozt78yq', // Your EmailJS Service ID
        'template_mly52e9', // Your EmailJS Template ID
        {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
        'H7zIxPY_AjtsJtkru' // Your EmailJS Public Key
      );

      console.log("EmailJS Response:", response);
      form.reset();
      setResponseModalOpened(true); // Open the response modal

      setTimeout(closeModal, 3000); // Keep the modal up for 3 seconds before closing
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
    <>
      <form onSubmit={form.onSubmit(sendEmail)}>
        <Title
          order={1}
          size="h1"
          style={{ fontFamily: 'Poppins, var(--mantine-font-family)' }}
          fw={900}
          ta="center"
        >
          Let’s talk more
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
          <TextInput
            label="Name"
            placeholder="Your name"
            name="name"
            variant="filled"
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="Your email"
            name="email"
            variant="filled"
            {...form.getInputProps('email')}
          />
        </SimpleGrid>

        <TextInput
          label="Phone"
          placeholder="Your phone number"
          mt="md"
          name="phone"
          variant="filled"
          {...form.getInputProps('phone')}
        />
        <Textarea
          mt="md"
          label="Message"
          placeholder="Your message"
          maxRows={10}
          minRows={5}
          autosize
          name="message"
          variant="filled"
          {...form.getInputProps('message')}
        />

        <Group justify="center" mt="xl">
          <Button
            type="submit"
            size="md"
            aria-label="Send message"
            style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)', // Modern drop shadow
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
            }}
          >
            Send message
          </Button>
        </Group>
      </form>

      <Modal
        opened={responseModalOpened}
        onClose={() => setResponseModalOpened(false)}
        title="Thank you!"
        centered
        withCloseButton
      >
        <p>
          Our team will respond to your inquiry! <br/> <strong>NOTE: </strong>for more urgent requests, please call our shop during business hours 
          (707) 254-9027.<br></br> We look forward to making your day sweeter!
        </p>
      </Modal>
    </>
  );
}
