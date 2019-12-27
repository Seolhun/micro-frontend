import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { useRouterType } from '@src/hooks';
import { Meta } from '@src/components';

interface NoticeProps extends NoticeQuery {
  userAgent?: string;
}

interface NoticeQuery {
  noticeName?: string;
}

const NoticeController: NextPage<NoticeProps> = () => {
  const { query } = useRouterType<NoticeQuery>();
  const { noticeName } = query;

  return (
    <Layout>
      <Meta>
        <title>{noticeName} of Notices Hi-Cord</title>
      </Meta>
      {noticeName} of Notices
    </Layout>
  );
};

NoticeController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default NoticeController;
