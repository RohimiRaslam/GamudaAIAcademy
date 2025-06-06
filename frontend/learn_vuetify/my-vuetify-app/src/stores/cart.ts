import { defineStore } from "pinia";
import { useProductStore } from "./products";

export const useCartStore = defineStore("cart", {
  state: () => ({
    items: [],
  }),
  getters: {
    cartTotal: (state) => {
      const productStore = useProductStore();
      return state.items.reduce((total, item) => {
        const product = productStore.products.find(
          (p: any) => p.id === item.productId
        );
        return total + (product?.price || 0) * item.quantity;
      }, 0);
    },
  },
  actions: {
    addToCart(productId: any) {
      const productStore = useProductStore();
      const product = productStore.products.find(
        (p: any) => p.id === productId
      );

      if (!product || product === 0) {
        throw new Error("Product is not available");
      }

      const existingItem = this.items.find(
        (item) => item.productId === productId
      );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        this, this.items.push({ productId, quantity: 1 });
      }
    },
  },
});
