import React from 'react';
import styled from '@emotion/styled';
import { ContextProps } from '@src/stores';

export interface MusiciansLayoutProps {
  ctx: ContextProps;
  children: React.ReactNode;
}

const LayoutWrapper = styled.div({});

const MusiciansLayout = ({ children }: MusiciansLayoutProps) => {
  return <LayoutWrapper>{children}</LayoutWrapper>;
};

export default MusiciansLayout;
