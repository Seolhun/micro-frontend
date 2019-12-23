import React from 'react';

import { appWithTranslation } from '@src/i18n';

interface HiCordAppProps {
  Component: any;
  pageProps: any;
}

const HiCordApp = ({ Component, pageProps }: HiCordAppProps) => {
  return <Component {...pageProps} />;
};

export default appWithTranslation(HiCordApp);
