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
    description:
      'Ibex is a booking system for an event center. It can book everything from housings to fields and integrates well with the customers accounting software. Created with React, Golang, Postgres, OIDC and Docker.',
    link: 'https://fowlit.com/work/ibex',
    image: '/assets/ibex.jpg',
  },
  {
    subTitle: 'Conference App',
    title: 'Datatjej App',
    description:
      'The DataTjej app was the official app for DataTjej conference 2019. It provided schedule, information and attendance control. Created with Kotlin, Swift and NodeJS.',
    link: 'https://fowlit.com/work/datatjej-app',
    image: '/assets/datatjej.jpg',
  },
  {
    subTitle: 'Kubernetes Dashboard',
    title: 'CK8SDash',
    description:
      'CK8SDash is a kubernetes dashboard me and a colleague created at Elastisys. It integrates with among others Grafana, Elastic Search. Created with React and Golang.',
    link: 'https://fowlit.com/work/compliant-kubernetes-dashboard',
    image: '/assets/elastisys.jpg',
  },
  {
    subTitle: 'Supporter System',
    title: 'Zlingit',
    description:
      'Zlingit is a engagement driven system which enables companies to better interact with their customers. Me and a colleague made mockups for their entire system. Created with the adobe suite.',
    link: 'https://fowlit.com/work/zlingit',
    image: '/assets/zlingit.jpg',
  },
  {
    subTitle: 'Portfolio Website',
    title: 'Portfolio',
    description:
      'My portfolio is open sourced. It was made with the React server side rendering library NextJS.',
    link: 'https://github.com/JonasKop/Portfolio',
    image: '/assets/portfolio.jpg',
  },
];

export default content;
