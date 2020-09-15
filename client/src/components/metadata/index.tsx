import React, { ReactElement } from 'react';

export default function Metadata(): ReactElement {
  return (
    <>
      <meta property="og:title" content="FowlitLogo" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://fowlit.com" />
      <meta property="og:image" content="https://fowlit.com/images/employees/jonas.png" />
    </>
  );
}
