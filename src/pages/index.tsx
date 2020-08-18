import React, { ReactElement } from 'react';
import Greeting from '../components/sections/greeting';
import About from '../components/sections/about';
import Projects from '../components/sections/projects';
import Contact from '../components/sections/contact';

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
