import axios from "axios";
import { useEffect, useState } from "react";
import SaleSlider from "../sale/SaleSlider";

const BESTSELLINGPRODUCTS =
  "https://dummyjson.com/products?sortBy=rating&order=desc&limit=15";

const BestSelling = () => {
  const [bestSelling, setBestSelling] = useState([]);

  useEffect(() => {
    bestSellingProducts();
  }, []);
  console.log(bestSelling);

  const bestSellingProducts = async () => {
    try {
      const response = await axios.get(BESTSELLINGPRODUCTS);
      setBestSelling(response?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-fit">
      <SaleSlider
        products={bestSelling}
        tag="This Month"
        title="Best Selling Products"
        showDiscount={false}
      />
      <div className="flex-grow border-t border-primary-200 opacity-30 mt-16 mb-16"></div>
    </div>
  );
};

export default BestSelling;
