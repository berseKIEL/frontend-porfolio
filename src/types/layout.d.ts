import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Toast } from 'primereact/toast';

/* Next & Layout Types */
type Page<P = {}> = NextPage<P> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type LayoutState = {
  staticMenuDesktopInactive: boolean;
  overlayMenuActive: boolean;
  profileSidebarVisible: boolean;
  configSidebarVisible: boolean;
  staticMenuMobileActive: boolean;
  menuHoverActive: boolean;
};

export type NodeRef = MutableRefObject<ReactNode>;