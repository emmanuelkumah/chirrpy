import React, { useState } from "react";
import menus from "../../utils/navMenus";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

NavLink;
const Navigation = () => {
  const [showNavItems, setShowNavItems] = useState(false);
  const menuItems = menus.map((menu) => (
    <li key={menu.id} className="py-2">
      <NavLink to={menu.path}>{menu.menuItem}</NavLink>
    </li>
  ));

  const showMenuIcon = () => {
    setShowNavItems((prevState) => !prevState);
  };
  return (
    <>
      <nav className="flex justify-between">
        <div>
          <h2 className="text-2xl">Chirrpy</h2>
        </div>
        <div
          className={
            showNavItems
              ? `block absolute top-10 left-1 bg-[#27213C] w-[100%]`
              : `hidden md:block`
          }
        >
          <ul className="flex flex-col pl-9 py-3 md:flex-row md:space-x-9">
            {menuItems}
          </ul>
        </div>
        <div className="md:hidden">
          <div onClick={showMenuIcon} className="text-2xl text-white">
            {showNavItems ? <TfiClose /> : <AiOutlineMenu />}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
