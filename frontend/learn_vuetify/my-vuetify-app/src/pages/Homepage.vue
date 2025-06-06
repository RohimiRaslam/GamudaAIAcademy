<template>
  <v-app>
    <Sidebar />
    <Navbar />
    <v-main>
      <!-- Your main content here -->
      <v-container>
        <v-row>
          <v-col>
            <TaskDraft> </TaskDraft>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
import Sidebar from "../components/Sidebar.vue";
import Navbar from "../components/Navbar.vue";
import TaskDraft from "../components/TaskDraft.vue";
</script>
