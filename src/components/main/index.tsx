import React, { ReactElement } from 'react';
import styled from 'styled-components';

const Container = styled.main`
  min-height: 100vh;
  grid-area: main;
`;

interface MainProps {
  children: React.ReactNode;
}

export default function Main({ children }: MainProps): ReactElement {
  return <Container>{children}</Container>;
}
