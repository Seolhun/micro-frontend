import React from 'react';
import styled from '@emotion/styled';
import { ContextProps } from '@src/stores';

export interface MusicianLayoutProps {
  ctx: ContextProps;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div({});

const MusicianLayout = ({ children }: MusicianLayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default MusicianLayout;
