import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import t from '../../../theme';
import Nav from './nav';
import content from './content';

const Container = styled.div`
  background: ${t.colorBackgroundLight};
  width: 100vw;
  height: calc(100vh - 50px - (2 * ${t.paddingTiny}));
  display: grid;
  grid-template-rows: 1fr max-content;
  grid-template-areas: 'section' 'nav';

  @media (min-width: ${t.widthPhone}) {
    grid-template-areas: 'nav' 'section';
    grid-template-rows: max-content 1fr;
    height: 600px;
    max-width: 1000px;
  }
`;

const Image = styled.div`
  grid-area: image;
`;

const Section = styled.section`
  grid-area: section;
  grid-template-rows: min-content min-content 1fr min-content;
  grid-template-areas: 'sectionHeader' 'title' 'textBody' 'image';
  display: grid;
  svg {
    max-width: 250px;
    max-height: 150px;
    justify-self: center;
  }

  @media (min-width: ${t.widthPhone}) {
    grid-template-rows: min-content min-content 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'image sectionHeader'
      'image title'
      'image textBody';
    ${Image} {
      justify-self: center;
      align-self: center;
      * {
        max-width: 600px;
        max-height: 300px;
      }
    }
  }
`;

const SectionHeader = styled.h6`
  grid-area: sectionHeader;
  color: ${t.colorAccent};
`;

const SectionTitle = styled.h3`
  grid-area: title;
`;

const TextBody = styled.div`
  grid-area: textBody;
`;

const navItems = content.map((e) => e.nav);

export default function About(): ReactElement {
  const [current, setCurrent] = useState(content[1]);

  function setActive(x: string) {
    setCurrent(content.filter((e) => e.nav.title === x)[0]);
  }

  return (
    <Container id="about">
      <Section>
        <SectionHeader>ABOUT ME</SectionHeader>
        <SectionTitle>{current.body.title}</SectionTitle>
        <TextBody>
          {current.body.text
            .split('\n')
            .map((e) => e.trim())
            .filter((e) => e)
            .map((e) => {
              return <p key={e}>{e}</p>;
            })}
        </TextBody>

        <Image>
          <current.body.Component />
        </Image>
      </Section>
      <Nav items={navItems} current={current.nav} setActive={setActive} />
    </Container>
  );
}
