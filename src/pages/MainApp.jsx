import React, { useState } from "react";
import HamburgerDrawer from "react-hamburger-drawer";
import MainSection from "../components/App/MainSection";
import { Link, Outlet } from "react-router-dom";

const MainApp = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  return (
    <>
      <div>
        <HamburgerDrawer>
          <ul className="text-black text-xl px-7">
            <li>
              <Link to="/chirrpy/">Chirrpy</Link>
            </li>
            <li>
              <Link to="library">Library</Link>
            </li>
          </ul>
        </HamburgerDrawer>
        <div className="pt-[15%]">
          <MainSection />
        </div>
      </div>
    </>
  );
};

export default MainApp;
