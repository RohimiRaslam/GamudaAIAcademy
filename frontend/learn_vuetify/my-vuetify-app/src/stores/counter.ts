// import { defineStore } from "pinia";

// export const useCounterStore = defineStore("counter", {
//   state: () => ({ count: 0 }),
//   getters: {
//     doubleCount: (state) => state.count * 2,
//   },
//   actions: {
//     increment() {
//       this.count++;
//     },
//   },
// });

// import { defineStore } from "pinia";
// export const useUserStore = defineStore("user", {
//   state: () => ({
//     name: "John",
//     age: 25,
//   }),
//   actions: {
//     haveBirthday() {
//       this.age++;
//     },
//   },
// });

import { defineStore } from "pinia";

export const useProductStore = defineStore("products", {
  state: () => ({
    products: [
      { id: 1, name: "shirt", price: 100 },
      { id: 2, name: "pants", price: 200 },
    ],
  }),
  getters: {
    discountedProducts: (state: any) =>
      state.products.map((p: any) => ({
        ...p,
        price: p.price * 0.9,
      })),
  },
});
