import React from 'react';

import styled from '@emotion/styled';

import { ContextProps } from '@src/stores';

export interface LayoutProps {
  children: React.ReactNode;
  ctx?: ContextProps;
}

const LayoutWrapper = styled.div({
  padding: '2rem 4rem',
});

const LayoutContainer = styled.div({});

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutWrapper>
      <LayoutContainer>{children}</LayoutContainer>
    </LayoutWrapper>
  );
};

export default Layout;
