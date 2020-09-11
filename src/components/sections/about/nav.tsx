import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';

const Container = styled.div`
  grid-area: nav;
  display: grid;
  grid-auto-flow: column;
  align-self: end;
  justify-self: end;
  width: 100%;
`;

const Button = styled.button`
  cursor: pointer;
  display: grid;
  grid-gap: 10px;
  justify-items: center;
  padding: ${t.paddingTiny};
  &:hover {
    outline: none;
  }
  svg,
  path {
    fill: ${(p) => (p.active ? t.colorAccent(p) : t.colorText(p))};
  }
  h6 {
    color: ${(p) => (p.active ? t.colorAccent(p) : t.colorText(p))};
    width: 100%;
  }

  @media (min-width: ${t.widthTablet}) {
    svg {
      display: none;
    }
    h6 {
      font-size: ${t.fontSizeText};
      padding: 0;
    }
    padding: ${t.paddingSmall};
    background: ${(p) => (p.active ? t.colorBackgroundLight(p) : t.colorBackgroundMedium(p))};
  }
`;

const Text = styled.h6`
  font-size: ${t.fontSizeMicro};
  color: ${t.activeColor};
`;

export interface NavItem {
  title: string;
  icon: React.FC;
}

interface NavProps {
  items: NavItem[];
  setActive: (name: string) => void;
  current: NavItem;
}

export default function Nav({ items, setActive, current }: NavProps): ReactElement {
  return (
    <Container>
      {items.map((e) => (
        <Button onClick={() => setActive(e.title)} key={e.title} active={current === e}>
          <Text>{e.title}</Text>
          <e.icon />
        </Button>
      ))}
    </Container>
  );
}
