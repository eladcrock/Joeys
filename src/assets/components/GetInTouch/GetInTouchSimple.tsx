import { Button, Group, SimpleGrid, Textarea, TextInput, Title } from '@mantine/core';
import { useForm } from '@mantine/form';
import emailjs from '@emailjs/browser';

interface GetInTouchSimpleProps {
  closeModal: () => void;
}

emailjs.init('H7zIxPY_AjtsJtkru'); // Initialize EmailJS with Public Key

export function GetInTouchSimple({ closeModal }: GetInTouchSimpleProps) {
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
    
    // Close modal immediately after clicking send
    closeModal();

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
    } catch (error) {
      console.error("EmailJS Error:", error);
    }
  };

  return (
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
        <Button type="submit" size="md">
          Send message
        </Button>
      </Group>
    </form>
  );
}
