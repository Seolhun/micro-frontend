import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';
import { useRouterType } from '@src/hooks';

interface AlbumsProps extends AlbumsQuery {
  userAgent?: string;
}

interface AlbumsQuery {
  musicianName?: string;
}

const AlbumsController: NextPage<AlbumsProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<AlbumsQuery>();
  const { musicianName } = query;
  console.error('@@', musicianName);

  return (
    <Layout ctx={{ userStore }}>
      <div>{musicianName}</div>
      Albums
    </Layout>
  );
};

AlbumsController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AlbumsController;
