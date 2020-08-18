import React, { ReactElement } from 'react';
import styled from 'styled-components';
import Card from './card';
import content from './content';
import t from '../../../theme';
import Form from './form';

const Container = styled.section`
  display: grid;

  justify-content: center;
  justify-items: center;
  grid-gap: ${t.gapMedium};

  @media (min-width: ${t.widthPhone}) {
    grid-template-columns: min-content min-content;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: min-content min-content;
  justify-content: center;
  grid-gap: ${t.gapMedium};
  @media (min-width: ${t.widthPhone}) {
    grid-template-columns: min-content;
  }
`;

export default function Contact(): ReactElement {
  return (
    <Container id="contact">
      <CardsContainer>
        {content.map((e) => (
          <Card
            key={e.subTitle}
            title={e.title}
            subTitle={e.subTitle}
            Icon={e.Icon}
            link={e.link}
          />
        ))}
      </CardsContainer>
      <Form />
    </Container>
  );
}
