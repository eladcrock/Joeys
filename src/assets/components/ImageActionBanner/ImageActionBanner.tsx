import { Button, Card, Overlay, Text, Title, ActionIcon } from "@mantine/core";
import classes from "./ImageActionBanner.module.css";
import { MapPin } from "tabler-icons-react";

export function ImageActionBanner() {
  return (
    <>
      <br />
      <br />
      <Title order={2} mb="xs" className={classes.head}>
        Location
      </Title>
      <Text size="md" color="dimmed" mb="xl">
        <a
          href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: "inherit", textDecoration: "none" }}
        >
          2556 Jefferson St, Napa, CA
        </a>



        <ActionIcon
          component="a"
          href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
          target="_blank"
          rel="noopener noreferrer"
          ml="xs"
          style={{
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1), 0 6px 20px rgba(0, 0, 0, 0.1)', // Modern drop shadow
              transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth transition
            verticalAlign: "middle",
            background: "linear-gradient(to right, #B0B0B0, #555555)",
            color: "white",
          }}
          aria-label="Navigate to 2556 Jefferson St, Napa, CA on Google Maps"

        >
          <MapPin size={20} />
        </ActionIcon>
      </Text>
      <Card radius="md" className={classes.card}>
        <Overlay className={classes.overlay} opacity={0.55} zIndex={0} />

        <div className={classes.content}>
          <Button
            className={classes.action}
            variant="white"
            color="dark"
            size="xs"
            component="a"
            href="https://www.google.com/maps/search/?api=1&query=2556+Jefferson+St,+Napa,+CA"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Navigate to 2556 Jefferson St, Napa, CA on Google Maps"

          >
            Get Directions
          </Button  >
        </div>
      </Card>
      <br />
      <br />
    </>
  );
}
