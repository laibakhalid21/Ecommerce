import React from "react";
import { create } from "zustand";

export const useWishlistStore = create((set) => ({
    wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],

    addWishlist: (product) => set((state) => {
        const updatedWishlist = [...state.wishlist, { ...product, qty: 1 }];
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return { wishlist: updatedWishlist }
    }),

    removeFromWishlist: (id) =>
        set((state) => {
            const updated = state.wishlist.filter((i) => i.id !== id);
            localStorage.setItem("wishlist", JSON.stringify(updated));
            return { wishlist: updated };
        }),

    clearWishlist: () => {
        localStorage.removeItem("wishlist");
        set({ wishlist: [] });
    },

}))