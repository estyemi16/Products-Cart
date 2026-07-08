import React from "react";
import ProductCard from "../component/ProductCard";

const ProductGrid = ({
  allProducts,
  cart,
  addToCart,
  incrementQty,
  decrementQty,
}) => {
  return (
    <div className="flex flex-col items-center lg:items-start">
      <h1 className="font-semibold text-3xl mb-8">Desserts</h1>

      <div className="w-[65%] grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {allProducts.map((product) => {
          const cartItem = cart.find((item) => item.id === product.id);

          return (
            <ProductCard
              key={product.id}
              product={product}
              cartItem={cartItem}
              addToCart={addToCart}
              incrementQty={incrementQty}
              decrementQty={decrementQty}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
