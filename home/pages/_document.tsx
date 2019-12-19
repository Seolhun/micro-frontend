import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document<any> {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
          <meta name="description" content="" />
          <link rel="stylesheet" href="https://cdn.rawgit.com/filipelinhares/ress/master/dist/ress.min.css" />
          <link rel="stylesheet" href="/static/styles/default.css" />
          <link rel="manifest" href="/static/manifest/manifest.json" />
          <link rel="manifest" href="manifest.webmanifest" />
          <script
            async
            src="https://cdn.jsdelivr.net/npm/pwacompat@2.0.7/pwacompat.min.js"
            integrity="sha384-ptgwb3/v69WGur7IwSnWOowVxE7hcRB3DG/EiHdejrw2sFNwUHynFbiRMPxc4hdS"
            crossOrigin="anonymous"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
