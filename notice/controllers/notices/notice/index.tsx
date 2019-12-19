import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';
import { useRouterType } from '@src/hooks';

interface NoticeProps extends NoticeQuery {
  userAgent?: string;
}

interface NoticeQuery {
  noticeName?: string;
}

const NoticeController: NextPage<NoticeProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<NoticeQuery>();
  const { noticeName } = query;

  return <Layout ctx={{ userStore }}>{noticeName} of Notice</Layout>;
};

NoticeController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default NoticeController;
