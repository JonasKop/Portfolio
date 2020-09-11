import { Link } from 'react-scroll';
import React, { ReactElement, ReactNode } from 'react';
import styled from 'styled-components';
import t from '../../theme';

interface PhoneItemProps {
  to: string;
  onClick: () => void;
  children: ReactNode;
}

const SLink = styled(Link)`
  font-size: ${t.fontSizeRegular};
  font-family: ${t.fontFamilyHeader};
  width: 100%;
  &.active {
    color: ${t.colorAccent};
  }
  &:hover {
    text-decoration: none;
  }

  position: relative;
  &:after {
    content: '';

    width: 100%;
    position: absolute;
    left: 0;
    bottom: 1px;

    border-width: 0 0 1px;
    border-style: solid;
  }
`;

export default function PhoneItem({ to, onClick, children }: PhoneItemProps): ReactElement {
  return (
    <SLink activeClass="active" to={to} offset={-70} duration={500} spy smooth onClick={onClick}>
      {children}
    </SLink>
  );
}
