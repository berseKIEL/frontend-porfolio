import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Page } from './layout';

// Children props para React Node
type ChildContainerProps = {
  children: ReactNode;
};

//
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type {
  ChildContainerProps,
  NextPageWithLayout,
  AppPropsWithLayout,
  Page
};