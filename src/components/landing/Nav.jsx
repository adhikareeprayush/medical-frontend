import { Link } from "react-router-dom";

const navMenus = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Services",
    path: "/services",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Nav = () => {
  return (
    <section className="flex items-center w-full justify-between bg-primary py-[18px]">
      <div className="flex items-center">
        {navMenus.map((menu, index) => (
          <Link key={index} to={menu.path} className="text-white mx-4">
            {menu.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center">
        <Link to="/login" className="text-white mx-4">
          Login
        </Link>
        <a href="/register" className="text-white mx-4">
          Register
        </a>
      </div>
    </section>
  );
};

export default Nav;
