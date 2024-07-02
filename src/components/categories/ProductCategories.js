import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { productsCategory } from "../../utils/productCategory";
import CategoryCard from "./CategoryCard";

const ProductCategories = ({ tag, title }) => {
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
    <div className="sale__slider w-full h-fit flex flex-col gap-4">
      <div className="tag flex justify-start items-center gap-3">
        <div className="h-8 w-4 bg-secondary-300 rounded"></div>
        <span className=" font-semibold color text-secondary-300">{tag}</span>
      </div>
      <div className="title flex justify-between text-3xl font-semibold">
        <div className="flex gap-16 items-end ">
          <span className="">{title}</span>
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
      <div
        ref={sliderRef}
        className="slider flex gap-4 overflow-scroll pt-4 pb-4"
      >
        {productsCategory.map((item) => {
          return <CategoryCard key={item.id} category={item} />;
        })}
      </div>
      <div className="flex-grow border-t border-primary-200 opacity-30 mt-16 mb-16"></div>
    </div>
  );
};

export default ProductCategories;
