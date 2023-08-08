import { IconArrowUp } from '@tabler/icons-react';
import { useWindowScroll } from '@mantine/hooks';
import { Affix, Button, Transition, rem } from '@mantine/core';

export default function ScrollToTopButton() {
  const [scroll, scrollTo] = useWindowScroll();

  return (
    <Affix
      position={{
        bottom: rem(20),
        right: rem(20),
      }}
    >
      <Transition transition='slide-up' mounted={scroll.y > 0}>
        {transitionStyles => (
          <Button
            leftIcon={<IconArrowUp size='1rem' />}
            style={transitionStyles}
            onClick={() => {
              scrollTo({ y: 0 });
            }}
          >
            Scroll to top
          </Button>
        )}
      </Transition>
    </Affix>
  );
}
