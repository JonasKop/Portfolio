import React, { ReactElement } from 'react';
import Greeting from '../components/sections/greeting';
import About from '../components/sections/about';
import Coding from '../resources/illustrations/coding';

export default function Home(): ReactElement {
  return (
    <>
      <Greeting />
      {/* <About>
        <Coding />
      </About> */}
    </>
  );
}
