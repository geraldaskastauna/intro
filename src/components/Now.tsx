import { Group, Container, ThemeIcon, Title, Text, Paper } from '@mantine/core';
import { ICON_SIZE, useNowStyles } from 'styles';
import { now } from 'data';

export default function Now() {
  const { classes } = useNowStyles();

  const cards = now.map(card => (
    <Paper key={card.title} radius='md' withBorder className={classes.card} mt={`calc(${ICON_SIZE} / 3)`}>
      <ThemeIcon className={classes.icon} size={ICON_SIZE} radius={ICON_SIZE}>
        <card.icon size='2rem' stroke={1.5} />
      </ThemeIcon>

      <Text ta='center' fw={700} mb={20} className={classes.title}>
        {card.title}
      </Text>
      <Text c='dimmed' ta='center' fz='sm'>
        {card.description}
      </Text>
    </Paper>
  ));

  return (
    <Container className={classes.wrapper} id='now'>
      <Title mb={50} align='center'>
        Now
      </Title>
      <Group className={classes.cardsSection}>{cards}</Group>
    </Container>
  );
}
