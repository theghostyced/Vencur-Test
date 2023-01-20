import React from "react";
import {Outlet} from "react-router-dom";
import Logo from "./common/Logo";
import Navigation from "./global/navigation/Navigation";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import CustomScroll from "react-custom-scrollbars-2";

function Layout() {
  const [drawer, setDrawer] = React.useState(false);
  const toggleDrawer = () => {
    setDrawer((prevState) => !prevState);
  };

  return (
    <div className="flex md:flex-row flex-col">
      <div className="hidden md:block">
        <div className="fixed top-0 left-0 bottom-0 max-w-[290px] z-50">
          <CustomScroll style={{width: 290, minHeight: `calc(100vh)`}}>
            <Navigation />
          </CustomScroll>
        </div>
      </div>
      <div className="md:hidden">
        <div className="bg-white border-b border-gray-200 p-4">
          <nav>
            <div className="flex justify-between">
              <div>
                <Logo />
              </div>
              <div>
                <button type="button" onClick={toggleDrawer}>
                  <img src="/images/menu-2.svg" alt="" />
                </button>
              </div>
            </div>
          </nav>
        </div>
        <Drawer open={drawer} onClose={toggleDrawer} direction="left">
          <CustomScroll style={{width: 290, minHeight: `calc(100vh)`}}>
            <Navigation />
          </CustomScroll>
        </Drawer>
      </div>
      <div className="bg-gray-50 p-4 md:p-8 min-h-screen w-full md:ml-[290px]">
        <div className="">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
