import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { ContentType } from './content';
import t from '../../../theme';
import buttonStyle from '../../button';

const Container = styled.a`
  ${buttonStyle};

  display: grid;
  grid-template-areas: 'title' 'sub-title' 'icon';
  grid-template-rows: min-content;
  background: ${t.colorBackgroundLight};
  height: 32vw;
  width: 32vw;
  justify-items: center;
  padding: ${t.paddingTiny};

  svg {
    grid-area: icon;
    @media (min-width: ${t.widthPhone}) {
      justify-self: end;
    }
  }

  :hover {
    h4,
    h6 {
      color: ${t.colorBackground};
    }
  }

  @media (min-width: ${t.widthPhone}) {
    grid-template-areas:
      'title icon'
      'sub-title icon';

    max-width: 300px;
    height: 100px;
    align-content: center;
    justify-items: normal;
    justify-content: normal;
    align-items: center;
    padding: ${t.paddingSmall} ${t.paddingMedium};
  }
`;

const Title = styled.h4`
  grid-area: title;
  font-family: ${t.fontFamilyHeader};
  padding-bottom: 0;
`;

const SubTitle = styled.h6`
  grid-area: sub-title;
  font-size: ${t.fontSizeMicro};
  color: ${t.colorAccent};
`;

export default function Card({ title, subTitle, Icon, link }: ContentType): ReactElement {
  return (
    <Container href={link}>
      <Title>{title}</Title>
      <SubTitle>{subTitle}</SubTitle>
      <Icon />
    </Container>
  );
}
