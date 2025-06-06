<template>
  <h1>Hello World</h1>
</template>

<script setup>
defineOptions({
  layout: "admin",
});
definePageMeta({
  requiresAuth: true,
  requiredRole: "admin",
});
</script>
