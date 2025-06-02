import { Outlet } from 'react-router-dom';
import Header from '../components/landing/Header';
import Nav from '../components/landing/Nav';
import Footer from '../components/landing/Footer';
import ScrollToTop from '../components/common/ScrollToTop';

const LandingLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <Header />
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default LandingLayout;
