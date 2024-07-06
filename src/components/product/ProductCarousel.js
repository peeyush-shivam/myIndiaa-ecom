import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Heart } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  addToWishlist,
  removeFromWishlist,
} from "../../redux/products/productSlice";
import { useLocation } from "react-router-dom";

const ProductCarousel = ({
  images,
  delay,
  controls = false,
  autoplay = false,
  fit,
  product = [],
  discount = null,
  showDiscount = false,
}) => {
  const [currImg, setCurrImg] = useState(0);
  const dispatch = useDispatch();
  const location = useLocation();

  const { cart, wishlist } = useSelector((state) => state.productData);

  const fillColor = useCallback(
    (id) => {
      return wishlist.some((item) => item.id === id);
    },
    [wishlist]
  );

  useEffect(() => {
    let interval;
    if (autoplay) {
      interval = setInterval(() => {
        setCurrImg((prev) => (prev === images.length - 1 ? 0 : prev + 1));
      }, delay);
    }
    return () => {
      clearInterval(interval);
    };
  }, [autoplay, delay, images.length]);

  const handleAddToCart = useCallback(
    (item) => {
      if (wishlist.some((product) => product.id === item.id)) {
        dispatch(removeFromWishlist(item.id));
      }
      if (!cart.some((product) => product.id === item.id)) {
        dispatch(addToCart(item));
      }
    },
    [cart, dispatch, wishlist]
  );

  const handleAddToWishlist = useCallback(
    (item) => {
      if (!wishlist.some((product) => product.id === item.id)) {
        dispatch(addToWishlist(item));
      }
    },
    [dispatch, wishlist]
  );

  return (
    <div className="product__carousel w-full h-fit flex items-center justify-center overflow-hidden shadow-lg relative select-none">
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
          className={currImg === index ? "" : " hidden"}
          alt="product__image"
          style={{ objectFit: "contain", maxHeight: "15rem" }}
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
          <div
            className="product__card--addtocart absolute bottom-0 w-full h-6 flex justify-center items-center text-primary-100 text-sm bg-text-300 cursor-pointer select-none"
            onClick={() => handleAddToCart(product)}
          >
            Add to Cart
          </div>
          <div className="product__card--interactions absolute top-2 w-full h-6 flex justify-between items-center text-sm pl-2 pr-2">
            {showDiscount ? (
              <div className=" bg-secondary-300 text-xs p-0.5 text-primary-100 rounded w-fit h-fit">
                -{discount.toFixed(1)}%
              </div>
            ) : (
              <div></div>
            )}
            {location.pathname === "/wishlist" ? (
              ""
            ) : (
              <div className=" flex justify-center items-center bg-primary-100 rounded-full p-0.5 h-6 w-6 cursor-pointer">
                <Heart
                  size={15}
                  color={fillColor(product.id) ? "#DB4444" : "black"}
                  fill={fillColor(product.id) ? "#DB4444" : "white"}
                  onClick={() => handleAddToWishlist(product)}
                />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProductCarousel;
