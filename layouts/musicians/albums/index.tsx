import React from 'react';
import styled from '@emotion/styled';
import { ContextProps } from '@src/stores';

export interface AlbumsLayoutProps {
  ctx: ContextProps;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div({});

const AlbumsLayout = ({ children }: AlbumsLayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AlbumsLayout;
