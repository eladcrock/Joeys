import { useState } from "react";
import { Burger, Container, Group, Modal, Collapse } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderSimple.module.css";
import { GetInTouchSimple } from "../GetInTouch/GetInTouchSimple";

const links = [
  { link: "#about", label: "About" },
  { link: "#gallery", label: "Gallery" },
  { link: "#services", label: "Services" },
  { link: "#directions", label: "Getting Here" },
  { link: "#contact", label: "Contact" },
];

export function HeaderSimple() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);
  const [modalOpened, setModalOpened] = useState(false);

  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    link: string
  ) => {
    event.preventDefault();
    setActive(link);
    close(); // Close the menu when a link is clicked

    if (link === "#contact") {
      setModalOpened(true);
    } else {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        setTimeout(() => {
          targetElement.scrollIntoView({ behavior: "smooth" });
        }, 300); // Delay to ensure the menu closes before scrolling
      }
    }
  };

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => handleScroll(event, link.link)}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} className={classes.desktopMenu}>
          {items}
        </Group>
        <Burger
          opened={opened}
          onClick={toggle}
          className={classes.mobileBurger}
          size="sm"
        />
      </Container>

      <Collapse in={opened}>
        <div className={classes.mobileMenu}>{items}</div>
      </Collapse>

      <Modal opened={modalOpened} onClose={() => setModalOpened(false)}>
        <GetInTouchSimple closeModal={() => setModalOpened(false)} />
      </Modal>
    </header>
  );
}
