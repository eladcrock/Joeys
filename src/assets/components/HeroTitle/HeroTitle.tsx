import {
  Button,
  Container,
  Group,
  Text,
  ActionIcon,
  Modal,
  Stack,
} from "@mantine/core";
import { useState, useEffect } from "react";
import { Phone, MapPin } from "tabler-icons-react";
import AOS from "aos";
import "aos/dist/aos.css";
import classes from "./HeroTitle.module.css";
import cakeDrawing from "../../images/cake_Drawing.png";
import { GetInTouchSimple } from "../GetInTouch/GetInTouchSimple.tsx";

export function HeroTitle() {
  const [modalOpened, setModalOpened] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000, // Set global animation duration
      once: true, // Whether animation should happen only once
    });
  }, []);

  return (
    <Container size={700} className={classes.inner}>
      <h1
        className={classes.title}
        style={{ fontSize: "3rem" }}
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        Joeys{" "}
        <Text
          component="span"
          variant="gradient"
          gradient={{ from: "blue", to: "cyan" }}
          inherit
          style={{ fontSize: "3rem" }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          Bakery
        </Text>{" "}
      </h1>
      <h2 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
        Panaderia Y Pasteleria
      </h2>
      <br />
      <br />
      <img
        src={cakeDrawing}
        alt="Cake Drawing"
        className={classes.heroImage}
        data-aos="zoom-in"
        data-aos-duration="1000"
        data-aos-delay="600"
      />
      <br></br>
      {/* <Text className={classes.description}>
        The Best Mexican Pastries in the Napa Valley
      </Text> */}

      <Stack gap={1} align="center" mt="md">
        <Group
          justify="center"
          style={{ gap: 6, paddingBottom: 0.5 }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <ActionIcon
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
            target="_blank"
            style={{
              background: "linear-gradient(to right, #B0B0B0, #555555)",
              color: "white",
            }}
            aria-label="Navigate to 2556 Jefferson St, Napa, CA on Google Maps"
          >
            <MapPin size={15} />
          </ActionIcon>
          <Text color="dimmed">
            <a
              href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "inherit", textDecoration: "none" }}
              aria-label="Navigate to 2556 Jefferson St, Napa, CA on Google Maps"
            >
              2556 Jefferson St, Napa, CA
            </a>
          </Text>
        </Group>

        <Group
          justify="center"
          style={{ gap: 6 }}
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <ActionIcon
            component="a"
            href="tel:+17072549027"
            style={{
              background: "linear-gradient(to right, #B0B0B0, #555555)",
              color: "white",
            }}
            aria-label="Call 17072549027"
          >
            <Phone size={15} />
          </ActionIcon>
          <Text color="dimmed">
            <a
              href="tel:+17072549027"
              style={{ color: "inherit", textDecoration: "none" }}
              aria-label="Call 17072549027"
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
        gradient={{ from: "pink", to: "#F23E61" }}
        onClick={() => setModalOpened(true)}
        aria-label="Contact Us"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1200"
      >
        Contact Us
      </Button>
      <br />
      <br />
      <br />

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        <GetInTouchSimple closeModal={() => setModalOpened(false)} />
      </Modal>
      <br />
    </Container>
  );
}

export default HeroTitle;