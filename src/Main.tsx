import { useState } from 'react';
import { MantineProvider, type ColorScheme, ColorSchemeProvider } from '@mantine/core';
import { useWindowScroll } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';
import Nav from 'components/Nav';
import ScrollProgressBar from 'components/ScrollProgressBar';
import { ScrollToTopButton } from 'components/buttons';
import { links } from 'data';

export default function Main() {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark');
  const toggleColorScheme = (value?: ColorScheme) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  };
  const [scroll] = useWindowScroll();
  const scrollHeight = document.body.scrollHeight;

  return (
    <MantineProvider
      theme={{
        colorScheme,
        globalStyles: theme => ({
          '*, *::before, *::after': {
            boxSizing: 'border-box',
          },
          'html, body, .main': {
            minHeight: '100vh',
            scrollBehavior: 'smooth',
          },
        }),
      }}
      withGlobalStyles
      withNormalizeCSS
    >
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <ScrollToTopButton />
        <ScrollProgressBar links={links} scroll={scroll} scrollHeight={scrollHeight} />
        <Nav links={links} />
        <Outlet />
      </ColorSchemeProvider>
    </MantineProvider>
  );
}
