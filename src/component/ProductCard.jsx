import React from "react";
import CartButton from "../component/buttons/CartButton";

const ProductCard = ({
  product,
  cartItem,
  addToCart,
  incrementQty,
  decrementQty,
}) => {
  return (
    <div className={`relative h-72 rounded-lg mb-6 `}>
      <div>
        <img
          src={product.img}
          alt={product.title}
          className={`w-full h-[80%] object-cover rounded-[20px] ${
            cartItem ? "outline-2 outline-[#be4324]" : ""
          }`}
        />
      </div>

      <CartButton
        product={product}
        cartItem={cartItem}
        addToCart={addToCart}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
      />

      <div className="pt-6">
        <p className="text-sm text-[16px] lg:text-[14px] text-gray-500">
          {product.category}
        </p>
        <h1 className="text-lg font-semibold w-[250px]">{product.title}</h1>
        <p className="text-red-500 font-medium">${product.price.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default ProductCard;
