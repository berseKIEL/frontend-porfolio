import { ChildContainerProps } from '@/types/types';
import LandingNavBar from '@/components/landing/LandingNavBar';
import LandingFooter from '@/components/landing/LandingFooter';

const AppLayout = ({ children }: ChildContainerProps) => {
  return (
    <div className="surface-0 flex justify-content-center min-h-screen">
      <div
        id="home"
        className="w-full overflow-hidden flex flex-column justify-content-between"
      >
        <LandingNavBar />
        <main className="main my-7 px-6 flex flex-column align-items-center justify-content-center">
          {children}
        </main>
        <LandingFooter />
      </div>
    </div>
  );
};

export default AppLayout;
