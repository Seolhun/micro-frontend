import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';

interface HomeProps {
  userAgent?: string;
}

const HomeController: NextPage<HomeProps> = ({ userAgent }) => {
  console.error('@@', userAgent);
  const userStore = React.useContext<UserStoreProps>(UserStore);

  return <Layout ctx={{ userStore }}>Home</Layout>;
};

HomeController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default HomeController;
