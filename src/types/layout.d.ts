import React, { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import { Toast } from 'primereact/toast';

/* Next & Layout Types */
type Page<P = {}> = NextPage<P> & {
    getLayout?: (page: ReactElement) => ReactNode;
};
