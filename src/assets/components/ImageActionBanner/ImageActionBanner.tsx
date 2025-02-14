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
            verticalAlign: "middle",
            background: "linear-gradient(to right, #B0B0B0, #555555)",
            color: "white",
          }}
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
          >
            Get Directions
          </Button>
        </div>
      </Card>
      <br />
      <br />
    </>
  );
}
