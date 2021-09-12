import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import Card from './card';
import Cards from './cards';
import content from './content';
import Nav from './nav';

const SectionHeader = styled.h6`
  color: ${t.colorAccent};
`;

const Container = styled.section`
  display: grid;
  grid-gap: ${t.gapSmall};
  justify-content: center;
  @media (min-width: ${t.widthPhone}) {
    justify-content: normal;
  }
`;

const SingleCard = styled.div`
  @media (min-width: ${t.widthPhone}) {
    display: none;
  }
`;

export default function Projects(): ReactElement {
  const [active, setActive] = useState(0);

  return (
    <Container id="projects">
      <SectionHeader>MY WORK</SectionHeader>
      <h3>Projects</h3>
      <SingleCard>
        <Card content={content[active]} />
      </SingleCard>
      <Cards />
      <Nav active={active} setActive={setActive} size={content.length} />
    </Container>
  );
}
