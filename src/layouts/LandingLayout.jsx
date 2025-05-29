import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Nav from "../components/landing/Nav";
import Footer from "../components/landing/Footer";
import PageBanner from "../components/landing/PageBanner";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <PageBanner />
      <main className="py-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
