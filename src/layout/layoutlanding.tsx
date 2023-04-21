import LandingMain from '@/components/landing/LandingMain';
import LandingNavBar from '@/components/landing/LandingNavBar';
import React from 'react';

const LayoutLanding = () => {
  return (
    <div className="surface-0 flex justify-content-center">
      <div id="home" className="w-full overflow-hidden">
        <LandingNavBar />
        <LandingMain />
      </div>
    </div>
  );
};

export default LayoutLanding;
