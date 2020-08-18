import React, { ReactElement, useEffect, useRef, useState } from 'react';
import styled, { css, useTheme } from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import t, { Theme } from '../../../theme';
import Card from './card';
import Nav from './nav';
import content from './content';

const SectionHeader = styled.h6`
  color: ${t.colorAccent};
`;

const Container = styled.section`
  display: grid;
  grid-gap: ${t.gapSmall};
`;

const Cards = styled.div`
  display: grid;
  grid-gap: ${t.gapMedium};
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  overflow-x: scroll;
`;

const shadowWidth = 30;
function calcWidth(offset: number) {
  return Math.round(offset > shadowWidth * 4 ? shadowWidth : offset / 4);
}

const shadow = css`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 400;
  width: ${({ offset }: { offset: number }) => offset}px;
  pointer-events: none;
`;

const LeftShadow = styled.div`
  ${shadow};
  left: 0;
  background: linear-gradient(
    90deg,
    ${t.colorBackground}CC 0%,
    ${t.colorBackground}77 30%,
    ${t.colorBackground}00
  );
`;

const RightShadow = styled.div`
  ${shadow};
  right: 0;
  background: linear-gradient(
    -90deg,
    ${t.colorBackground}CC 0%,
    ${t.colorBackground}77 30%,
    ${t.colorBackground}00
  );
`;

const CardsContainer = styled.div`
  overflow: hidden;
  position: relative;
`;

export default function Projects(): ReactElement {
  const [active, setActive] = useState(0);
  const cardsRef = useRef<HTMLDivElement>(null);
  const theme = useTheme() as Theme;
  const [leftOffset, setLeftOffset] = useState(0);
  const [rightOffset, setRightOffset] = useState(shadowWidth);
  const isDesktop = useMediaQuery({ query: `(min-width: ${t.widthPhone({ theme })})` });

  useEffect(() => {
    cardsRef.current?.addEventListener('scroll', () => {
      if (cardsRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = cardsRef.current;
        setLeftOffset(calcWidth(scrollLeft));
        setRightOffset(calcWidth(scrollWidth - clientWidth - scrollLeft));
      }
    });
  }, [cardsRef]);

  return (
    <Container id="projects">
      <SectionHeader>MY WORK</SectionHeader>
      <h3>Projects</h3>
      <CardsContainer>
        <LeftShadow offset={leftOffset} />
        <Cards ref={cardsRef}>
          {!isDesktop && <Card content={content[active]} />}
          {isDesktop && content.map((e) => <Card key={e.title} content={e} />)}
        </Cards>
        <RightShadow offset={rightOffset} />
      </CardsContainer>
      {!isDesktop && <Nav active={active} setActive={setActive} size={content.length} />}
    </Container>
  );
}
