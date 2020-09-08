import { Link } from 'react-scroll';
import React, { ReactElement, ReactNode } from 'react';

interface PhoneItemProps {
  to: string;
  onClick: () => void;
  children: ReactNode;
}

export default function PhoneItem({ to, onClick, children }: PhoneItemProps): ReactElement {
  return (
    <Link activeClass="active" to={to} offset={-70} duration={500} spy smooth onClick={onClick}>
      {children}
    </Link>
  );
}
