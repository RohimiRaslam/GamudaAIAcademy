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

import { defineStore } from "pinia";

export const todoArray = defineStore("todo", {
  state: () => ({ count: 0 }),
  getters: { doubleCount: (state) => state.count * 2 },
  actions: {
    increment() {
      this.count++;
    },
  },
});
