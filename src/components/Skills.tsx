import { ThemeIcon, Text, Title, Container, SimpleGrid } from '@mantine/core';
import { type Skill } from 'interfaces';
import { useSkillsStyles } from 'styles';
import { skillsGrid } from 'data';

export function SkillPane({ icon: Icon, title, description }: Skill) {
  return (
    <div>
      <ThemeIcon size={40} radius={40}>
        <Icon size='1.1rem' stroke={1.5} />
      </ThemeIcon>
      <Text mt='sm' mb={7}>
        {title}
      </Text>
      <Text size='sm' color='dimmed' sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  );
}

export default function Skills() {
  const { classes } = useSkillsStyles();
  const features = skillsGrid.data.map((feature, index) => <SkillPane {...feature} key={index} />);

  return (
    <Container className={classes.wrapper} id='skills'>
      <Title className={classes.title}>{skillsGrid.title}</Title>

      <Text className={classes.description}>{skillsGrid.description}</Text>

      <SimpleGrid
        mt={60}
        cols={3}
        spacing={50}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  );
}
