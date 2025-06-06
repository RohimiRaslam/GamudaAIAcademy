import axios from "axios";
import { defineStore } from "pinia";

export const useExchangeRatesStore = defineStore("exchangeRates", {
  state: () => ({
    data: null,
    loading: false,
    error: null,
  }),

  getters: {},
  actions: {
    async fetchRates() {
      this.loading = true;
      this.error = null;

      const response = await axios.get(
        "https://api.frankfurter.dev/v1/1999-01-04"
      );
      this.data = response.data;
      console.log(response.data);
    },
  },
});
