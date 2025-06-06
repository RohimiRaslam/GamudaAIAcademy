<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-card>
          <v-card-title>exchange rates</v-card-title>
          <v-card-text>
            <v-btn color="primary" :loading="loading" @click="fetchRates"
              >get exchange rates</v-btn
            >
            <div v-if="data" class="mt-4">
              <h3>{{ data.date }}</h3>
              <p><strong>Base:</strong>{{ data.base }}</p>
              <v-list density="compact">
                <v-list-item
                  v-for="(rate, currency) in data.rates"
                  :keys="currency"
                >
                  <v-list-item-title
                    >{{ currency }} : {{ rate }}</v-list-item-title
                  >
                </v-list-item>
              </v-list>
            </div>

            <v-alert v-if="error" class="mt-4" type="error">{{
              error
            }}</v-alert>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<!-- fetch -->
<!-- <script setup>
import { ref } from "vue";

const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchRates = async () => {
  loading.value = true;
  error.value = null;

  const response = await fetch("https://api.frankfurter.dev/v1/1999-01-04");
  const responseData = await response.json();

  data.value = responseData;
  console.log(responseData);
};
</script> -->

<!-- axios -->
<!-- <script setup>
import axios from "axios";
import { ref } from "vue";

const data = ref(null);
const loading = ref(false);
const error = ref(null);

const fetchRates = async () => {
  loading.value = true;
  error.value = null;

  try {
    const response = await axios.get(
      "https://api.frankfurter.dev./v1/1999-01-04"
    );
    data.value = response.data;
    console.log(response.data);
  } catch (error_) {
    error.value = "failed to fetch";
    console.error("error:", error_);
  } finally {
    loading.value = false;
  }
};
</script> -->

<!-- axios pinia -->
<!-- <script setup>
import { storeToRefs } from "pinia";
import { useExchangeRatesStore } from "../stores/exchangeRates.js";

const exchangeStore = useExchangeRatesStore();

const { data, loading, error } = storeToRefs(exchangeStore);
const { fetchRates } = exchangeStore;
</script> -->
