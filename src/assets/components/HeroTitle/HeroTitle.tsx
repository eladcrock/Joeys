import {
  Button,
  Container,
  Group,
  Text,
  ActionIcon,
  Modal,
  Stack,
} from "@mantine/core";
import { useState } from "react";
import { Phone, MapPin } from "tabler-icons-react"; // Add icon imports
import classes from "./HeroTitle.module.css";
import cakeDrawing from "../../images/cake_Drawing.png"; // Adjust the path as necessary
import { GetInTouchSimple } from "../GetInTouch/GetInTouchSimple.tsx";

export function HeroTitle() {
  const [modalOpened, setModalOpened] = useState(false);

  return (
    <Container size={700} className={classes.inner}>
      <h1 className={classes.title}>
        Joeys{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          inherit
        >
          Bakery
        </Text>{" "}
      </h1>
      <h2> Panaderia Y Pasteleria</h2>
      <br />
      <br />
      <img src={cakeDrawing} alt="Cake Drawing" className={classes.heroImage} />
      <br></br>
      {/* <Text className={classes.description}>
        The Best Mexican Pastries in the Napa Valley
      </Text> */}

      <Stack gap={1} align="center" mt="md">
        <Group justify="center" style={{ gap: 6, paddingBottom: 0.5 }}>
          <ActionIcon
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
            target="_blank"
            style={{
              background: "linear-gradient(to right, #B0B0B0, #555555)",
              color: "white",
            }}
          >
            <MapPin size={15} />
          </ActionIcon>
          <Text color="dimmed">
            <a
              href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              2556 Jefferson St, Napa, CA
            </a>
          </Text>
        </Group>

        <Group justify="center" style={{ gap: 6 }}>
          <ActionIcon
            component="a"
            href="tel:+17072549027"
            style={{
              background: "linear-gradient(to right, #B0B0B0, #555555)",
              color: "white",
            }}
          >
            <Phone size={15} />
          </ActionIcon>
          <Text color="dimmed">
            <a
              href="tel:+17072549027"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              (707) 254-9027
            </a>
          </Text>
        </Group>
      </Stack>

      <br></br>
      <br />

      <Button
        className={classes.control}
        size="lg"
        variant="gradient"
        gradient={{ from: "pink", to: '#F23E61' }}

        onClick={() => setModalOpened(true)}
      >
        Contact Us
      </Button>
      <br />
      <br />
      <br />

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        <GetInTouchSimple />
      </Modal>
      <br />
    </Container>
  );
  // Removed custom useState function
}
