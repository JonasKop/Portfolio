import React, { ReactElement } from 'react';

interface ArrowProps {
  rotate: boolean;
}

export default function Arrow({ rotate }: ArrowProps): ReactElement {
  return (
    <svg
      transform={rotate ? 'scale(-1, 1)' : ''}
      width="40"
      height="13"
      viewBox="0 0 40 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 6.29785L30 12.0714V0.524349L40 6.29785ZM0 5.29785L31 5.29785V7.29785L0 7.29785L0 5.29785Z"
        fill="#FEC576"
      />
    </svg>
  );
}
