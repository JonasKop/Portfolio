import React from 'react';
import Document, { Html, Main, NextScript, DocumentContext, Head } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { DocumentInitialProps, RenderPageResult } from 'next/dist/next-server/lib/utils';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = async (): Promise<RenderPageResult> =>
        originalRenderPage({
          enhanceApp: (App) => (props): React.ReactElement =>
            // eslint-disable-next-line react/jsx-props-no-spreading
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <div id="modal" />
        </body>
      </Html>
    );
  }
}
