import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import Coding from '../../../resources/illustrations/coding';
import Nav from './nav';

const Container = styled.div`
  height: 100vh;
  background: ${t.colorBackgroundLight};
  width: 100vw;
`;

const SectionHeader = styled.h6`
  color: ${t.colorAccent};
`;

export default function About({ children }): ReactElement {
  return (
    <Container>
      <SectionHeader>ABOUT ME</SectionHeader>
      <h3>Get to know me</h3>
      <p>
        My name is Jonas Sjödin and I am a 23 year old developer. When developing I aim to provide a
        great user experince while keeping a performant and stable backend. I like to develop the
        whole system from writing and dockerizing an Elixir project to creating an interactive React
        app.
      </p>
      {children}
      <Nav />
    </Container>
  );
}
