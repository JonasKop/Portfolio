import React, { ReactElement, useState } from 'react';
import styled from 'styled-components';
import { useSpring, animated } from 'react-spring';
import Hamburger from '../../resources/illustrations/hamburger';
import Cross from '../../resources/illustrations/cross';
import t from '../../theme';
import Modal from '../modal';
import PhoneItem from './phoneItem';

const Container = styled.div`
  grid-area: nav;

  cursor: pointer;
  width: 40px;
  height: 40px;

  @media (min-width: ${t.widthPhone}) {
    display: none;
  }
`;

const Icon = styled(animated.div)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
`;

export default function PhoneMenu(): ReactElement {
  const [open, setOpen] = useState(false);
  const { transform, opacity } = useSpring({
    opacity: open ? 1 : 0,
    transform: `scale(${open ? 1 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 },
  });

  const flip = (): void => setOpen((state) => !state);

  return (
    <Container onClick={flip}>
      {open && (
        <Modal>
          <PhoneItem to="greeting" onClick={() => setOpen(false)}>
            Home
          </PhoneItem>
          <PhoneItem to="about" onClick={() => setOpen(false)}>
            About
          </PhoneItem>
          <PhoneItem to="projects" onClick={() => setOpen(false)}>
            Projects
          </PhoneItem>
          <PhoneItem to="contact" onClick={() => setOpen(false)}>
            Contact
          </PhoneItem>
        </Modal>
      )}
      <Icon style={{ opacity: opacity.interpolate((o) => 1 - o), transform }}>
        <Hamburger />
      </Icon>
      <Icon style={{ opacity, transform: transform.interpolate((tr) => `${tr} scale(1)`) }}>
        <Cross />
      </Icon>
    </Container>
  );
}
