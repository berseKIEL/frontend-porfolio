import type { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import type { AppProps } from 'next/app';

import { Page, LayoutState, LayoutContextProps } from './layout';

// Children props para React Node
type ChildContainerProps = {
  children: ReactNode;
};

// Next page Without Layout
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

// Page without layout
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type {
  ChildContainerProps,
  NextPageWithLayout,
  AppPropsWithLayout,
  Page,
  LayoutState,
  LayoutContextProps,
};
