import axios from "axios";
import React, { useEffect, useState } from "react";
import SaleSlider from "../sale/SaleSlider";

const BESTSELLINGPRODUCTS =
  "https://dummyjson.com/products?sortBy=rating&order=desc&limit=15";

const MemoizedSaleSlider = React.memo(SaleSlider);

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    bestSellingProducts();
  }, []);

  const bestSellingProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(BESTSELLINGPRODUCTS);
      setBestSelling(response?.data?.products);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className=" w-full h-fit">
      <MemoizedSaleSlider
        products={bestSelling}
        tag="This Month"
        title="Best Selling Products"
        showDiscount={false}
        loading={loading}
      />
      <div className="flex-grow border-t border-primary-200 opacity-30 mt-16 mb-16"></div>
    </div>
  );
};

export default BestSelling;
