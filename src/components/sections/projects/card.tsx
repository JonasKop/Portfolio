import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import buttonStyle from '../../button';

export interface CardProps {
  content: {
    subTitle: string;
    title: string;
    description: string;
    link: string;
    image: string;
  };
}

const SubTitle = styled.h6`
  color: ${t.colorAccent};
`;

const Image = styled.img`
  width: 300px;
  
  background: lightgrey;
  justify-self: center;
`;

const Container = styled.div`
  background: ${t.colorBackgroundLight};
  display: grid;
  grid-template-rows: min-content max-content;
  grid-auto-flow: row;
  width: 300px;
  border-bottom: 1px solid ${t.colorAccent};
`;

const SubContainer = styled.div`
  padding: ${t.paddingSmall};
  height: 280px;
  position: relative;
  a {
    position: absolute;
    bottom: calc(${t.paddingSmall} + 1px);
  }

  h3 {
    font-size: ${t.fontSizeRegular};
  }
`;

const LearnMoreButton = styled.a`
  align-self: end;
  ${buttonStyle}
`;

export default React.memo(function Card({ content }: CardProps): ReactElement {
  return (
    <Container>
      <Image src={content.image} />
      <SubContainer>
        <SubTitle>{content.subTitle}</SubTitle>
        <h3>{content.title}</h3>
        <p>{content.description}</p>
        <LearnMoreButton href={content.link}>LEARN MORE</LearnMoreButton>
      </SubContainer>
    </Container>
  );
});
