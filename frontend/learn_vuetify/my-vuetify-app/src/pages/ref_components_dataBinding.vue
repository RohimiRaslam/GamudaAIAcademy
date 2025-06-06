<!-- <template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="6">
          <input ref="inputField" type="text" />
        </v-col>
        <v-col cols="6">
          <v-btn @click="focusInput">Focus Input</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script setup>
import { ref } from "vue";
const inputField = ref(null);
const focusInput = () => {
  inputField.value?.focus();
};
</script>

<style></style> -->

<!-- ==========================================================================
<template>
  <v-list>
    <TaskItem v-for="task in tasks" :key="task" :task="task" />
  </v-list>
</template>

<script setup>
import TaskItem from "../components/TaskItem.vue";
const tasks = ref(["Learn Vue", "Build an app"]);
</script>
========================================================================== -->

<template>
  <CustomInput v-model="username" label="Username" />
  <p>Entered username: {{ username }}</p>
</template>

<script setup>
import CustomInput from "@/components/CustomInput.vue";

const username = ref("");
</script>
