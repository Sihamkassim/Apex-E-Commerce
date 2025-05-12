import { create } from "zustand";

const useCartStore = create((set, get) => ({
  cart: [],
  wishlist: [],
  
  addToCart: (product) => {
    if (!product) return;
    const existing = get().cart.find((item) => item._id === product._id);
    if (!existing) {
      set((state) => ({ cart: [...state.cart, product] }));
    }
  },

  removeFromCart: (productId) => {
    set((state) => ({
      cart: state.cart.filter((item) => item._id !== productId),
    }));
  },

  addToWishlist: (product) => {
    if (!product) return;
    const existing = get().wishlist.find((item) => item._id === product._id);
    if (!existing) {
      set((state) => ({ wishlist: [...state.wishlist, product] }));
    }
  },

  removeFromWishlist: (productId) => {
    set((state) => ({
      wishlist: state.wishlist.filter((item) => item._id !== productId),
    }));
  },
}));

export default useCartStore;
