<template>
  <v-container>
    <v-row>
      <v-col cols="4">
        <v-card prepend-icon="$vuetify">
          <v-card-title>
            {{ name }}
          </v-card-title>
          <v-card-text>
            {{ email }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
const props = defineProps({
  name: String,
  email: String,
});
</script>

<!-- <template>
  <v-card class="ma-2">
    <v-card-title>
      {{ name }}
    </v-card-title>
    <v-card-text>
      {{ email }}
    </v-card-text>
  </v-card>
</template>

<script setup>
const props = defineProps({
  name: String,
  email: String,
});
</script> -->
