import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import Card from './card';
import content from './content';
import useScrollableShadows from './scrollable-shadows';

const Container = styled.div`
  overflow: hidden;
  position: relative;
  display: none;
  @media (min-width: ${t.widthPhone}) {
    display: inline-block;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-gap: ${t.gapMedium};
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  overflow-x: scroll;
`;

interface ShadowProps {
  left?: boolean;
}

const Shadow = styled.div<ShadowProps>`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 60;
  pointer-events: none;
  ${({ left }) => (left ? 'left: 0' : 'right: 0')};

  background: linear-gradient(
    ${({ left }) => (left ? '' : '-')}90deg,
    ${t.colorBackground}CC 0%,
    ${t.colorBackground}77 30%,
    ${t.colorBackground}00
  );
`;

export default function Cards(): ReactElement {
  const { leftRef, rightRef, cardsRef } = useScrollableShadows();
  return (
    <Container>
      <Shadow ref={leftRef} left />
      <CardsContainer ref={cardsRef}>
        {content.map((e) => (
          <Card key={e.title} content={e} />
        ))}
      </CardsContainer>
      <Shadow ref={rightRef} />
    </Container>
  );
}
