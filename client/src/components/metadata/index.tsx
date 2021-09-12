import React, { ReactElement } from 'react';

export default function Metadata(): ReactElement {
  return (
    <>
      <meta property="og:title" content="Jonas Sjödin" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jonassjodin.com" />
      <meta property="og:image" content="https://jonassjodin.com/jonas.png" />
    </>
  );
}
