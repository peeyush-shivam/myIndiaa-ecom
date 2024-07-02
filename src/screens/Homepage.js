import axios from "axios";
import { useEffect, useState } from "react";
import ProductCard from "../components/product/ProductCard";
import ProductCarousel from "../components/product/ProductCarousel";
import { imageData } from "../utils/productsURL";
import SaleSlider from "../components/sale/SaleSlider";
import SaleCounter from "../components/sale/SaleCounter";
import FlashSale from "../components/product/FlashSale";
import BestSelling from "../components/product/BestSelling";
import CategoryCard from "../components/categories/CategoryCard";
import ProductCategories from "../components/categories/ProductCategories";
import NewArrival from "../components/product/NewArrival";

const ALLPRODUCTS = "https://dummyjson.com/products";

const Homepage = () => {
  const [products, setProducts] = useState([]);
  let data = imageData();

  console.log(products);

  useEffect(() => {
    apiCall();
  }, []);

  const apiCall = async () => {
    const { data } = await axios.get(ALLPRODUCTS);
    setProducts(data?.products);
  };

  return (
    <div className="flex flex-col justify-start pt-4">
      <div className="sale__carousel w-full h-fit mb-16 box-border overflow-auto max-w-full">
        <ProductCarousel images={data} delay={5000} autoplay={true} />
      </div>
      <div className="flash__sale flex flex-wrap justify-around gap-4">
        <FlashSale />
        <ProductCategories tag="Categories" title="Browse By Category" />
        <BestSelling />
        <NewArrival />
      </div>
    </div>
  );
};

export default Homepage;
