/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from "vue-router/auto";
import { setupLayouts } from "virtual:generated-layouts";
import { routes } from "vue-router/auto-routes";
import { ref } from "vue";
// import store from "../stores/admin";

const loadingState = ref(false);

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: setupLayouts(routes),
});

router.beforeEach(async (to, from) => {
  loadingState.value = true;

  const authUser = localStorage.getItem("auth-user");
  const isAuthenticated = !!authUser;
  const userRole = authUser ? JSON.parse(authUser).role : null;

  if (to.path === "/login" && isAuthenticated) {
    loadingState.value = false;
    return {
      path: userRole === "admin" ? "/admin" : "/dashboard",
    };
  }

  if (to.meta.requiresAuth) {
    if (!isAuthenticated) {
      loadingState.value = false;
      return {
        path: "/login",
        query: { redirect: to.fullPath },
      };
    }
  }
});

router.afterEach(() => {
  loadingState.value = false;
});

// Workaround for https://github.com/vitejs/vite/issues/11804
router.onError((err, to) => {
  if (err?.message?.includes?.("Failed to fetch dynamically imported module")) {
    if (!localStorage.getItem("vuetify:dynamic-reload")) {
      console.log("Reloading page to fix dynamic import error");
      localStorage.setItem("vuetify:dynamic-reload", "true");
      location.assign(to.fullPath);
    } else {
      console.error("Dynamic import error, reloading page did not fix it", err);
    }
  } else {
    console.error(err);
  }
});

router.isReady().then(() => {
  localStorage.removeItem("vuetify:dynamic-reload");
});

export const useLoadingState = () => loadingState;

export default router;
