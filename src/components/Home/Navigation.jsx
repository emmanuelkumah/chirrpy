import React from "react";
import HamburgerDrawer from "react-hamburger-drawer";
import menus from "../../utils/navMenus";
import { Link } from "react-router-dom";

const Navigation = () => {
  const menuItem = menus.map((item) => (
    <li key={item.id} className="text-gray-950 text-xl">
      <Link to={item.url}>{item.menuItem}</Link>
    </li>
  ));
  return (
    <>
      <header className="relative py-4 mb-5">
        <HamburgerDrawer>
          <ul className="pl-9">{menuItem}</ul>
        </HamburgerDrawer>
        <div className="absolute left-[30%]">
          <h1 className="text-3xl">Chirrpy</h1>
        </div>
      </header>
    </>
  );
};

export default Navigation;
