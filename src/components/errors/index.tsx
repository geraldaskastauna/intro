import { Title, Text, Button, Container, Group } from '@mantine/core';
import { Link } from 'react-router-dom';
import { useGeneralErrorStyles } from 'styles';
import { type Error } from 'interfaces';

export function ErrorPage({ backgroundText, title, description }: Error) {
  const { classes } = useGeneralErrorStyles();
  return (
    <Container className={classes.wrapper}>
      <div className={classes.label}>{backgroundText}</div>
      <Title className={classes.title}>{title}</Title>
      <Text color='dimmed' size='lg' align='center' className={classes.description}>
        {description}
      </Text>
      <Group position='center'>
        <Link to='/'>
          <Button variant='subtle' size='md'>
            Take me back to home page
          </Button>
        </Link>
      </Group>
    </Container>
  );
}
