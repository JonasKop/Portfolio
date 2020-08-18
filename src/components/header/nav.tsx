import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../theme';
import NavItem from './navItem';

const Container = styled.div`
  grid-area: nav;
  display: none;
  grid-auto-flow: column;
  grid-gap: ${t.paddingMedium};
  width: 100%;

  @media (min-width: ${t.widthPhone}) {
    display: grid;
  }
`;
export default function Nav(): ReactElement {
  return (
    <Container>
      <NavItem to="greeting">HOME</NavItem>
      <NavItem to="about">ABOUT</NavItem>
      <NavItem to="projects">PROJECTS</NavItem>
      <NavItem to="contact">CONTACT</NavItem>
    </Container>
  );
}
