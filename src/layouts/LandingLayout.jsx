import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/landing/Header';
import Nav from '../components/landing/Nav';
import Footer from '../components/landing/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import StickySidebar from '../components/common/StickySidebar';

const LandingLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="relative flex">
      {/* Main content area */}
      <div className="min-w-0 flex-1">
        <ScrollToTop />
        <div
          className={`z-50 flex w-full flex-col gap-1 ${
            isHome ? 'absolute' : 'relative'
          }`}
        >
          {/* <Header /> */}
          <Nav />
        </div>
        <Outlet />
        <Footer />
      </div>

      {/* Sticky Sidebar */}
      <StickySidebar />
    </div>
  );
};

export default LandingLayout;
