import React from 'react';
import Book from '../../../resources/illustrations/book.svg';
import Coding from '../../../resources/illustrations/coding.svg';
import Exams from '../../../resources/illustrations/exams.svg';
import Experience from '../../../resources/illustrations/experience.svg';
import Skills from '../../../resources/illustrations/skills.svg';
import User from '../../../resources/illustrations/user.svg';
import WorkTime from '../../../resources/illustrations/worktime.svg';
import { NavItem } from './nav';
import Stats from './stats';

export interface ContentType {
  nav: NavItem;
  body: {
    title: string;
    text: string;
    Component: React.FC;
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
             I am a social person who has a very large tech interest. I also watch a lot of football on my spare time where I follow Liverpool FC as much as I can. I also like woodworking and constructing things from the ground up.`,
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
      text: `I am a student in my last year of studying for two Master of Science degrees. One in Computer Science and one in Interaction Design. 
          In my Masters I am mostly focusing on distributed systems and devops which suits me perfectly since I am really into understanding everything about a system. `,
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
      text: `During my studies I have worked a lot on my spare time. I have created a Cisco Webex integrated Chatbot at ATEA and started my own IT consulting company named Fowlit with a friend.
          
          Fowlit is an  IT consulting firm where we mostly build web based solutions. We have built a complete camping booking system called Ibex, created multiple dashboard designs for Zlingit and created a Kubernetes dashboard for elastisys`,
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
      text: `I have a large interest i multiple fields and am a quick learner who likes to understand the whole development process. I follow a lot of tech blogs to keep up with the latests news and technologies.
      
      I mostly write my code in Golang, Elixir and Typescript with React as a UI library. Most of my code is tested with CI pipelines which are running on my own kubernetes server who also hosts the projects.`,
      Component: Stats,
    },
  },
];

export default content;
