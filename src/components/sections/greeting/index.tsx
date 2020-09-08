import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';

const Container = styled.section`
  height: 100vh;
  display: grid;
  justify-content: center;
  grid-gap: 10px 50px;
  align-content: end;
  padding: 0;
  grid-template-areas: 'hello' 'name' 'title' 'image';

  @media (min-width: ${t.widthTablet}) {
    grid-template-areas:
      'hello image'
      'name image'
      'title image'
      '. image';
  }

  mark {
    background-color: transparent;
    color: ${t.colorAccent};
  }
`;

const Hello = styled.h4`
  grid-area: hello;
  color: ${t.colorAccent};
`;

const Name = styled.h1`
  grid-area: name;
`;

const Title = styled.h4`
  grid-area: title;
`;

const Image = styled.img`
  grid-area: image;
  width: 240px;
  justify-self: center;
  @media (min-width: ${t.widthTablet}) {
    width: 360px;
  }
`;

export default function Greeting(): ReactElement {
  return (
    <Container id="greeting">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <Hello>Hello, I'm</Hello>
      <Name>Jonas Sjödin</Name>
      <Title>Software Engineer</Title>
      <Image src="/jonas.png" alt="Jonas Sjödin" />
    </Container>
  );
}
