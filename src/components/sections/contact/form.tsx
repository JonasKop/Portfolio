import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import buttonStyle from '../../button';

const Container = styled.form`
  display: grid;
  background: ${t.colorBackgroundLight};
  width: 100%;
  justify-items: center;
  padding: ${t.paddingSmall} 0;

  h3 {
    padding-top: ${t.paddingMedium};
  }

  input,
  textarea {
    max-width: 100%;
  }

  textarea {
    min-height: 150px;
    height: 100%;
  }

  @media (min-width: ${t.widthPhone}) {
    max-width: 500px;
  }
`;

const Button = styled.button`
  ${buttonStyle};
  width: fit-content;
  height: fit-content;
`;

const Content = styled.div`
  display: grid;
  grid-gap: ${t.gapMedium};
  justify-content: center;
  padding: ${t.paddingMedium} 0;

  @media (min-width: ${t.widthPhone}) {
    grid-template-columns: min-content min-content;
    input:nth-child(3),
    textarea:nth-child(4) {
      grid-column: 1 / span 2;
    }
  }
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
