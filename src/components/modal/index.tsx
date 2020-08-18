import styled from 'styled-components';
import React from 'react';
import { createPortal } from 'react-dom';
import t, { ThemeObj } from '../../theme';

const SBackground = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: ${t.colorBackground};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: ${(p: ThemeObj): string => p.theme.zIndex.header - 1};
`;

interface MProps {
  children: React.ReactNode;
}

const Modal: React.FC<MProps> = ({ children }: MProps) => {
  return createPortal(
    <SBackground>
      <div>{children}</div>
    </SBackground>,
    document.querySelector('#modal') as Element
  );
};

export default Modal;
