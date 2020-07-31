import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../theme';
import Logo from '../../resources/illustrations/logo';
import PhoneMenu from './phonemenu';
import Nav from './nav';

const Container = styled.header`
  grid-area: header;
  position: fixed;
  background: ${t.colorBackground};
  width: 100%;
  top: 0;
  z-index: ${t.zIndexHeader};
  display: grid;
  padding: ${t.paddingVerticalSmall} 0;
  grid-template-columns: 1fr max-content 1fr min-content 1fr;
  grid-template-areas: '. icon . nav .';
  align-items: center;

  @media (max-width: ${t.widthPhone}) {
    grid-template-columns: 20px max-content 1fr min-content 20px;
    grid-template-areas: '. icon . nav .';
  }
`;

const Icon = styled.div`
  grid-area: icon;
  display: grid;
  grid-auto-flow: column;
  align-items: center;
  grid-gap: ${t.paddingVerticalSmall};
  svg {
    width: ${t.sizeSmall};
    height: ${t.sizeSmall};
  }
  h5 {
    color: ${t.colorAccent};
  }
`;

export default function Header(): ReactElement {
  return (
    <Container>
      <Icon>
        <Logo />
        <h5>Jonas Sjödin</h5>
      </Icon>
      <PhoneMenu />
      <Nav />
    </Container>
  );
}
