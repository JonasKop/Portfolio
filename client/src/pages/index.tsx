import React, { ReactElement } from 'react';
import About from '../components/sections/about';
import Contact from '../components/sections/contact';
import Greeting from '../components/sections/greeting';
import Projects from '../components/sections/projects';

export default function Home(): ReactElement {
  return (
    <>
      <Greeting />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
