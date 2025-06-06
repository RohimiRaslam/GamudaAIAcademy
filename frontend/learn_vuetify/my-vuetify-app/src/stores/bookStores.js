import { defineStore } from "pinia";
import { ref } from "vue";

export const useBookStore = defineStore("bookStore", () => {
  const books = ref([]);

  const fetchBooks = async () => {
    const response = await fetch("https://softwium.com/api/books");
    books.value = await response.json();
  };

  return {
    books,
    fetchBooks,
  };
});
