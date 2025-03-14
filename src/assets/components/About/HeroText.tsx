import { Button, Container, Text, Title, Modal } from "@mantine/core";
import { Dots } from "./Dots.tsx";
import classes from "./HeroText.module.css";
import { GetInTouchSimple } from "../GetInTouch/GetInTouchSimple.tsx";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";


export function HeroText() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Optional: Set global animation duration
      once: true, // ✅ Ensure animation happens only once
    });
  }, []);
  
  const [modalOpened, setModalOpened] = useState(false);
  return (
    <Container className={classes.wrapper} size={1400}>
      <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
      <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
      <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

      <div className={classes.inner}>
        <Title className={classes.title}>About Us </Title>
        <br />
        <Container p={0} size={600}>
          <Text size="lg" c="dimmed" className={classes.description}>
            <p>
              For over 20 years, our family-owned and operated bakery has been a
              cherished part of the Napa community, dedicated to bringing warmth
              and flavor to every table. We take pride in crafting each baked
              good with care, using time-honored recipes and the finest
              ingredients to ensure that every bite is as delicious as it is
              memorable.
            </p>
            <br />
            <p>
              Beyond just baking, we believe in fostering a sense of community,
              where every customer feels like family. From classic favorites to
              seasonal specialties, we continuously strive to provide an
              inviting space where the simple joy of a freshly baked treat can
              brighten anyone’s day.
            </p>
            <br />
            <br />
          </Text>
        </Container>

        <div className={classes.controls}
        >
          <Button
            className={classes.control}
            size="lg"
            variant="default"
            color="gray"
            onClick={() => setModalOpened(true)}
            aria-label="Contact Us"
            style={{
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 10px rgba(0, 0, 0, 0.1)', // Softer drop shadow
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
            }}
          >
            Get in touch
          </Button>
        </div>
      </div>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      
      >
        <GetInTouchSimple closeModal={() => setModalOpened(false)} />
      </Modal>
    </Container>
  );
}
