import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import buttonStyle from '../../button';

const Container = styled.form`
  background: ${t.colorBackgroundLight};
  display: grid;
  padding: ${t.paddingSmall};
  align-items: center;
  grid-gap: ${t.gapLarge};
  justify-items: center;
`;

const Content = styled.div`
  display: grid;
  grid-gap: ${t.gapMedium};
  textarea {
    min-height: 150px;
    height: 100%;
    resize: vertical;
  }
  width: 100%;

  @media (min-width: ${t.widthTablet}) {
    grid-template-columns: min-content min-content;
    input:nth-child(3),
    textarea:nth-child(4) {
      grid-column: 1 / span 2;
    }
  }
`;

const Button = styled.button`
  ${buttonStyle};
  width: fit-content;
  height: fit-content;
`;

export default function Form(): ReactElement {
  return (
    <Container>
      <h3>Get in Touch</h3>
      <Content>
        <input placeholder="First Name" />
        <input placeholder="Last Name" />
        <input placeholder="Your Email Address" />
        <textarea placeholder="Your Message" />
      </Content>

      <Button type="submit">SEND MESSAGE</Button>
    </Container>
  );
}
