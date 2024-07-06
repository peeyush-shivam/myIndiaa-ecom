import React, { useRef } from "react";
import ProductCard from "../product/ProductCard";
import SaleCounter from "./SaleCounter";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Loading from "../Loading";

const MemoizedProductCard = React.memo(ProductCard);

const SaleSlider = ({
  products = [],
  tag,
  title,
  counter = false,
  showDiscount = false,
  loading,
}) => {
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
    <div className="sale__slider w-full h-fit flex flex-col gap-6">
      <div className="tag flex justify-start items-center gap-3">
        <div className="h-8 w-4 bg-secondary-300 rounded"></div>
        <span className=" font-semibold color text-secondary-300">{tag}</span>
      </div>
      <div className="title flex justify-between text-3xl font-semibold">
        <div className="flex gap-16 items-end ">
          <span className="">{title}</span>
          <span className="max-md:hidden">{counter && <SaleCounter />}</span>
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

      {loading ? (
        <div ref={sliderRef} className="slider h-80 flex overflow-scroll gap-2">
          {Array(10)
            .fill(0)
            .map((item, index) => (
              <Loading key={index} />
            ))}
        </div>
      ) : (
        <div ref={sliderRef} className="slider h-80 flex overflow-scroll gap-2">
          {products.map((item) => {
            return (
              <MemoizedProductCard
                key={item.id}
                product={item}
                showDiscount={showDiscount}
              />
            );
          })}
        </div>
      )}
      <div className="view__all--button flex justify-center items-center">
        <button className=" bg-secondary-300 text-sm rounded-sm text-text-100 p-2 hover:bg-hoverButton-100">
          View All Products
        </button>
      </div>
    </div>
  );
};

export default SaleSlider;
