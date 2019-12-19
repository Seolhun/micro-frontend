import React from 'react';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';

interface MusiciansProps {}

export default ({}: MusiciansProps) => {
  const userStore = React.useContext<UserStoreProps>(UserStore);

  return <Layout ctx={{ userStore }}>Musicians</Layout>;
};
