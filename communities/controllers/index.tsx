import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { i18n, useTranslation } from '@src/i18n';
import { Meta } from '@src/components';

interface HomeProps {
  userAgent?: string;
  namespacesRequired?: string[];
}

const HomeController: NextPage<HomeProps> = ({ namespacesRequired }) => {
  const { t } = useTranslation(namespacesRequired);

  return (
    <Layout>
      <Meta>
        <title>Hi-Cord Notice</title>
      </Meta>
      <button type="button" onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'ko' : 'en')}>
        {t('banner')}
      </button>
    </Layout>
  );
};

HomeController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return {
    userAgent,
    namespacesRequired: ['common'],
  };
};

export default HomeController;
