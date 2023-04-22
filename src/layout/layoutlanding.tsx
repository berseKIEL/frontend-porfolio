import LandingFooter from '@/components/landing/LandingFooter';
import LandingMain from '@/components/landing/LandingMain';
import LandingNavBar from '@/components/landing/LandingNavBar';
import { ChildContainerProps } from '@/types/types';
import React from 'react';

const LayoutLanding = ({children}: ChildContainerProps) => {
  return (
    <div className="surface-0 flex justify-content-center min-h-screen">
      <div id="home" className="w-full overflow-hidden flex flex-column justify-content-between">
        <LandingNavBar />
        { children }
        <LandingFooter />
      </div>
    </div>
  );
};

export default LayoutLanding;
