export interface ContentType {
  subTitle: string;
  title: string;
  description: string;
  link: string;
  image: string;
}

const content: ContentType[] = [
  {
    subTitle: 'Booking System',
    title: 'Ibex',
    description: 'Doing some stuff yeah i am',
    link: 'https://fowlit.com/work/8f5cbc15-2329-4dbb-b4b7-738fa8ea2e74',
    image: '/assets/ibex.jpg',
  },
  {
    subTitle: 'Conference App',
    title: 'Datatjej Conference 2019',
    description: 'Doing some stuff yeah i am',
    link: 'https://fowlit.com/work/dd703f2b-088d-42d3-ada3-1e3527982f94',
    image: '/assets/datatjej.jpg',
  },
  {
    subTitle: 'Kubernetes Dashboard',
    title: 'CK8SDash',
    description: 'Doing some stuff',
    link: 'https://fowlit.com/work/33af3fe7-eea3-4621-a301-5d877952f9f9',
    image: '/assets/elastisys.jpg',
  },
  {
    subTitle: 'Supporter System',
    title: 'Zlingit GameDayZ',
    description: 'Doing some stuff',
    link: 'https://fowlit.com/work/b1b8c485-e99d-4663-af06-9402e4a42b90',
    image: '/assets/zlingit.jpg',
  },
  {
    subTitle: 'Portfolio Website',
    title: 'Portfolio',
    description: 'Doing some stuff',
    link: 'https://github.com/JonasKop/Portfolio',
    image: '/assets/portfolio.jpg',
  },
];

export default content;
