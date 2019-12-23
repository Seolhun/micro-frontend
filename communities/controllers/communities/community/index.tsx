import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { useRouterType } from '@src/hooks';
import { Meta } from '@src/components';

interface CommunityProps extends CommunityQuery {
  userAgent?: string;
}

interface CommunityQuery {
  communityName?: string;
}

const CommunityController: NextPage<CommunityProps> = () => {
  const { query } = useRouterType<CommunityQuery>();
  const { communityName } = query;

  return (
    <Layout>
      <Meta>
        <title>{communityName} of Communities Hi-Cord</title>
      </Meta>
      {communityName} of Communities
    </Layout>
  );
};

CommunityController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default CommunityController;
