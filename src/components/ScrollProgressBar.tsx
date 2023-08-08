import { Progress } from '@mantine/core';
import { useScrollProgressBarStyles } from 'styles';

export default function ScrollProgressBar(props) {
  const { classes } = useScrollProgressBarStyles();
  return (
    <Progress
      value={(props.scroll.y / (props.scrollHeight - window.screen.availHeight)) * 100}
      className={classes.scrollProgressBar}
      radius='xs'
    />
  );
}
