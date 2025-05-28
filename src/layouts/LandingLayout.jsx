import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Nav from "../components/landing/Nav";
import Footer from "../components/landing/Footer";

const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main className="p-6">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default LandingLayout;
