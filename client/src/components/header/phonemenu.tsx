import React, { ReactElement, useState } from 'react';
import { animated, useSpring } from 'react-spring';
import styled from 'styled-components';
import Cross from '../../resources/illustrations/cross.svg';
import Hamburger from '../../resources/illustrations/hamburger.svg';
import t from '../../theme';
import Modal from '../modal';
import PhoneItem from './phoneItem';

const ItemsContainer = styled.div`
  display: grid;
  grid-gap: ${t.gapMedium};
  width: 100%;
  height: 100%;
  align-content: center;
  padding: ${t.paddingMedium};
`;

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
          <ItemsContainer>
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
          </ItemsContainer>
        </Modal>
      )}
      <Icon style={{ opacity: opacity.to((o) => 1 - (o as number)), transform }}>
        <Hamburger />
      </Icon>
      <Icon style={{ opacity, transform: transform.to((tr) => `${tr} scale(1)`) }}>
        <Cross />
      </Icon>
    </Container>
  );
}
