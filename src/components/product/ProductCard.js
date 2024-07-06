import { Rating } from "@mui/material";
import ProductCarousel from "./ProductCarousel";
import React from "react";

const MemoizedProductCarousel = React.memo(ProductCarousel);

const ProductCard = ({ product, showDiscount }) => {
  return (
    <div className="product__card h-fit w-fit relative">
      <div className="product__card--image h-60 w-60 bg-secondary-100 rounded-md overflow-hidden">
        <MemoizedProductCarousel
          images={product?.images}
          controls={product?.images.length > 1}
          autoplay={false}
          fit="cover"
          product={product}
          discount={product?.discountPercentage}
          showDiscount={showDiscount}
        />
      </div>
      <div className="product__card--details h-20 w-60 text-sm pt-2">
        <div className="product__card--details-title ">{product?.title}</div>
        <div className="product__card--details-price">${product?.price}</div>
        <div className="product__card--details-rating flex items-center">
          <Rating
            name="read-only"
            value={product?.rating}
            readOnly
            size="small"
          />
          ({product?.stock})
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
