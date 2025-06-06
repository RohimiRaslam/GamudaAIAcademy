import { defineStore } from "pinia";
import { useAuthStore } from "./auth";

interface UserData {
  id: number;
  name: string;
  email: string;
  role: string;
}

export const useAdminStore = defineStore("admin", {
  state: () => ({
    users: [] as UserData[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchUsers() {
      const authStore = useAuthStore();

      if (authStore.userRole !== "admin") {
        throw new Error("Unauthorized access");
      }

      this.loading = true;
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.users = [
          { id: 1, name: "John Doe", email: "john@example.com", role: "user" },
          {
            id: 2,
            name: "Jane Smith",
            email: "jane@example.com",
            role: "user",
          },
          {
            id: 3,
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
          },
        ];
      } catch (err) {
        this.error = "Failed to fetch users";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    async deleteUser(userId: number) {
      const authStore = useAuthStore();

      if (authStore.userRole !== "admin") {
        throw new Error("Unauthorized access");
      }

      this.loading = true;
      try {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));

        this.users = this.users.filter((user) => user.id !== userId);
      } catch (err) {
        this.error = "Failed to delete user";
        throw err;
      } finally {
        this.loading = false;
      }
    },
  },
});
