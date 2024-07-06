import React from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/product/ProductCard";
import {
  moveAllToCart,
  removeFromWishlist,
} from "../redux/products/productSlice";
import NotFound from "../components/NotFound";
import { CircleX } from "lucide-react";

const Wishlist = () => {
  const { wishlist } = useSelector((state) => state.productData);
  const dispatch = useDispatch();
  const handleMoveToCart = () => {
    dispatch(moveAllToCart());
  };
  const handleRemoveFromWislist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="min-h-screen h-fit flex flex-col w-full items-center pt-4">
      {/* <div className="flex flex-col h-screen w-full pt-4"> */}
      <div className="w-full flex justify-between items-center pb-12 pt-12">
        <div className="tag flex justify-start items-center gap-3">
          <div className="h-8 w-4 bg-secondary-300 rounded"></div>
          <span className=" font-semibold color text-secondary-300">
            Wishlist
          </span>
        </div>
        {wishlist.length > 0 && (
          <button
            className=" bg-secondary-300 text-sm rounded-sm text-text-100 p-2 hover:bg-hoverButton-100"
            onClick={() => handleMoveToCart()}
          >
            Move All To Cart
          </button>
        )}
      </div>

      {wishlist.length > 0 ? (
        <div className="wislist flex justify-start max-md:justify-center items-center flex-wrap w-full gap-4">
          {wishlist.map((item, index) => {
            return (
              <div className="relative" key={index}>
                <ProductCard key={item.id} product={item} />
                <CircleX
                  size={20}
                  className=" cart__delete text-secondary-300 absolute top-2.5 left-3 cursor-pointer"
                  onClick={() => handleRemoveFromWislist(item?.id)}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <NotFound
          title="Your wishlist is empty."
          message="Add items that you like to your wishlist. Review them anytime and easily move them to the bag."
          action="Back to Homepage"
        />
      )}

      {/* </div> */}
    </div>
  );
};

export default Wishlist;
