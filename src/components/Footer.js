import qr from "../assets/image-qr.png";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  SendHorizontal,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-text-300 w-full flex justify-between items-center text-sm h-96 pl-24 pr-24 mt-16 text-primary-100">
      <div className="flex flex-col h-36 items-start gap-2 max-lg:text-xs">
        <span className="text-lg font-semibold ">Exclusive</span>
        <span className="cursor-pointer ">Subscribe</span>
        <label className="text-xs">Get 10% off on you first order</label>
        <div className=" relative flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter your mail"
            className="rounded-sm pl-2 pr-6 w-[10rem] max-sm:w-[5rem] focus:outline-none placeholder:text-xs text-text-300"
          />
          <SendHorizontal
            size={15}
            className="absolute text-text-300 right-1 cursor-pointer"
          />
        </div>
      </div>
      <div className="flex flex-col h-36 items-start gap-2 max-lg:text-xs max-sm:hidden max-lg:hidden">
        <span className="text-lg font-semibold ">Support</span>
        <span>
          1234 Maplewood Drive Springfield
          <br /> IL 62704 USA
        </span>
        <span>
          <a href="mailto:support@shopnexus.com">support@shopnexus.com</a>
        </span>
        <span> +58 642365461 </span>
      </div>
      <div className="flex flex-col h-36 items-start gap-2 max-lg:text-xs">
        <span className="text-lg font-semibold ">Account</span>
        <span className="cursor-pointer ">My Account</span>
        <span className="cursor-pointer ">Login/Register</span>
        <span className="cursor-pointer ">Cart</span>
        <span className="cursor-pointer ">Wishlist</span>
      </div>
      <div className="flex flex-col h-36 items-start gap-2 max-lg:text-xs max-sm:hidden max-lg:hidden">
        <span className="text-lg max-sm:text- font-semibold ">Quick Link</span>
        <span className="cursor-pointer ">Privacy Policy</span>
        <span className="cursor-pointer ">Terms of Use</span>
        <span className="cursor-pointer ">FAQ</span>
        <span className="cursor-pointer ">Contact</span>
      </div>
      <div className="flex flex-col h-36 justify-between items-center max-lg:text-xs max-sm:text-xs max-sm:hidden ">
        <span className="text-lg font-semibold ">Download App</span>
        <img src={qr} alt="qr-code" className=" h-16 w-16" />
        <div className="flex w-full justify-between">
          <Facebook size={20} className="cursor-pointer " />
          <Instagram size={20} className="cursor-pointer " />
          <Twitter size={20} className="cursor-pointer " />
          <Linkedin size={20} className="cursor-pointer " />
        </div>
      </div>
    </div>
  );
};

export default Footer;
