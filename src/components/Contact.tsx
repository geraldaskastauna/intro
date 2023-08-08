import { Avatar, rem, Button, Group, Text, Paper } from '@mantine/core';
import { IconBrandGmail } from '@tabler/icons-react';
import { useContactStyles } from 'styles';
import { contact } from 'data';

export default function Contact() {
  const { classes } = useContactStyles();

  return (
    <Paper radius='md' p='lg' className={classes.card}>
      <Avatar src={contact.avatar} size={120} radius={120} mx='auto' />
      <Text fz='lg' weight={700} ta='center' mt='md'>
        {contact.name}
      </Text>
      <Text fz='sm' ta='center'>
        <div>{contact.job}</div>
      </Text>
      <Text className={classes.cardInfo} c='dimmed' fz='sm' ta='center'>
        <div>{contact.description}</div>
      </Text>

      <Group position='center' mt={20}>
        <Button
          component='a'
          target='_blank'
          rel='noopener noreferrer'
          href='mailto: geraldaskastauna@gmail.com'
          leftIcon={<IconBrandGmail size={rem(18)} />}
        >
          Email me!
        </Button>
      </Group>
    </Paper>
  );
}
