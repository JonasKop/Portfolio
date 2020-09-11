import React from 'react';
import User from '../../../resources/illustrations/user';
import Coding from '../../../resources/illustrations/coding';
import Book from '../../../resources/illustrations/book';
import Exams from '../../../resources/illustrations/exams';
import Experience from '../../../resources/illustrations/experience';
import WorkTime from '../../../resources/illustrations/worktime';
import Skills from '../../../resources/illustrations/skills';
import { NavItem } from './nav';

export interface ContentType {
  nav: NavItem;
  body: {
    title: string;
    text: string;
    Component: React.FC<unknown>;
  };
}

const content: ContentType[] = [
  {
    nav: {
      title: 'ABOUT',
      icon: User,
    },
    body: {
      title: 'Get to know me',
      text: `My name is Jonas Sjödin and I am a 23 year old developer. When developing I aim to provide a great user experince while keeping a performant and stable backend.
             I like to develop the whole system from writing and dockerizing an Elixir project to creating an interactive React app.
             I am a social person who has a a very large tech interest. I follow a lot of tech blogs and the latests news. 
             I also watch a lot of football on my spare time and follow Liverpool FC as much as possible. I also like woodworking and constructing things from the ground up. .`,
      Component: Coding,
    },
  },
  {
    nav: {
      title: 'EDUCATION',
      icon: Book,
    },
    body: {
      title: 'University studies',
      text: `I am a Master of Science student in my last year of studying for two Master of Science degrees. 
          One in Computer Science and one in Interaction Design. In my Masters I am mostly focusing on 
          distributed systems and devops. `,
      Component: Exams,
    },
  },
  {
    nav: {
      title: 'EXPERIENCE',
      icon: Experience,
    },
    body: {
      title: 'My work',
      text: `During my studies I have worked a lot on my free time. I have worked at ATEA creating a chatbot
          and started my own company Fowlit with a coworker.
          \n
          Fowlit is an  IT consulting firm where we have among others built a complete camping booking system 
          called Ibex, created multiple dashboard designs for Zlingit and created a kubernetes dashboard for elastisys`,
      Component: WorkTime,
    },
  },
  {
    nav: {
      title: 'SKILLS',
      icon: Skills,
    },
    body: {
      title: 'What I know',
      text: `I have a large interest i multiple fields. I am a quick learner and likes to understand the whole 
          development process. Today I mostly write my code in Elixir and Typescript+React. 
          \n
          To test this I have setup my own pipelines on my home kubernetes server where I run my CI runners. 
          I then host my projects on that same server. `,
      Component: Coding,
    },
  },
];

export default content;
