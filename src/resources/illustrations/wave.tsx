import React, { ReactElement } from 'react';

interface WaveProps {
  rotate: boolean;
}

export default function Wave({ rotate }: WaveProps): ReactElement {
  return (
    <svg
      style={{ display: 'block' }}
      transform={rotate ? 'rotate(180)' : ''}
      viewBox="0 0 238 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M-4 2.47148V10H238V2.47148C202.241 -3.08935 156.41 2.47148 153.388 2.47148C150.366 2.47148 111.334 7.26236 69.2799 2.47148C35.6366 -1.36122 6.4086 0.874525 -4 2.47148Z"
        fill="#363732"
      />
    </svg>
  );
}
