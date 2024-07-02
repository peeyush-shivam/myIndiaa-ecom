import { useRef } from "react";
import ProductCard from "../product/ProductCard";
import SaleCounter from "./SaleCounter";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SaleSlider = ({ products = [] }) => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <div className="sale__slider w-full h-fit pt-16 flex flex-col gap-2">
      <div className="tag flex justify-start items-center gap-3">
        <div className="h-8 w-4 bg-secondary-300 rounded"></div>
        <span className=" font-semibold color text-secondary-300">Today's</span>
      </div>
      <div className="title flex justify-between text-3xl font-semibold">
        <div className="flex gap-16 items-end ">
          <span className="">Flash Sales</span>
          <SaleCounter />
        </div>

        <div className="arrow flex justify-center items-end gap-2">
          <button
            className=" bg-secondary-100 rounded-full p-0.5"
            onClick={scrollLeft}
          >
            <ArrowLeft />
          </button>
          <button
            className=" bg-secondary-100 rounded-full p-0.5"
            onClick={scrollRight}
          >
            <ArrowRight />
          </button>
        </div>
      </div>
      <div ref={sliderRef} className="slider flex overflow-scroll gap-2">
        {products.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
      <div className="view__all--button">
        <button>View All</button>
      </div>
    </div>
  );
};

export default SaleSlider;
