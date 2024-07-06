import { saleSlogon } from "../utils/saleBanner";

const SaleBanner = () => {
  return (
    <div className="w-full h-8 bg-[black] text-text-100 flex justify-center items-center  p-3">
      <span className=" max-sm:text-xs text-sm ">{saleSlogon.slogan1}</span>
      <span className="pl-2 text-sm max-sm:text-xs underline cursor-pointer font-bold">
        Shop now
      </span>
    </div>
  );
};

export default SaleBanner;
