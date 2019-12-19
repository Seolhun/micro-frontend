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
