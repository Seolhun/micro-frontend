import React from 'react';
import Head from 'next/head';

export interface MetaProps {}

export const Meta: React.FC<MetaProps> = ({ children }) => {
  return <Head>{children}</Head>;
};

export default Meta;
