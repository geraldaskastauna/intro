import { HashLink as Link } from 'react-router-hash-link';
import { Header, Container, Group, Burger, Box, Modal } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { ThemeToggle } from 'components/buttons';
import { useNavStyles, HEADER_HEIGHT, BOTTOM_MARGIN } from 'styles';
import { type Links } from 'interfaces';

export default function Nav(props: { links: Links }) {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useNavStyles();

  const items = props.links.map(link => {
    return (
      <Link preventScrollReset={true} key={link.label} to={link.link} className={classes.link} onClick={close}>
        {link.label}
      </Link>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} mb={BOTTOM_MARGIN} className={classes.wrapper}>
      <Container className={classes.header}>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <ThemeToggle />
        <Burger opened={opened} onClick={open} className={classes.burger} size='md' />

        <Modal
          opened={opened}
          onClose={close}
          size='xl'
          overlayProps={{
            opacity: 0.55,
            blur: 3,
          }}
        >
          <Box>{items}</Box>
        </Modal>
      </Container>
    </Header>
  );
}
