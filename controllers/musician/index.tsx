import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';
import { useRouterType } from '@src/hooks';

interface MusicianProps extends MusicianQuery {
  userAgent?: string;
}

interface MusicianQuery {
  musicianName?: string;
}

const MusicianController: NextPage<MusicianProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<MusicianQuery>();
  const { musicianName } = query;

  return (
    <Layout ctx={{ userStore }}>
      <div>{musicianName}</div>
      Musician
    </Layout>
  );
};

MusicianController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default MusicianController;
