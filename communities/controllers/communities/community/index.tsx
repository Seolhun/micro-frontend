import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';
import { useRouterType } from '@src/hooks';

interface CommunityProps extends CommunityQuery {
  userAgent?: string;
}

interface CommunityQuery {
  noticeName?: string;
}

const CommunityController: NextPage<CommunityProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<CommunityQuery>();
  const { noticeName } = query;

  return <Layout ctx={{ userStore }}>{noticeName} of Community</Layout>;
};

CommunityController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default CommunityController;
