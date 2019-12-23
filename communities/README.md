# Next.js TypeScript project template

## Stacks
- Typescript
- NextJS
- React
- i18n-Next
- EmotionJS

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
		"page": "/",
		"pattern": "/"
	},
	{
		"page": "/communitys",
		"pattern": "/communitys"
	},
		{
		"page": "/community",
		"pattern": "/:communityName"
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
  children: React.ReactNode;
  ctx?: ContextProps;
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

interface CommunityProps extends CommunityQuery {
  userAgent?: string;
}

interface CommunityQuery {
  communityName?: string;
}

const CommunityController: NextPage<CommunityProps> = () => {
  const userStore = React.useContext<UserStoreProps>(UserStore);
  const { query } = useRouterType<CommunityQuery>();
  const { communityName } = query;

  return <Layout ctx={{ userStore }}>{communityName} of Community</Layout>;
};

CommunityController.getInitialProps = async ({ req }: NextPageContext) => {
  const userAgent = req ? req.headers['user-agent'] : navigator.userAgent;
  return { userAgent };
};

export default CommunityController;
```

Then, you can access `/communitys/NextJS`!

### Process
router > pages > controllers > layout > others

# License
The MIT License (MIT)
