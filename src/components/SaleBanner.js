import { saleSlogon } from "../utils/saleBanner";

const SaleBanner = () => {
  return (
    <div className="w-full h-8 bg-[black] text-text-100 flex justify-center items-center text-sm p-3">
      {saleSlogon.slogan1}
      <span className="pl-2 underline cursor-pointer font-bold">Shop now</span>
    </div>
  );
};

export default SaleBanner;
