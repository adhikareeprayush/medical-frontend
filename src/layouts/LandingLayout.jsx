import { Outlet } from "react-router-dom";
import Header from "../components/landing/Header";
import Nav from "../components/landing/Nav";
import Hero from "../components/landing/Hero";


const LandingLayout = () => {
  return (
    <div>
      <Header />
      <Nav />
      <main className="p-6">
        <Outlet />
      </main>
      <footer className="mt-10">Landing Footer</footer>
    </div>
  );
};

export default LandingLayout;
