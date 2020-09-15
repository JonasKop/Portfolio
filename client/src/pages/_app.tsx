import React, { ReactChild, ReactElement } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import App from 'next/app';
import Head from 'next/head';

import Metadata from '../components/metadata';
import Footer from '../components/footer';
import Main from '../components/main';
import Header from '../components/header';

import t, { appTheme } from '../theme';
import Global from '../theme/global';

const Body = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr minmax(${t.widthMin}, ${t.widthMax}) 1fr;
  grid-template-rows: max-content 1fr ${t.paddingMedium} max-content;
  grid-template-areas: 'header header header' '. main .' '. . .' 'footer footer footer';
`;

interface StylerProps {
  children: ReactChild;
}

function Styler({ children }: StylerProps): ReactElement {
  return (
    <ThemeProvider theme={appTheme}>
      <Head>
        <title>Jonas Sjödin</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Source+Sans+Pro:wght@300;400;700&display=swap"
          rel="stylesheet"
        />
        <Metadata />
      </Head>
      <Body>
        <Global />
        <Header />
        <Main>{children}</Main>
        <Footer />
      </Body>
    </ThemeProvider>
  );
}

class Web extends App {
  render(): React.ReactElement {
    const { Component, pageProps } = this.props;
    /* eslint-disable react/jsx-props-no-spreading */
    return (
      <Styler>
        <Component {...pageProps} />
      </Styler>
    );
  }
}

export default Web;
