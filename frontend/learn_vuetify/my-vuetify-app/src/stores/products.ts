import { defineStore } from "pinia";

// export const useProductStore = defineStore("product", {
//   state: () => ({
//     products: [],
//     loading: false,
//     error: string | null,
//   }),
//   getter: {
//     availableProducts: (state: any) =>
//       state.products.filter((product: any) => product.stock > 0),
//   },
//   actions: {
//     async fetchProducts() {
//       this.loading = true;
//       try {
//         const response = await fetch("/api/products");
//         this.products = await response.json();
//       } catch (err) {
//         this.error = "failed to load products";
//       } finally {
//         this.loading = false;
//       }
//     },
//   },
// });

export const useProductStore = defineStore("product", {
  state: (): {
    products: any[];
    loading: boolean;
    error: string | null;
  } => ({
    products: [],
    loading: false,
    error: null,
  }),
  getters: {
    availableProducts: (state) =>
      state.products.filter((product: any) => product.stock > 0),
  },
  actions: {
    async fetchProducts() {
      this.loading = true;
      try {
        const response = await fetch("/api/products");
        this.products = await response.json();
      } catch (err) {
        this.error = "failed to load products";
      } finally {
        this.loading = false;
      }
    },
  },
});
