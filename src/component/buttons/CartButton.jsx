import React from "react";
import CartImage from "../../assets/icons/add-to-cart.svg";
import Decrement from "../../assets/icons/decrement.svg";
import Increment from "../../assets/icons/increment.svg";

const CartButton = ({
  product,
  cartItem,
  addToCart,
  decrementQty,
  incrementQty,
}) => {
  return (
    <div>
      {cartItem ? (
        //Quantity Button
        <button className="cursor-pointer flex flex-row gap-2 absolute bottom-18 left-8 rounded-[20px] bg-[#be4324] text-white px-5 py-2 space-x-5">
          <img
            src={Decrement}
            onClick={() => decrementQty(product.id)}
            className="cursor-pointer border border-[#ad8985] rounded-[100%] p-1.5"
          />
          <span>{cartItem.qty}</span>
          <img
            src={Increment}
            onClick={() => incrementQty(product.id)}
            className="cursor-pointer border border-[#ad8985] rounded-[100%] p-1.5"
          />
        </button>
      ) : (
        // ADD TO CART BUTTON
        <button
          onClick={() => addToCart(product)}
          className="cursor-pointer flex flex-row gap-2 absolute bottom-18 left-8 rounded-[20px] bg-[#ffffff] px-5 py-2 border border-red-400"
        >
          <img src={CartImage} alt="" />
          <h6 className="font-medium text-[14px]">Add to Cart</h6>
        </button>
      )}
    </div>
  );
};

export default CartButton;
