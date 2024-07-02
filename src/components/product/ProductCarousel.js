import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";

const ProductCarousel = ({
  images,
  delay,
  controls = false,
  autoplay = false,
  fit = "cover",
  discount = null,
  showDiscount = false,
}) => {
  const [currImg, setCurrImg] = useState(0);
  useEffect(() => {
    let interval;
    interval =
      autoplay &&
      setInterval(() => {
        setCurrImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, delay);

    return () => {
      clearInterval(interval);
    };
  }, [currImg]);
  return (
    <div className="product__carousel w-full h-fit flex items-center justify-center overflow-hidden shadow-lg relative">
      {controls && (
        <ChevronLeft
          height={"20px"}
          onClick={() => {
            setCurrImg((prev) => (prev === 0 ? images.length - 1 : prev - 1));
          }}
          className="absolute text-text-200 left-4 cursor-pointer"
        />
      )}
      {images.map((img, index) => (
        <img
          src={img}
          key={index}
          className={
            currImg === index
              ? " w-full h-full object-contain"
              : "w-full h-full hidden"
          }
          alt="product__image"
          // style={{ objectFit: fit }}
        />
      ))}
      {controls && (
        <ChevronRight
          height={"20px"}
          onClick={() => {
            setCurrImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
          }}
          className="absolute text-text-200 right-4 cursor-pointer"
        />
      )}
      {!autoplay && (
        <>
          <div className="product__card--addtocart absolute bottom-0 w-full h-6 flex justify-center items-center text-primary-100 text-sm bg-text-300 cursor-pointer">
            Add to Cart
          </div>
          <div className="product__card--interactions absolute top-2 w-full h-6 flex justify-between items-center text-prim text-sm pl-2 pr-2">
            {showDiscount ? (
              <div className=" bg-secondary-300 text-xs p-0.5 text-primary-100 rounded w-fit h-fit">
                -{discount.toFixed(1)}%
              </div>
            ) : (
              <div></div>
            )}
            <div className=" flex justify-center items-center bg-primary-100 rounded-full p-0.5 h-6 w-6 cursor-pointer">
              <Heart size={15} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
