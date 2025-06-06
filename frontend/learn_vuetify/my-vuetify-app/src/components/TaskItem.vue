<template>
  <v-list-item>
    <v-list-item-content>
      <v-list-item-title>
        {{ task }}
      </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
</template>

<!-- <template>
  <v-app>
    <v-container>
      <v-card color="yellow">
        <v-list-item>{{ task }}</v-list-item>
      </v-card>
    </v-container>
  </v-app>
</template> -->

<script setup>
const props = defineProps({
  task: String,
});
</script>
