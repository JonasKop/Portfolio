import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t, { Theme } from '../../theme';

function activeColor(p: { active: boolean; theme: Theme }): string {
  return p.active ? t.colorAccent(p) : t.colorText(p);
}

const Container = styled.div`
  justify-items: center;
  display: grid;
  grid-gap: ${t.gapSmall};
`;

const Text = styled.h6`
  color: ${activeColor};
  cursor: pointer;
  display: grid;
  grid-auto-columns: min-content;
`;

const Dot = styled.div`
  height: 6px;
  width: 6px;
  background-color: ${t.colorAccent};
  border-radius: 50%;
  display: inline-block;
`;

interface NavItemProps {
  active?: boolean;
  children: string;
}

export default function NavItem({ active, children }: NavItemProps): ReactElement {
  return (
    <Container>
      <Text active={active}>{children}</Text>
      {active && <Dot />}
    </Container>
  );
}

NavItem.defaultProps = {
  active: false,
};
