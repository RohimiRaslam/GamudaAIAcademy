<template>
  <v-navigation-drawer permanent color="#1E1E1E" class="sidebar">
    <!-- Logo Section -->
    <div class="pa-4">
      <v-sheet
        color="#FF3D00"
        class="rounded-lg d-inline-flex align-center justify-center"
        width="48"
        height="48"
      >
        <v-icon color="white">mdi-plus</v-icon>
      </v-sheet>
      <div class="white--text text-h6 mt-2">White Text</div>
      <div class="grey--text text-body-2">Gray text</div>
    </div>

    <!-- Navigation Links -->
    <v-list nav dense color="transparent">
      <v-list-item
        v-for="item in menuItems"
        :key="item.title"
        link
        class="px-4"
      >
        <div class="d-flex align-center">
          <v-icon color="grey darken-1" class="mr-3">{{ item.icon }}</v-icon>
          <span class="grey--text text--lighten-1">{{ item.title }}</span>
        </div>
      </v-list-item>

      <!-- Kanban Boards Section -->
      <v-subheader class="grey--text mt-4">Kanban Boards</v-subheader>
      <v-list-item
        v-for="project in projects"
        :key="project.title"
        link
        class="px-4"
      >
        <div class="d-flex align-center">
          <v-icon color="grey darken-1" class="mr-3">mdi-view-dashboard</v-icon>
          <span class="grey--text text--lighten-1">{{ project.title }}</span>
        </div>
      </v-list-item>
    </v-list>

    <!-- Bottom Section -->
    <template v-slot:append>
      <div class="pa-4">
        <v-sheet
          color="grey darken-3"
          class="rounded-lg d-inline-flex align-center justify-center"
          width="48"
          height="48"
        >
          <v-sheet
            color="#FF3D00"
            class="rounded-lg d-inline-flex align-center justify-center"
            width="40"
            height="40"
          >
            <v-icon color="white">mdi-home</v-icon>
          </v-sheet>
        </v-sheet>
        <div class="grey--text text-body-2 mt-2">Gray text</div>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "Sidebar",
  data: () => ({
    menuItems: [
      { title: "New Meeting", icon: "mdi-plus-circle" },
      { title: "Kanban Board", icon: "mdi-view-dashboard" },
      { title: "My Tasks", icon: "mdi-checkbox-marked" },
      { title: "Some other page", icon: "mdi-file" },
    ],
    projects: [
      { title: "Project 1" },
      { title: "Project 2" },
      { title: "Project 3" },
    ],
  }),
};
</script>

<style scoped>
.sidebar {
  width: 280px;
}

.rounded-lg {
  border-radius: 8px !important;
}
</style>
