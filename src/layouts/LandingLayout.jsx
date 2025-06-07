import { Outlet } from 'react-router-dom';
import Header from '../components/landing/Header';
import Nav from '../components/landing/Nav';
import Footer from '../components/landing/Footer';
import ScrollToTop from '../components/common/ScrollToTop';
import StickySidebar from '../components/common/StickySidebar';

const LandingLayout = () => {
  return (
    <div className="relative flex">
      {/* Main content area */}
      <div className="min-w-0 flex-1">
        <ScrollToTop />
        <Header />
        <Nav />
        <Outlet />
        <Footer />
      </div>

      {/* Sticky Sidebar */}
      <StickySidebar />
    </div>
  );
};

export default LandingLayout;
