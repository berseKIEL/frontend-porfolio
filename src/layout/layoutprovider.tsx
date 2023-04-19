import React, { useState, createContext } from 'react';
import { LayoutState, ChildContainerProps, LayoutContextProps } from '@/types/types';

export const LayoutContext = createContext({} as LayoutContextProps);

export const LayoutProvider = ({ children }: ChildContainerProps) => {
    return <LayoutContext.Provider> {children} </LayoutContext.Provider>
}
