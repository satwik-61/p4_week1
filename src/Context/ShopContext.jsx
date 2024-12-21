import React, { createContext, useState } from "react";
import all_product from "../Components/Assets/all_product";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < all_product.length + 1; index++) {
    cart[index] = 0;
}
return cart;
};

const ShopContextProvider = (props) => {
const [cartItems, setCartItems] = useState(getDefaultCart());
const [wishlistItems, setWishlistItems] = useState([]);

const addToCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
};

const removeFromCart = (itemId) => {
  setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
};

const addToWishlist = (item) => {
  if (!wishlistItems.some((wishlistItem) => wishlistItem.id === item.id)) {
    setWishlistItems((prev) => [...prev, item]);
  }
};

const removeFromWishlist = (itemId) => {
  setWishlistItems((prev) => prev.filter((item) => item.id !== itemId));
};

const getTotalCartAmount = () => {
  let totalAmount = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      let itemInfo = all_product.find((product) => product.id === Number(item));
      totalAmount += cartItems[item] * itemInfo.new_price;
    }
  }
  return totalAmount;
};

const getTotalCartItems = () => {
  let totalItem = 0;
  for (const item in cartItems) {
    if (cartItems[item] > 0) {
      totalItem += cartItems[item];
    }
  }
  return totalItem;
};

const contextValue = {
  getTotalCartItems,
  getTotalCartAmount,
  all_product,
  cartItems,
  addToCart,
  removeFromCart,
  wishlistItems,
  addToWishlist,
  removeFromWishlist,
};

return (
  <ShopContext.Provider value={contextValue}>
    {props.children}
  </ShopContext.Provider>
);
};

export default ShopContextProvider;