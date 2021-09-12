import React, { ReactElement, useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import t from '../../../theme';
import buttonStyle from '../../button';

const url = process.env.NODE_ENV === 'development' ? 'http://localhost:4000' : '/api';

const Container = styled.form`
  background: ${t.colorBackgroundLight};
  grid-template-rows: min-content 1fr min-content;
  display: grid;
  padding: ${t.paddingSmall};
  align-items: center;
  grid-gap: ${t.gapLarge};
  justify-items: center;

  h6 {
    color: ${t.colorAccent};
  }
`;

const Content = styled.div`
  display: grid;

  grid-gap: ${t.gapMedium};

  input,
  textarea {
    width: auto;
  }

  textarea {
    min-height: 150px;
    height: 100%;
    resize: vertical;
  }
  width: 100%;

  @media (min-width: ${t.widthTablet}) {
    grid-template-columns: 1fr 1fr;

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

interface SubmitData {
  firstName: string;
  lastName: string;
  from: string;
  text: string;
}

export default function Form(): ReactElement {
  const r = useForm();
  const { register, handleSubmit } = r;

  const [isSent, setIsSent] = useState(false);

  async function onSubmit(data: SubmitData) {
    r.reset();
    await fetch(`${url}/email`, {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    setIsSent(true);
  }

  return (
    <Container onSubmit={handleSubmit(onSubmit)}>
      <h3>Get in Touch</h3>
      {!isSent && (
        <Content>
          <input {...register('firstName', { required: true })} placeholder="First Name" />
          <input {...register('lastName', { required: true })} placeholder="Last Name" />
          <input {...register('from', { required: true })} placeholder="Your Email Address" />
          <textarea {...register('text', { required: true })} placeholder="Your Message" />
        </Content>
      )}
      {!isSent && <Button type="submit">SEND MESSAGE</Button>}
      {isSent && <h6>Thank you for your message!</h6>}
      {isSent && <Button onClick={() => setIsSent(false)}>SEND AGAIN</Button>}
    </Container>
  );
}
