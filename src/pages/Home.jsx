import React, { useState } from "react";
import Baklava from "../assets/images/baklava.jpg";
import Brownie from "../assets/images/brownie.jpg";
import Cake from "../assets/images/cake.jpg";
import CremeBrulee from "../assets/images/creme-brulee.jpg";
import Macaron from "../assets/images/macaron.jpg";
import PannaCotta from "../assets/images/panna-cotta.jpg";
import Pie from "../assets/images/meringue.jpg";
import Tiramisu from "../assets/images/tiramisu.jpg";
import Waffle from "../assets/images/waffle.jpg";
import ProductGrid from "../component/ProductGrid";
import CartPanel from "../pages/CartPanel";
import ConfirmOrder from "../pages/ConfirmOrder";
import Modal from "../pages/Modal";

const allProducts = [
  {
    id: 1,
    img: Waffle,
    title: "Waffle with Berries",
    price: 6.5,
    category: "Waffle",
  },
  {
    id: 2,
    img: CremeBrulee,
    title: "Vanilla Bean Crème Brûlée",
    price: 7.0,
    category: "Crème Brûlée",
  },
  {
    id: 3,
    img: Macaron,
    title: "Macaron Mix of Five",
    price: 8.0,
    category: "Macaron",
  },
  {
    id: 4,
    img: Tiramisu,
    title: "Classic Tiramisu",
    price: 5.5,
    category: "Tiramisu",
  },
  {
    id: 5,
    img: Baklava,
    title: "Pistachio Baklava",
    price: 4.0,
    category: "Baklava",
  },
  {
    id: 6,
    img: Pie,
    title: "Lemon Meringue Pie",
    price: 5.0,
    category: "Pie",
  },
  {
    id: 7,
    img: Cake,
    title: "Red Velvet Cake",
    price: 4.5,
    category: "Cake",
  },
  {
    id: 8,
    img: Brownie,
    title: "Salted Caramel Brownie",
    price: 5.5,
    category: "Brownie",
  },
  {
    id: 9,
    img: PannaCotta,
    title: "Vanilla Panna Cotta",
    price: 6.5,
    category: "Panna Cotta",
  },
];

const Home = () => {
  // Cart
  const [cart, setCart] = useState([]);

  // Add to Cart
  const addToCart = (product) => {
    setCart((prev) => [...prev, { ...product, qty: 1 }]);
  };

  // Increase product Qty
  const incrementQty = (id) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item,
      ),
    );
  };

  // Decrease product Qty
  const decrementQty = (id) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: item.qty - 1 } : item))
        .filter((item) => item.qty > 0),
    );
  };

  // Remove item from cart
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Handler for the Modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // Start New Order
  const startNewOrder = () => {
    setCart([]); // This clears the cart
    setIsModalOpen(false); // This closes the modal
  };

  return (
    <div className="relative w-full lg:p-20 p-8 bg-[rgb(244,237,235)] min-h-full grid grid-cols-1 lg:grid-cols-[30fr_1fr] gap-[5rem]">
      <ProductGrid
        allProducts={allProducts}
        cart={cart}
        addToCart={addToCart}
        incrementQty={incrementQty}
        decrementQty={decrementQty}
      />
      <CartPanel
        cart={cart}
        removeFromCart={removeFromCart}
        openModal={openModal}
      />

      {isModalOpen && (
        <Modal
          cart={cart}
          closeModal={closeModal}
          startNewOrder={startNewOrder}
        >
          <ConfirmOrder cart={cart} />
        </Modal>
      )}
    </div>
  );
};

export default Home;
