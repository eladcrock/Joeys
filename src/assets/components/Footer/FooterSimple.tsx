import { useState } from 'react';
import { Anchor, Container, Group, Text, Modal } from '@mantine/core';
import classes from './FooterSimple.module.css';
import { GetInTouchSimple } from '../GetInTouch/GetInTouchSimple';

const links = [
  { link: '#home', label: 'Home' },
  { link: '#about', label: 'About' },
  { link: '#gallery', label: 'Gallery' },
  { link: '#services', label: 'Services' },
  { link: '#directions', label: 'Getting Here' },
  { link: '#contact', label: 'Contact' },
];

export function FooterSimple() {
  const [modalOpened, setModalOpened] = useState(false);

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, link: string) => {
    event.preventDefault();
    if (link === '#contact') {
      setModalOpened(true);
    } else {
      const targetElement = document.querySelector(link);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const items = links.map((link) => (
    <Anchor<'a'>
      c="dimmed"
      key={link.label}
      href={link.link}
      size="sm"
      onClick={(event) => handleScroll(event, link.link)}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Group justify="space-between">
          <Text>© 2025 Joey's Bakery</Text>
          <Group className={classes.links}>{items}</Group>
        </Group>
      </Container>
      <Modal
        opened={modalOpened}
        onClose={() => setModalOpened(false)}
      >
        <GetInTouchSimple />
      </Modal>
    </div>
  );
}

export default FooterSimple;