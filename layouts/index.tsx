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
