import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Nav from "../components/landing/Nav";
import HeroSec from "../components/landing/Hero Section/HeroSec";


const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <HeroSec />
      <main className="p-6">
        <Outlet />
      </main>
      <footer className="mt-10">Landing Footer</footer>
    </div>
  );
};

export default LandingLayout;
