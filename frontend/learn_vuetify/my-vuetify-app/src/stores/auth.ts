import { defineStore } from "pinia";

interface User {
  id: number;
  username: string;
  role: "admin" | "user";
}

interface Credentials {
  username: string;
  password: string;
}

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null as User | null,
    loading: false,
    error: null as string | null,
  }),

  getters: {
    isLoggedIn: (state) => !!state.user,
    userRole: (state) => state.user?.role,
  },

  actions: {
    async login(credentials: Credentials) {
      this.loading = true;
      this.error = null;

      try {
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        if (credentials.password !== "password") {
          throw new Error("Invalid password");
        }

        switch (credentials.username) {
          case "admin":
            this.user = {
              id: 1,
              username: "admin",
              role: "admin",
            };
            break;
          case "user":
            this.user = {
              id: 2,
              username: "user",
              role: "user",
            };
            break;
          default:
            throw new Error("Invalid username");
        }

        // Store in localStorage
        localStorage.setItem("auth-user", JSON.stringify(this.user));

        return true;
      } catch (err) {
        this.error = err instanceof Error ? err.message : "Login failed";
        throw err;
      } finally {
        this.loading = false;
      }
    },

    logout() {
      this.user = null;
      localStorage.removeItem("auth-user");
    },

    initAuth() {
      const savedUser = localStorage.getItem("auth-user");
      if (savedUser) {
        this.user = JSON.parse(savedUser);
      }
    },
  },
});
