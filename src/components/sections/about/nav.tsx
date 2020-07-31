import React, { ReactElement } from 'react';
import styled from 'styled-components';
import User from '../../../resources/illustrations/user';
import Book from '../../../resources/illustrations/book';
import Experience from '../../../resources/illustrations/experience';
import Skills from '../../../resources/illustrations/skills';
import t from '../../../theme';

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
`;

const Button = styled.button`
  cursor: pointer;
  display: grid;
  /* border: 2px solid red; */
  grid-gap: 10px;
  justify-items: center;
`;

const Text = styled.h6``;

export default function Nav(): ReactElement {
  return (
    <Container>
      {/* <Button>
        <Text>ABOUT</Text>
        <User />
      </Button>
      <Button>
        <Text>EDUCATION</Text>
        <Book />
      </Button>
      <Button>
        <Text>EXPERIENCE</Text>
        <Experience />
      </Button>
      <Button>
        <Text>SKILLS</Text>
        <Skills />
      </Button> */}
    </Container>
  );
}
