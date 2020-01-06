import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { Meta } from '@src/components';
import { LanguageChanger } from '@src/containers';

interface HomeProps {
  userAgent?: string;
  namespacesRequired?: string[];
}

const HomeController: NextPage<HomeProps> = () => {
  return (
    <Layout>
      <Meta>
        <title>Hi-Cord Home</title>
      </Meta>
      <LanguageChanger />
      <h1>Home</h1>
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
