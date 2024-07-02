import { Link } from "react-router-dom";
import logo from "../assets/shopnexusLogo.png";
import { Heart } from "lucide-react";
import { ShoppingBag } from "lucide-react";
import { User } from "lucide-react";
import { Search } from "lucide-react";

const Navbar = () => {
  return (
    <div className="logo w-full h-16 flex justify-between items-center  shadow-md pl-24 pr-24">
      <div className="">
        <img src={logo} alt="shopnexus__logo" className=" h-10 w-10" />
      </div>
      <div className="nav__links flex gap-10">
        <Link to={"/products/electronics"}>Electronics</Link>
        <Link to={"/products/fashion"}>Fashion</Link>
        <Link to={"/products/beauty"}>Beauty</Link>
        <Link to={"/products/groceries"}>Grocery</Link>
        <Link to={"/products/furniture"}>Furniture</Link>
      </div>
      <div className="account flex gap-4">
        <div className="search relative flex items-center justify-center">
          <input
            type="search"
            className="h-8 w-[20rem] rounded bg-secondary-100 pl-4 focus:outline-none placeholder:text-sm"
            placeholder="What are you looking for?"
          />
          <Search className="absolute right-2" />
        </div>
        <Link to={"/wishlist"} className="flex items-center">
          <Heart />
        </Link>
        <Link to={"/cart"} className="flex items-center">
          <ShoppingBag />
        </Link>
        <Link to={"/account"} className="flex items-center">
          <User />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
