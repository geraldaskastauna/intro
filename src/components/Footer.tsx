import { HashLink as Link } from 'react-router-hash-link';
import { Text, Container, ActionIcon, Group } from '@mantine/core';
import { IconMail, IconBrandLinkedin } from '@tabler/icons-react';
import Contact from 'components/Contact';
import { useFooterStyles } from 'styles';
import { footer } from 'data';

export default function Footer() {
  const { classes } = useFooterStyles();

  const groups = footer.map(group => {
    const links = group.links.map((link, index) => (
      <Link key={index} to={link.link} className={classes.link}>
        {link.label}
      </Link>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer} id='contact'>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Contact />
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text color='dimmed' size='sm'>
          © {new Date().getFullYear()}. All rights reserved.
        </Text>

        <Group spacing={0} className={classes.social} position='right' noWrap>
          <ActionIcon size='lg' component='a' href='mailto: geraldaskastauna@gmail.com' target='_blank'>
            <IconMail size='1.50rem' stroke={1.5} />
          </ActionIcon>
          <ActionIcon size='lg' component='a' href='https://www.linkedin.com/in/geraldas-kastauna?originalSubdomain=lt' target='_blank'>
            <IconBrandLinkedin size='1.50rem' stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
