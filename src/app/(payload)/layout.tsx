/* THIS FILE WAS GENERATED AUTOMATICALLY BY PAYLOAD. */
import type { Metadata } from 'next';

import config from '@payload-config';
import { RootLayout } from '@payloadcms/next/layouts';

import '@payloadcms/next/css';

type Args = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: 'Saraya Solutions CMS',
  description: 'Content Management System',
};

const Layout = ({ children }: Args) => <RootLayout config={config}>{children}</RootLayout>;

export default Layout;
