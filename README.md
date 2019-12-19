# Next.js TypeScript project template

## Requirement

node > 10.12.0

### Page

After the cli ran, a file is created under the pages dir.

The file includes only default export from the controllers.

```ts
// pages/profile/index.tsx
export { default } from '@controllers/profile'

```
### Routes

```ts
export default [
	{
		"page": "/musicians",
		"pattern": "/musicians"
	},
	{
		"page": "/musician",
		"pattern": "/:musicianName"
	},
	{
		"page": "/musician/albums",
		"pattern": "/:musicianName/albums"
	},
	{
		"page": "/musician/albums/_id",
		"pattern": "/:musicianName/albums/:albumName"
	},
]
```

### Controller

Bind React Context like Store

```ts
import React from 'react';

import { NextPage, NextPageContext } from 'next';

import Layout from '@layouts/index';
import { UserStore, UserStoreProps } from '@src/stores';

interface HomeProps {
  userAgent?: string;
}

const HomeController: NextPage<HomeProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);

  return <Layout ctx={{ userStore }}>Home</Layout>;
};

HomeController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default HomeController;

```

### Layout

The layout is just a React component called by the controller.

```ts
import React from 'react';
import styled from '@emotion/styled';
import { ContextProps } from '@src/stores';

export interface LayoutProps {
  ctx: ContextProps;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div({});

const Layout = ({ children }: LayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default Layout;
```

Then, you can access `/musicians/Seolhun`!

Also multiple query parameters are ok.

```ts
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
```

Then, you can access `/musicians/Seolhun/albums/goods`!

### Process
router > pages > controllers > layout > others

# License
The MIT License (MIT)
