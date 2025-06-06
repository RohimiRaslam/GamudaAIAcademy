<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title>Login</v-card-title>

          <v-card-text>
            <v-alert v-if="authStore.error" type="error" class="mb-4">
              {{ authStore.error }}
            </v-alert>

            <v-form @submit.prevent="handleLogin">
              <v-text-field
                v-model="credentials.username"
                label="Username"
                persistent-hint
                :disabled="authStore.loading"
              />

              <v-text-field
                v-model="credentials.password"
                label="Password"
                type="password"
                persistent-hint
                :disabled="authStore.loading"
              />

              <v-btn
                type="submit"
                color="primary"
                block
                class="mt-4"
                :loading="authStore.loading"
                :disabled="authStore.loading"
              >
                Login
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useRouter, useRoute } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const route = useRoute();

const credentials = ref({
  username: "",
  password: "",
});

const handleLogin = async () => {
  try {
    await authStore.login(credentials.value);
    const redirectPath =
      route.query.redirect?.toString() ||
      (authStore.userRole === "admin" ? "/admin" : "/dashboard");

    console.log(route.query.redirect?.toString());
    console.log(redirectPath);

    router.push(redirectPath);
  } catch (error) {
    console.error("Login failed:", error);
  }
};
</script>
