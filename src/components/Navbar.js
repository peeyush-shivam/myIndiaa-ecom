import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/shopnexusLogo.png";
import { Heart, ShoppingBag, User, Search, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Navbar = () => {
  const navigate = useNavigate();
  const { cart, wishlist } = useSelector((state) => state.productData);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    const mainContent = document.querySelector(".main-content");
    const top = navbar.offsetTop;

    const stickynavbar = () => {
      if (window.scrollY >= top) {
        navbar.classList.add("sticky");
        mainContent.style.paddingTop = `${navbar.offsetHeight}px`;
      } else {
        navbar.classList.remove("sticky");
        mainContent.style.paddingTop = "0";
      }
    };

    window.addEventListener("scroll", stickynavbar);

    return () => {
      window.removeEventListener("scroll", stickynavbar);
    };
  }, []);

  return (
    <div
      className={`navbar w-full ${
        isMobileMenuOpen ? "h-96" : "h-16"
      } flex justify-between items-center shadow-md pl-24 pr-24 gap-4 max-md:pl-8 max-md:pr-8 max-md:relative`}
    >
      <div className={`${isMobileMenuOpen ? "absolute top-8 left-8" : ""}`}>
        <img
          src={logo}
          alt="shopnexus__logo"
          className=" min-h-10 min-w-10 h-10 w-10 cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
      <div
        className={`nav__links flex justify-between items-center gap-6 ${
          isMobileMenuOpen
            ? "max-lg:absolute max-lg:top-28 max-lg:left-0 max-lg:flex-col max-lg:gap-4 max-lg:w-full"
            : "max-lg:hidden"
        }   `}
      >
        <Link to={"/products/electronics"}>Electronics</Link>
        <Link to={"/products/fashion"}>Fashion</Link>
        <Link to={"/products/beauty"}>Beauty</Link>
        <Link to={"/products/groceries"}>Grocery</Link>
        <Link to={"/products/furniture"}>Furniture</Link>
        <div className="search relative flex items-center justify-center">
          <input
            type="search"
            className="h-8 w-[15rem] rounded bg-secondary-100 pl-4 focus:outline-none placeholder:text-sm"
            placeholder="What are you looking for?"
          />
          <Search className="absolute right-2" />
        </div>
      </div>
      <div
        className={`account flex gap-4 ${
          isMobileMenuOpen ? "absolute top-10 right-8" : ""
        }`}
      >
        <Link to={"/wishlist"} className="flex items-center relative">
          <Heart />
          {wishlist.length > 0 && (
            <div className=" h-4 w-4 bg-secondary-300 flex justify-center items-center absolute top-0 right-0 rounded-full text-xs text-text-100">
              {wishlist.length}
            </div>
          )}
        </Link>
        <Link to={"/cart"} className="flex items-center relative">
          <ShoppingBag />
          {cart.length > 0 && (
            <div className=" h-4 w-4 bg-secondary-300 flex justify-center items-center absolute top-0 right-0 rounded-full text-xs text-text-100">
              {cart.length}
            </div>
          )}
        </Link>
        <Link to={"/account"} className="flex items-center">
          <User />
        </Link>
        <button
          className="ml-auto lg:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
