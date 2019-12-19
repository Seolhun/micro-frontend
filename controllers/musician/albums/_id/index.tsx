import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';
import { useRouterType } from '@src/hooks';

interface AlbumProps extends AlbumQuery {
  userAgent?: string;
}

interface AlbumQuery {
  musicianName?: string;
  albumName?: string;
}

const AlbumController: NextPage<AlbumProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<AlbumQuery>();
  const { musicianName, albumName } = query;
  console.error('@@', query);

  return (
    <Layout ctx={{ userStore }}>
      <div>{musicianName}</div>
      <div>{albumName}</div>
      Album
    </Layout>
  );
};

AlbumController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default AlbumController;
