import { useState } from "react";
import BookStoreContext from "./bookStorContext";

const BookStoreProvider = ({ children }) => {
  const [cartInfo, setCartInfo] = useState([]);

  // Handle Add To Cart
  const addToCart = (item, qty) => {
    const newCartItem = {
      id: item.id,
      title: item.title,
      image: item.image,
      price: item.price,
      quantity: qty,
      author: item.author,
    };

    const isExist = cartInfo.find((cart) => cart.id === newCartItem.id);

    if (isExist) {
      setCartInfo(
        cartInfo.map((cart) =>
          cart.id === newCartItem.id ? newCartItem : cart
        )
      );
    } else {
      setCartInfo((prev) => [...prev, newCartItem]);
    }
  };

  // Handle Remove From Cart
  const removeFromCart = (id) => {
    const cart = cartInfo.filter((c) => c.id !== id);
    setCartInfo(cart);
  };

  return (
    <BookStoreContext.Provider
      value={{
        cartInfo,
        addToCart,
        removeFromCart,
        cartInfoLength: cartInfo.length,
      }}
    >
      {children}
    </BookStoreContext.Provider>
  );
};

export default BookStoreProvider;
