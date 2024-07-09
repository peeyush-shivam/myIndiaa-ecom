import React, { useState } from "react";
import { DataTable } from "primereact/datatable";
import { useDispatch, useSelector } from "react-redux";
import { Column } from "primereact/column";
import { CircleX } from "lucide-react";
import { removeFromCart } from "../redux/products/productSlice";
import NotFound from "../components/NotFound";
import { Link } from "react-router-dom";

const Cart = () => {
  const [quantity, setQuantity] = useState({});
  const { cart } = useSelector((state) => state.productData);
  const dispatch = useDispatch();

  const headerTemplate = (header) => {
    return <div className="text-base pb-4 text-primary-200">{header}</div>;
  };

  const imageBodyTemplate = (cart) => {
    return (
      <div className="flex items-center h-28 gap-2 relative pt-2 pb-2">
        <img
          src={cart?.images[0]}
          alt={cart?.title}
          className="cart__product w-20 h-24 shadow-2 border-round object-contain  "
        />
        <span className="text-sm">{cart?.title}</span>
        <CircleX
          size={15}
          className=" cart__delete text-secondary-300 absolute top-1 left-0 cursor-pointer"
          onClick={() => handleRemoveFromCart(cart?.id)}
        />
      </div>
    );
  };

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const priceBodyTemplate = (cart) => {
    return `$${cart.price}`;
  };

  const handleQuantity = (event) => {
    let temp = { ...quantity, [event.target.id]: event.target.value };
    if (event.target.value > 0) {
      setQuantity(temp);
    } else {
      return;
    }
  };

  const quantityBodyTemplate = (cart) => {
    return (
      <input
        type="number"
        id={cart?.id}
        value={quantity[cart?.id] ?? 1}
        onChange={(event) => handleQuantity(event)}
        className=" w-16 p-2 border-primary-200 rounded border focus:outline-none"
      />
    );
  };

  const subTotalBodyTemplate = (cart) => {
    return quantity[cart?.id]
      ? `$${(cart?.price * quantity[cart?.id]).toFixed(2)}`
      : `$${cart?.price}`;
  };

  const computeTotals = () => {
    // calculates all the totals of the cart
    let subtotal = cart.reduce(
      (acc, item) => acc + item.price * (quantity[item.id] || 1),
      0
    );
    let taxes = subtotal * 0.15;
    let total = subtotal + taxes;
    return { subtotal, taxes, total };
  };

  const { subtotal, taxes, total } = computeTotals();

  const footer = () => (
    <div className="text-sm">
      {`You have ${cart ? cart.length : 0} items in cart.`}
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen h-fit pt-4 ">
      <div className="tag flex justify-start items-center gap-3 pt-12 pb-12">
        <div className="h-8 w-4 bg-secondary-300 rounded"></div>
        <span className=" font-semibold color text-secondary-300">Cart</span>
      </div>
      {cart.length > 0 ? (
        <div className="flex flex-col gap-16">
          <DataTable
            value={cart}
            footer={footer}
            tableStyle={{ minWidth: "60rem" }}
          >
            <Column
              header={() => headerTemplate("Product")}
              body={imageBodyTemplate}
            ></Column>
            <Column
              align={"right"}
              field="price"
              header={() => headerTemplate("Price")}
              body={priceBodyTemplate}
            ></Column>
            <Column
              align={"right"}
              field="quantity"
              header={() => headerTemplate("Quantity")}
              body={quantityBodyTemplate}
            ></Column>
            <Column
              align={"right"}
              header={() => headerTemplate("Subtotal")}
              body={subTotalBodyTemplate}
            ></Column>
          </DataTable>

          {/*** Cart UI ***/}

          <div className="cart__total flex justify-between items-start gap-2 max-md:flex-col">
            <div className="cart__coupon flex w-1/2 gap-2 max-md:w-full">
              <input
                type="text"
                className="text-text-200 border-text-200 rounded-sm border focus:outline-none placeholder:text-sm p-2"
                placeholder="WELCOME"
              />
              <button className=" bg-secondary-300 text-sm rounded-sm text-text-100 p-2 hover:bg-hoverButton-100">
                Apply Coupon
              </button>
            </div>
            <div className="cart__price w-1/2 border-text-200 rounded-sm border p-3 gap-2 max-md:w-full">
              <div className="text-base font-semibold pb-2 text-primary-200">
                <span>Cart Total</span>
              </div>
              <div className="text-sm flex justify-between">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex-grow border-t border-primary-200 opacity-30 mt-2 mb-2"></div>

              <div className="text-sm  flex justify-between">
                <span>Taxes (15%):</span>
                <span>${taxes.toFixed(2)}</span>
              </div>
              <div className="flex-grow border-t border-primary-200 opacity-30 mt-2 mb-2"></div>

              <div className="text-sm  flex justify-between">
                <span>Shipping:</span>
                <span>Free</span>{" "}
              </div>
              <div className="flex-grow border-t border-primary-200 opacity-30 mt-2 mb-2"></div>

              <div className="text-sm  flex justify-between">
                <span>Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="proceed flex justify-center items-center pt-8">
                <button className=" bg-secondary-300 text-sm rounded-sm text-text-100 p-2 hover:bg-hoverButton-100">
                  <Link to={"/checkout"}>Proceed to Checkout</Link>
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <NotFound
          title="Cart Empty."
          message="Let's start adding some items to your cart."
          action="Back to Homepage"
        />
      )}
    </div>
  );
};

export default Cart;
