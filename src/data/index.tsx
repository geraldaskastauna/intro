import {
  type About,
  type Contact,
  type Landing,
  type Links,
  type Now,
  type Skill,
  type SkillsGrid,
  type Footer,
  type Career,
  type Error,
} from 'interfaces';
import {
  IconBrain,
  IconActivityHeartbeat,
  IconBusinessplan,
  IconBrandPython,
  IconDeviceAnalytics,
  IconBrandReact,
} from '@tabler/icons-react';
import images from 'images';

export const landing: Landing = {
  title: 'Geraldas Kastauna',
  position: 'Software Developer',
  description: 'Seasoned software developer, dedicated to crafting efficient and innovative solutions for your business needs.',
};

export const links: Links = [
  { link: '/intro/#home', label: 'Home' },
  { link: '/intro/#career', label: 'Career' },
  { link: '/intro/#skills', label: 'Skills' },
  { link: '/intro/#about', label: 'About' },
  { link: '/intro/#now', label: 'Now' },
  { link: '/intro/#contact', label: 'Contact' },
];

export const career: Career = [
  {
    title: 'Middlesex University, London, UK.',
    icon: images.universityImg,
    badge: '2017 - 2020',
    description:
      'Attained a first-class honours degree in Computer Science, with a specialization in Artificial Intelligence and Web Development.',
  },
  {
    title: 'Data Analyst & Team Lead',
    icon: images.ltglinkImg,
    badge: '2020 - 2022',
    description:
      'Commenced employment as a data analyst utilizing Python and Microsoft Power Platform tools, and subsequently assumed the position of team leader after approximately a year and a half.',
  },
  {
    title: 'Software Developer',
    icon: images.oxylabsImg,
    badge: '2022 - Present',
    description:
      'Actively employed as a backend software developer specializing in Python, responsible for the creation and maintenance of tailor-made APIs, as well as the integration of features and resolution of technical bugs.',
  },
];

export const skills: Skill[] = [
  {
    icon: IconBrandPython,
    title: 'Python',
    description:
      'Bringing forth professional proficiency in data analytics and software development, adept at crafting and seamlessly integrating customized APIs.',
  },
  {
    icon: IconBrandReact,
    title: 'Front-end',
    description: 'Commenced the journey of mastering the React framework to craft captivating user interactions.',
  },
  {
    icon: IconDeviceAnalytics,
    title: 'Microsoft Power Platform',
    description: 'Data analytics expertise in maintaining and developing with Power BI, Excel, Access, Flow and PowerApps.',
  },
];

export const about: About[] = [
  {
    image: images.marcusAureliusImg,
    title: 'Philosophy',
    category: 'Hobbies',
    color: 'yellow',
    description: 'In the past year, my interest has been piqued by Philosophy, particularly focusing on the study of stoicism.',
  },
  {
    image: images.reactImg,
    title: 'Development',
    category: 'Technology',
    color: 'red',
    description: 'Commenced my journey in delving into the React framework with the goal of evolving into a skilled full-stack developer.',
  },
  {
    image: images.bodybuldingImg,
    title: 'Bodybuilding',
    category: 'Sports',
    color: 'green',
    description:
      'Embarked on my gym journey at the age of 14, and from that point on, I have been captivated by its allure. In the picture, you can see me in the middle, when I was around 15-16 years old during my first bodybuilding competition.',
  },
  {
    image: images.americanFootballImg,
    title: 'American Football',
    category: 'Sports',
    color: 'green',
    description:
      'Throughout my university years in London, I became a member of an amateur football team, actively participating for nearly two years. In my second year, I achieved the accolade of "Offensive Rookie of the Year." Following my relocation to Lithuania, I joined a local team and secured the same coveted title.',
  },
];

export const contact: Contact = {
  avatar: images.meImg,
  name: 'Geraldas Kaštauna',
  job: 'Software Developer',
  description:
    "Open to meaningful collaborations that turn ideas into remarkable realities – let's create something extraordinary together.",
};

export const now: Now = [
  {
    icon: IconBrain,
    title: 'Philosophy',
    description: "Mainly reading books such as Marcus Aurelius 'Meditations' and Seneca's 'Letters from a stoic'",
  },
  {
    icon: IconActivityHeartbeat,
    title: 'Boxing',
    description: 'In addition to my weightlifting regimen, I embraced the discipline of boxing.',
  },
  {
    icon: IconBusinessplan,
    title: 'Side hustle',
    description: 'Actively exploring business and freelance avenues while applying my skillset to craft innovative projects.',
  },
];

export const error404: Error = {
  backgroundText: '404',
  title: 'You have found a secret place.',
  description: 'Unfortunately, this is only a 404 page. You may have mistyped the address, or the page has been moved to another URL.',
};

export const errorGeneral: Error = {
  backgroundText: 'Umm...',
  title: 'Well, this is unexpected...',
  description: 'Unfortunately, this is a general error page. Something happened with the system. Try going back or refreshing the page.',
};

export const skillsGrid: SkillsGrid = {
  title: 'Skills',
  description:
    'Drawing upon my expertise as a skilled professional, I offer a broad spectrum of technical knowledge that can significantly enhance my contributions to your initiatives.',
  data: skills,
};
