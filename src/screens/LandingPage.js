import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import SaleBanner from "../components/SaleBanner";
import Footer from "../components/Footer";

const LandingPage = () => {
  return (
    <div className=" w-full h-full flex flex-col ">
      <header className="w-full h-fit">
        <SaleBanner />
        <nav>
          <Navbar />
        </nav>
      </header>
      <main className="main-content w-full h-fit pl-24 pr-24">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default LandingPage;
