import { Title, Container, Text, Avatar, Timeline, Box } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useCareerStyles } from 'styles';
import { career } from 'data';

export default function Career() {
  const { classes, theme } = useCareerStyles();
  const is_mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const items = career.map(item => {
    return (
      <Timeline.Item key={item.title} title={item.title} bulletSize={24} bullet={<Avatar src={item.icon} radius='xl' />}>
        <Text>{item.badge}</Text>
        <Text color='dimmed' size='sm'>
          {item.description}
        </Text>
      </Timeline.Item>
    );
  });

  return (
    <Container className={classes.wrapper} id='career'>
      <Title mb={50} align='center'>
        Career
      </Title>
      <Box maw={is_mobile ? 250 : 500} mx='auto'>
        <Timeline>{items}</Timeline>
      </Box>
    </Container>
  );
}
