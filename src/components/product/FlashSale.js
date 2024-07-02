import axios from "axios";
import { useEffect, useState } from "react";
import SaleSlider from "../sale/SaleSlider";

const FLASHPRODUCTs =
  "https://dummyjson.com/products?sortBy=discountPercentage&order=desc&limit=15";

const FlashSale = () => {
  const [flashSale, setFlashSale] = useState([]);

  useEffect(() => {
    flashSaleProducts();
  }, []);

  const flashSaleProducts = async () => {
    try {
      const response = await axios.get(FLASHPRODUCTs);
      setFlashSale(response?.data?.products);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className=" w-full h-fit">
      <SaleSlider
        products={flashSale}
        tag="Today's"
        title="Flash Sale"
        counter={true}
        showDiscount={true}
      />
      <div className="flex-grow border-t border-primary-200 opacity-30 mt-16 mb-16"></div>
    </div>
  );
};

export default FlashSale;
