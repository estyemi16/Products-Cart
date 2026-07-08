import React from "react";
import RemoveItem from "../assets/icons/remove-item.svg";
import SuccessCheck from "../assets/icons/success-check.svg";
import ProductButton from "../component/buttons/ProductButton";

const Modal = ({ cart, closeModal, children, startNewOrder }) => {
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  return (
    // Backdrop
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm z-50 p-6">
      {/* Modal content */}
      <div className="relative bg-white rounded-2xl p-6 z-10 w-full lg:max-w-[35rem] max-w-[25rem]">
        <div className="lg:p-8 p-2 max-h-[90vh] overflow-y-auto rounded-2xl relative">
          <button
            onClick={closeModal}
            className="absolute top-3 right-[30px] border border-[#ad8985] rounded-[50%] lg:p-1 p-[3px] hover:bg-red-600"
          >
            <img
              src={RemoveItem}
              alt=""
              className="w-[12px] h-[15px] cursor-pointer hover:bg-red-600"
            />
          </button>
          <div className="text-center mb-6">
            <img
              src={SuccessCheck}
              alt="Success"
              className="w-10 h-10 mx-auto mb-3"
            />
            <h2 className="text-2xl font-bold text-gray-900 mb-1">
              Order Confirmed
            </h2>
            <p className="text-gray-500">We hope you enjoy your food!</p>
          </div>
          <div className="lg:w-full w-[17.4rem] bg-rose-50 rounded-lg lg:px-4 lg:py-4 px-2 py-10 mb-6">
            {children}
            <div className="flex justify-between w-full text-lg font-semibold pt-4 mt-2">
              <span>Order Total</span>
              <span className="font-bold text-xl text-gray-800">
                ${total.toFixed(2)}
              </span>
            </div>
          </div>
          <ProductButton text="Start New Order" onClick={startNewOrder} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
