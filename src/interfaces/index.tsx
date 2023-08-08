import { type Icon } from '@tabler/icons-react';

export type Landing = {
  title: string;
  position: string;
  description: string;
};

export type Skill = {
  icon: Icon;
  title: string;
  description: string;
};

export type SkillsGrid = {
  title: string;
  description: string;
  data: Skill[];
};

export type About = {
  image: string;
  title: string;
  category: string;
  color: string;
  description: string;
}[];

export type Links = {
  link: string;
  label: string;
}[];

export type Footer = {
  title: string;
  links: Array<{
    label: string;
    link: string;
  }>;
}[];

export type Career = {
  title: string;
  icon: string;
  badge: string;
  description: string;
}[];

export type Contact = {
  avatar: string;
  name: string;
  job: string;
  description: string;
};

export type Now = {
  icon: Icon;
  title: string;
  description: string;
}[];

export type Error = {
  backgroundText: string;
  title: string;
  description: string;
};
