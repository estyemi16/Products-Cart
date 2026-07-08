import React from "react";

const ProductButton = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-[#be4324] hover:bg-[#ff6128] text-white w-full h-[3rem] py-2 mt-6 rounded-[25px] font-semibold cursor-pointer"
    >
      <span>{text}</span>
    </button>
  );
};

export default ProductButton;
