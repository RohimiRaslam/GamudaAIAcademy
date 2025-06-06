<template>
  <v-app-bar app flat color="#FF3D00" height="64">
    <v-toolbar-title class="white--text text-h6">Homepage</v-toolbar-title>

    <v-spacer></v-spacer>

    <!-- Search Bar -->
    <v-text-field
      v-model="search"
      hide-details
      prepend-inner-icon="mdi-magnify"
      placeholder="Search..."
      filled
      rounded
      dense
      class="mt-6 custom-search"
      background-color="white"
      style="max-width: 300px"
    ></v-text-field>

    <v-spacer></v-spacer>

    <!-- Window Controls -->
    <div class="d-flex align-center">
      <v-btn icon small class="mx-1">
        <v-icon color="white">mdi-window-minimize</v-icon>
      </v-btn>

      <v-btn icon small class="mx-1">
        <v-icon color="white">mdi-window-maximize</v-icon>
      </v-btn>

      <v-btn icon small class="mx-1">
        <v-icon color="white">mdi-close</v-icon>
      </v-btn>
    </div>
  </v-app-bar>
</template>

<script>
export default {
  name: "Navbar",
  data: () => ({
    search: "",
  }),
};
</script>

<style scoped>
.custom-search ::v-deep .v-input__slot {
  min-height: 36px !important;
}

.custom-search ::v-deep .v-text-field__slot input {
  font-size: 14px;
}
</style>
