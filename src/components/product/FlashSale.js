import axios from "axios";
import React, { useEffect, useState } from "react";
import SaleSlider from "../sale/SaleSlider";

const MemoizedSaleSlider = React.memo(SaleSlider);

const FLASHPRODUCTs =
  "https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=15";

const FlashSale = () => {
  const [flashSale, setFlashSale] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    flashSaleProducts();
  }, []);

  const flashSaleProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(FLASHPRODUCTs);
      setFlashSale(response?.data?.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" w-full h-fit">
      <MemoizedSaleSlider
        products={flashSale}
        tag="Today's Exclusive"
        title="Flash Sale"
        counter={true}
        showDiscount={true}
        loading={loading}
      />
      <div className="flex-grow border-t border-primary-200 opacity-30 mt-16 mb-16"></div>
    </div>
  );
};

export default FlashSale;
