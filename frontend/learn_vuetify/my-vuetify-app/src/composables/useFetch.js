import { ref, reactive } from "vue";

export function useApi() {
  const data = ref(null);
  const error = ref(null);
  const loading = ref(false);

  // For storing response details
  const response = reactive({
    status: null,
    statusText: null,
    headers: {},
  });

  // Basic GET request
  const get = async (url, options = {}) => {
    loading.value = true;
    error.value = null;
    data.value = null;

    try {
      const res = await fetch(url, {
        method: "GET",
        ...options,
      });

      // Store response details
      response.status = res.status;
      response.statusText = res.statusText;
      response.headers = Object.fromEntries([...res.headers.entries()]);

      if (!res.ok) {
        throw new Error(res.statusText || "Request failed");
      }

      data.value = await res.json();
      return data.value;
    } catch (err) {
      error.value = err.message || "Error during fetch operation";
      console.error(error.value);
    } finally {
      loading.value = false;
    }
  };
  return {
    data,
    error,
    loading,
  };
}
