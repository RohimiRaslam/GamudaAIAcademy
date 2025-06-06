<!-- <template>
  <v-card class="pa-4" elevation="4" rounded="lg">
    <div
      class="d-flex justify-space-between align-center mb-4"
      style="background-color: #333; padding: 8px; border-radius: 8px"
    >
      <div class="text-white font-weight-medium text-h6">
        {{ taskTitle }}
      </div>
      <div>
        <v-btn icon color="cyan" size="small" class="mr-1">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn icon color="red" size="small">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>

    <v-row class="mb-3" dense>
      <v-col cols="6">
        <v-sheet class="pa-2 rounded bg-grey-lighten-2">
          <strong>Due date:</strong> {{ dueDate }}
        </v-sheet>
      </v-col>
      <v-col cols="6" class="d-flex align-center">
        <strong class="mr-2">Assignees:</strong>
        <v-avatar
          v-for="(user, index) in avatars"
          :key="index"
          class="mr-1"
          size="28"
        >
          <v-img :src="user.img" alt="User" />
        </v-avatar>
        <v-avatar size="28" color="grey darken-2">
          <span class="text-caption white--text">+3</span>
        </v-avatar>
      </v-col>
    </v-row>

    <v-sheet class="pa-3 rounded border" min-height="120px">
      <em>{{ description }}</em>
    </v-sheet>
  </v-card>
</template>

<script setup>
import { ref } from "vue";

const taskTitle = ref("Task Title");
const dueDate = ref("2025-05-30");
const description = ref("Description...");
const avatars = ref([
  { img: "https://randomuser.me/api/portraits/men/1.jpg" },
  { img: "https://randomuser.me/api/portraits/women/2.jpg" },
  { img: "https://randomuser.me/api/portraits/men/3.jpg" },
]);
</script> -->

<template>
  <v-card class="pa-4" elevation="4" rounded="lg" color="grey-darken-3">
    <div class="d-md-flex justify-space-between align-center pb-2">
      <h1 class="text-white">{{ taskTitle }}</h1>
      <div class="justify-space-between align-center">
        <v-btn icon color="cyan" size="small" class="mr-1">
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-btn icon color="red" size="small">
          <v-icon>mdi-pencil</v-icon>
        </v-btn>
      </div>
    </div>

    <v-card>
      <v-col cols="8">
        <v-card flat class="border-sm pa-1 ma-1"> due date </v-card>
        <v-card flat class="border-sm pa-1 ma-1"> assignee </v-card>
        <v-card flat class="border-sm pa-1 ma-1">
          <v-card-item>Hello there</v-card-item>
        </v-card>
      </v-col>
      <v-col>
        <div class="flex flex-1">
          <p class="text-body-1 border-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </v-col>
    </v-card>

    <!-- <v-card>
      <v-row>
        <v-col cols="8">
          <v-card flat class="border-sm pa-1 ma-1"> due date </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8">
          <v-card flat class="border-sm pa-1 ma-1"> assignee </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <v-card flat class="border-sm pa-1 ma-1">description</v-card>
        </v-col>
      </v-row>
    </v-card>-->
  </v-card>
</template>

<script setup>
const taskTitle = "Task Title";
</script>
