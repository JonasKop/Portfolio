import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Link } from 'react-scroll';
import t from '../../theme';

const Text = styled.h6`
  cursor: pointer;
  display: grid;
  padding: 0;
  grid-auto-columns: min-content;
  transition: color 100ms ease-in;
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: ${t.colorAccent};
  border-radius: 50%;
  opacity: 0;
  transition: 100ms ease-in;
`;

const Container = styled(Link)`
  justify-items: center;
  display: grid;
  grid-gap: ${t.gapSmall};
  &:hover {
  text-decoration: none;
  }
  
  &.active {
    h6 {
      color: ${t.colorAccent};
    }
    div {
      opacity: 1;
    }
  }
`;

interface NavItemProps {
  children: string;
  to: string;
}

export default function NavItem({ children, to }: NavItemProps): ReactElement {
  return (
    <Container activeClass="active" to={to} offset={-70} duration={500} spy smooth>
      <Text>{children}</Text>
      <Dot />
    </Container>
  );
}
