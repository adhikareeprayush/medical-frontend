import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Nav from "../components/landing/Nav";
import HeroSec from "../components/landing/Hero Section/HeroSec";
import WelcomeSec from "../components/WelcomeSec";
import DoctorSec from "../components/landing/DoctorSec";


const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <HeroSec />
      <WelcomeSec />
      <DoctorSec />
      <main className="p-6">
        <Outlet />
      </main>
      <footer className="mt-10">Landing Footer</footer>
    </div>
  );
};

export default LandingLayout;
