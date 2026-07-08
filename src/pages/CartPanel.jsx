import React from "react";
import EmptyOrder from "../assets/icons/empty-cart.svg";
import RemoveItem from "../assets/icons/remove-item.svg";
import CarbonNeutral from "../assets/icons/carbon-neutral.svg";
import ProductButton from "../component/buttons/ProductButton";

const CartPanel = ({ cart, removeFromCart, openModal }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="h-fit bg-white p-6 lg:w-[26rem] w-full rounded-[20px] static lg:absolute lg:right-[80px] lg:top-[100px]">
      <h1 className="text-xl font-semibold text-red-500 mb-4">
        Your Cart ({cart.length})
      </h1>
      {/* To show empty message */}
      {cart.length === 0 ? (
        <div className="flex flex-col items-center">
          <img src={EmptyOrder} />
          <p className="text-gray-500 text-sm">
            Your added items will appear here.
          </p>
        </div>
      ) : (
        // show items
        <>
          {cart.map((item) => (
            <div key={item.id}>
              <div className="flex justify-between items-center">
                <div className="mb-2">
                  <p className="font-semibold ">{item.title}</p>
                  <p className="text-md text-gray-500 w-[250px]">
                    <span className="text-red-800 text-lg font-medium">
                      {item.qty}x
                    </span>
                    <span className="ml-[15px] lg:ml-[10px]">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className=" font-bold lg:ml-[60px] ml-[20px]">
                      ${(item.price * item.qty).toFixed(2)}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="border border-[#ad8985] rounded-[50%] lg:p-1 p-[3px] mt-[-10px] lg:ml-[50px] ml-[10px] cursor-pointer hover:bg-red-600"
                >
                  <img
                    src={RemoveItem}
                    alt=""
                    className="lg:w-[12px] w-[20px] lg:h-[15px] h-[20px] hover:bg-red-600 "
                  />
                </button>
              </div>
              {/* Add <hr> after each item */}
              <hr className="my-2 border-gray-300" />
            </div>
          ))}
          {/* Footer */}
          <div className="flex justify-between font-semibold text-lg mt-[30px]">
            <span>Order Total</span>
            <span className="font-bold text-[25px]">${total.toFixed(2)}</span>
          </div>
          <div className="bg-rose-50 flex items-center justify-center space-x-2.5 w-[18rem] h-[2.5rem] py-2 px-2 lg:ml-[35px] ml-[-5px] mt-5 rounded-[5px]">
            <img src={CarbonNeutral} />
            <p className=" text-sm text-[#504d4d] text-center">
              This is a <span className="font-bold"> carbon-neutral </span>
              delivery
            </p>
          </div>

          <ProductButton text="Confirm Order" onClick={openModal} />
        </>
      )}
    </div>
  );
};

export default CartPanel;
