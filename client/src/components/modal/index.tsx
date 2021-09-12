import React from 'react';
import { createPortal } from 'react-dom';
import styled from 'styled-components';
import t, { ThemeObj } from '../../theme';

const SBackground = styled.div`
  position: fixed;
  top: 0;
  height: 105vh;
  left: 0;
  right: 0;
  background: ${t.colorBackground};
  transform: translate3d(0, 0, 0);
  display: flex;
  z-index: ${(p: ThemeObj): number => p.theme.zIndex.header - 1};
`;

interface MProps {
  children: React.ReactNode;
}

const Modal: React.FC<MProps> = ({ children }: MProps) =>
  createPortal(<SBackground>{children}</SBackground>, document.querySelector('#modal') as Element);

export default Modal;
