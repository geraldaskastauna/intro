import { Switch, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoonStars } from '@tabler/icons-react';

export default function ThemeToggle() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();

  return (
    <Switch
      checked={colorScheme === 'dark'}
      onChange={() => {
        toggleColorScheme();
      }}
      size='lg'
      onLabel={<IconMoonStars size='1.5rem' stroke={1.5} />}
      offLabel={<IconSun size='1.5rem' stroke={1.5} />}
    />
  );
}
