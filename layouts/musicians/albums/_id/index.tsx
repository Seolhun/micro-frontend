import React from 'react';
import styled from '@emotion/styled';
import { ContextProps } from '@src/stores';

export interface AlbumLayoutProps {
  ctx: ContextProps;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div({});

const AlbumLayout = ({ children }: AlbumLayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default AlbumLayout;
