import { HashLink as Link } from 'react-router-hash-link';
import { Container, Text, Button, Group } from '@mantine/core';
import { useLandingStyles } from 'styles';
import { landing } from 'data';

export default function Landing() {
  const { classes } = useLandingStyles();

  return (
    <Container className={classes.wrapper} id='home' size={700}>
      <Text component='span' className={classes.title} variant='gradient' inherit>
        {landing.title}
      </Text>
      <Text size='xl'>{landing.position}</Text>
      <Text className={classes.description} color='dimmed'>
        {landing.description}
      </Text>
      <Group position='center' className={classes.controls}>
        <Link to='#contact'>
          <Button size='xl' className={classes.control} variant='gradient'>
            Contact
          </Button>
        </Link>
        <Link to='#skills'>
          <Button size='xl' variant='default' className={classes.control}>
            Expertise
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
