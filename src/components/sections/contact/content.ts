import React from 'react';
import Linkedin from '../../../resources/illustrations/linkedin';
import Github from '../../../resources/illustrations/github';
import Email from '../../../resources/illustrations/email';
import Phone from '../../../resources/illustrations/phone';

export interface ContentType {
  title: string;
  subTitle: string;
  Icon: React.FC;
  link: string;
}

const content: ContentType[] = [
  {
    title: 'LinkedIn',
    subTitle: 'Business profile',
    Icon: Linkedin,
    link: 'https://linkedin.com',
  },
  {
    title: 'Github',
    subTitle: 'Code repository',
    Icon: Github,
    link: 'https://github.com',
  },
  {
    title: 'Email',
    subTitle: 'jonas@jonassjodin.com',
    Icon: Email,
    link: 'mailto://jonas@jonassjodin.com',
  },
  {
    title: 'Phone',
    subTitle: '+46 70-274-71-95',
    Icon: Phone,
    link: 'tel:+46702747195',
  },
];

export default content;
