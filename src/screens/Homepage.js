import React, { useMemo } from "react";
import ProductCarousel from "../components/product/ProductCarousel";
import { imageData } from "../utils/productsURL";
import FlashSale from "../components/product/FlashSale";
import BestSelling from "../components/product/BestSelling";
import ProductCategories from "../components/categories/ProductCategories";
import NewArrival from "../components/product/NewArrival";

const MemoizedProductCarousel = React.memo(ProductCarousel);
const MemoizedFlashSale = React.memo(FlashSale);
const MemoizedProductCategories = React.memo(ProductCategories);
const MemoizedBestSelling = React.memo(BestSelling);
const MemoizedNewArrival = React.memo(NewArrival);

const Homepage = () => {
  const data = useMemo(() => imageData(), []);

  return (
    <div className="flex flex-col justify-start pt-4">
      <div className="sale__carousel w-full h-fit mb-16 box-border overflow-auto max-w-full">
        <MemoizedProductCarousel
          images={data}
          delay={5000}
          autoplay={true}
          fit="contain"
        />
      </div>
      <div className="flash__sale flex flex-wrap justify-around gap-4">
        <MemoizedFlashSale />
        <MemoizedProductCategories
          tag="Categories"
          title="Browse By Category"
        />
        <MemoizedBestSelling />
        <MemoizedNewArrival />
      </div>
    </div>
  );
};

export default Homepage;
