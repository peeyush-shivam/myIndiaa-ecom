import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SaleBanner from "../components/SaleBanner";
import Footer from "../components/Footer";
import React from "react";

const MemoizedSaleBanner = React.memo(SaleBanner);
const MemoizedNavbar = React.memo(Navbar);
const MemoizedFooter = React.memo(Footer);

const LandingPage = () => {
  return (
    <div className=" w-full h-full flex flex-col ">
      <header className="w-full h-fit">
        <MemoizedSaleBanner />
        <nav className="h-fit">
          <MemoizedNavbar />
        </nav>
      </header>
      <main className="main-content w-full h-fit pl-24 pr-24 max-md:pl-8 max-md:pr-8">
        <Outlet />
      </main>
      <footer>
        <MemoizedFooter />
      </footer>
    </div>
  );
};

export default LandingPage;
