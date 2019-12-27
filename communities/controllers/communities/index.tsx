import React from 'react';
import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { Meta } from '@src/components';

interface CommunityListControllerProps {
  userAgent?: string;
  namespacesRequired?: string[];
}

const CommunityListController: NextPage<CommunityListControllerProps> = () => {
  return (
    <Layout>
      <Meta>
        <title>Communities on Hi-Cord</title>
      </Meta>
      Communities
    </Layout>
  );
};

CommunityListController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return {
    userAgent,
    namespacesRequired: ['common'],
  };
};

export default CommunityListController;
