import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../theme';
import NavItem from './navItem';

const Container = styled.div`
  grid-area: nav;
  display: none;
  grid-auto-flow: column;
  grid-gap: ${t.paddingVertical};

  .active {
    color: ${t.colorAccent};
  }

  @media (min-width: ${t.widthPhone}) {
    display: grid;
  }
`;
export default function Nav(): ReactElement {
  return (
    <Container>
      <NavItem active>HOME</NavItem>
      <NavItem>ABOUT</NavItem>
      <NavItem>PROJECTS</NavItem>
      <NavItem>CONTACT</NavItem>
    </Container>
  );
}
