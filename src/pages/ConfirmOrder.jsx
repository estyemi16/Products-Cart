import React from "react";

const ConfirmOrder = ({ cart }) => {
  return (
    <>
      {cart.map((item) => (
        <div key={item.id} className="">
          <div key={item.id} className="flex justify-between items-center pt-2">
            <div className="flex items-center space-x-3">
              {/* item-image */}
              <img
                src={item.img}
                alt={item.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              <div className="text-left">
                <p className="font-semibold text-gray-800">{item.title}</p>
                <p className="text-md text-gray-500">
                  <span className="text-red-800 text-lg font-medium">
                    {item.qty}x
                  </span>
                  <span className="ml-[20px]">@ ${item.price.toFixed(2)}</span>
                </p>
              </div>
            </div>
            <p className="font-semibold text-gray-900 mt-4">
              ${(item.price * item.qty).toFixed(2)}
            </p>
          </div>
          {/* Add <hr> after each item */}
          <hr className="my-2 border-gray-300" />
        </div>
      ))}
    </>
  );
};

export default ConfirmOrder;
