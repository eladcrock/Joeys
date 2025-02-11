import { IconCake, IconCookie, IconCalendarEvent } from "@tabler/icons-react";
import { Container, SimpleGrid, Text, Title } from "@mantine/core";
import classes from "./FeaturesAsymmetrical.module.css";

interface FeatureProps extends React.ComponentPropsWithoutRef<"div"> {
  icon: React.FC<any>;
  title: string;
  description: string;
}

function Feature({
  icon: Icon,
  title,
  description,
  className,
  ...others
}: FeatureProps) {
  return (
    <div className={classes.feature} {...others}>
      <div className={classes.overlay} />

      <div className={classes.content}>
        <Icon size={38} className={classes.icon} stroke={1.5} />
        <Text fw={700} fz="lg" mb="xs" mt={5} className={classes.title}>
          {title}
        </Text>
        <Text c="dimmed" fz="sm">
          {description}
        </Text>
      </div>
    </div>
  );
}

const mockdata = [
  {
    icon: IconCake,
    title: "Custom Cakes",
    description:
      "Beautifully crafted custom cakes for birthdays, weddings, and special celebrations, made to order.",
  },
  {
    icon: IconCookie,
    title: "Fresh Pastries",
    description:
      "Enjoy our daily selection of fresh-baked pastries, from conchas to tres leches, made with love.",
  },
  {
    icon: IconCalendarEvent,
    title: "Events & Catering",
    description:
      "We provide catering for events of all kinds, ensuring a sweet experience for you and your guests.",
  },
];

export function FeaturesAsymmetrical() {
  const items = mockdata.map((item) => <Feature {...item} key={item.title} />);

  return (
    <Container mt={30} mb={30} size="lg">
      <Title order={1} mb="xl" mt="md" className={classes.head}>
      Our Services 🍰🍩🥐
      {" "}
      </Title>
      <SimpleGrid cols={{ base: 1, sm: 3 }} spacing={50}>
        {items}
      </SimpleGrid>
    </Container>
  );
}
