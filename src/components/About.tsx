import { useState } from 'react';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { rem, Container, Title } from '@mantine/core';
import AboutCard from 'components/AboutCard';
import { useAboutStyles } from 'styles';
import { about } from 'data';

export default function About() {
  const { classes, theme } = useAboutStyles();
  const [cards] = useState(about);
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const slides = cards.map(item => (
    <Carousel.Slide className={classes.slide} key={item.title}>
      <AboutCard {...item} />
    </Carousel.Slide>
  ));

  return (
    <Container className={classes.wrapper} id='about'>
      <Title ta='center' mb={50}>
        About
      </Title>
      <Carousel
        withIndicators
        loop
        dragFree
        slideSize={'50%'}
        ml={mobile ? 25 : 100}
        mr={mobile ? 25 : 100}
        slidesToScroll={mobile ? 1 : 2}
        breakpoints={[
          {
            maxWidth: 'sm',
            slideSize: '100%',
            slideGap: rem(3),
          },
        ]}
      >
        {slides}
      </Carousel>
    </Container>
  );
}
