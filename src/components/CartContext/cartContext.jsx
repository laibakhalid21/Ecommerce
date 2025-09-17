import { create } from "zustand";

export const useCartStore = create((set) => ({
cart: JSON.parse(localStorage.getItem("cart")) || [],
  

   addToCart: (product) =>
    set((state) => {
      const existingItem = state.cart.find((item) => item.id === product.id);
      let updatedCart;

      if (existingItem) {
        updatedCart = state.cart.map((item) =>
          item.id === product.id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      } else {
        updatedCart = [...state.cart, { ...product, qty: 1 }];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return { cart: updatedCart };
    }),


    
 removeFromCart: (id) =>
  set((state) => {
    const updatedCart = state.cart.filter((item) => item.id !== id);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),

 updateQty: (id, qty) =>
  set((state) => {
    const updatedCart = state.cart.map((item) =>
      item.id === id ? { ...item, qty: qty < 1 ? 1 : qty } : item
    );
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return { cart: updatedCart };
  }),

 clearCart: () => {
  localStorage.removeItem("cart");
  set({ cart: [] });
},
}));
