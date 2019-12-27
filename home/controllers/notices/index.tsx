import React from 'react';
import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { Meta } from '@src/components';

interface NoticeListControllerProps {
  userAgent?: string;
  namespacesRequired?: string[];
}

const NoticeListController: NextPage<NoticeListControllerProps> = () => {
  return (
    <Layout>
      <Meta>
        <title>Notices on Hi-Cord</title>
      </Meta>
      Notices
    </Layout>
  );
};

NoticeListController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;

  return {
    userAgent,
    namespacesRequired: ['common'],
  };
};

export default NoticeListController;
