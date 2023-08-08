import { Badge, Card, Image, Modal, Group, Text } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { type About } from 'interfaces';
import { useAboutCardStyles } from 'styles';

export default function AboutCard({ image, title, category, color, description }: About) {
  const [opened, { open, close }] = useDisclosure(false);
  const { classes } = useAboutCardStyles();

  return (
    <Card shadow='sm' padding='lg' radius='xl' ml='sm' mr='sm' mb='xl'>
      <Card.Section component='a' withBorder>
        <Image onClick={open} fit='cover' height={150} src={image} />
        <Modal onClose={close} size='xl' opened={opened} centered>
          <Image onClick={open} src={image} />
        </Modal>
      </Card.Section>

      <Group className={classes.group} mt='md' mb='xs'>
        <Badge color={color}>{category}</Badge>
        <Text weight={500}>{title}</Text>
      </Group>

      <Text size='sm' color='dimmed'>
        {description}
      </Text>
    </Card>
  );
}
