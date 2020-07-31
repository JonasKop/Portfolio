import React, { ReactElement } from 'react';
import styled from 'styled-components';
import t from '../../theme';
import Wave from '../../resources/illustrations/wave';
// import Wave from '../../resources/illustrations/wave';

const Wrapper = styled.footer`
  grid-area: footer;
  display: inline-block;
  height: 10px;
`;

const Container = styled.div`
  z-index: ${t.zIndexFooter};
  display: grid;
  padding: ${t.paddingVerticalLarge} 0;
  grid-gap: ${t.gapHuge} 0;

  grid-template-areas:
    'contact follow'
    'text text';
`;

const Contact = styled.div`
  grid-area: contact;
  display: grid;
  justify-content: center;
`;

const Follow = styled.div`
  grid-area: follow;
  display: grid;
  justify-content: center;
`;

const List = styled.div`
  display: grid;
  grid-gap: ${t.gapRegular};
  grid-auto-rows: min-content;
`;

const TextContainer = styled.div`
  grid-area: text;
  text-align: center;
`;

const Header = styled.h4`
  font-family: ${t.fontFamilyHeader};
`;

export default function Footer(): ReactElement {
  return (
    <Wrapper>
      {/* <Wave /> */}
      <Container>
        <Contact>
          <List>
            <Header>Contact</Header>
            <a href="mailto://jonas@jonassjodin.com">jonas@jonassjodin.com</a>
            <a href="tel:+46702747195">+46 70-274-71-95</a>
          </List>
        </Contact>
        <Follow>
          <List>
            <Header>Follow</Header>
            <a href="https://github.com/JonasKop">Github</a>
            <a href="https://www.linkedin.com/in/jonas-sjodin/">LinkedIn</a>
          </List>
        </Follow>
        <TextContainer>
          {'Icons made by '}
          <a href="https://www.flaticon.com/authors/freepik" title="Freepik">
            Freepik
          </a>
          {' from '}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </TextContainer>
      </Container>
    </Wrapper>
  );
}
