import React from 'react';
import { AppContextType } from 'next/dist/next-server/lib/utils';

import { appWithTranslation } from '@src/i18n';

interface HiCordAppProps {
  Component: any;
  pageProps: any;
}

const HiCordApp = ({ Component, pageProps }: HiCordAppProps) => {
  return <Component {...pageProps} />;
};

HiCordApp.getInitialProps = async ({ Component, ctx }: AppContextType) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  return { pageProps };
};

export default appWithTranslation(HiCordApp);
