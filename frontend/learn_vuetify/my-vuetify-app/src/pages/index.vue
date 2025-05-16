<template>
  <!-- <HelloWorld /> -->
  <!-- <div class="text-center pt-3">centered with padding</div>
  <div class="bg-primary opacity-40 pa-10 text-white text-center pa-3">
    Primary Background
  </div>
  <v-container>
    <v-row align="center" justify="space-between">
      <v-col class="bg-primary" cols="4" md="6"
        >Half-width on medium screens</v-col
      >
      <v-col class="bg-primary" cols="4" md="6">test</v-col>
    </v-row>
  </v-container>

  <div class="text-h1">test</div>
  <div class="text-h2">test</div>
  <div class="text-h3">test</div>
  <div class="text-high-emphasis">test</div>

  <div class="w-50 h-25 bg-secondary text-capitalize text-center">
    custom dimension
  </div>

  <v-row align="center" justify="space-between">
    <v-cols class="bg-primary" cols="4">aligned left</v-cols>
    <v-cols class="bg-primary" cols="4">aligned center</v-cols>
    <v-cols class="bg-primary" cols="4">aligned right</v-cols>
  </v-row>

  <div class="elevation-10 bg-blue pa-4 text-capitalize">
    shadow and background
  </div>

  <div class="rounded-lg border-double pa-2">Border and styling</div>

  <div class="opacity-40">blur and opacity</div> -->

  <!-- ============================================================= -->
  <!-- =======================EXERCISE START========================
       =============================================================
  <div class="text-h1 text-center">test</div>

  <div class="d-flex justify-space-around">
    <v-card width="300px" cols="6">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">Title</v-card-title>
      <v-card-text> Body text </v-card-text>
    </v-card>

    <v-card width="300px" cols="6">
      <v-card-title class="text-h6 text-md-h5 text-lg-h4">Title</v-card-title>
      <v-card-text> Body text </v-card-text>
    </v-card>
  </div>

  <v-container>
    <v-row>
      <v-col>
        <v-sheet class="pa-2 ma-2 bg-primary text-center">testing</v-sheet>
      </v-col>
    </v-row>
  </v-container> 
  =============================================================
  =======================EXERCISE END==========================
  =============================================================-->

  <!-- <v-app>
    <v-container class="pa-4">
      <v-btn
        rounded="md"
        color="yellow-darken-4"
        class="text-black"
        @click="() => console.log('button clicked')"
        >test button
      </v-btn>

      <v-dialog>
        <v-card>
          <v-card-title>dialog title</v-card-title>
          <v-card-text>dialog content goes here</v-card-text>
          <v-card-action>
            <v-btn text @click="dialog = false">close</v-btn>
          </v-card-action>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>-->

  <!-- <v-container class="pa-4">
    <v-btn
      rounded="md"
      color="yellow-darken-4"
      class="text-black"
      @click="dialog = true"
      >open dialog
    </v-btn>

    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>dialog title</v-card-title>
        <v-card-text>dialog content goes here</v-card-text>
        <v-card-action>
          <v-btn text @click="dialog = false">close</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>

    <div class="d-none d-md-block">
      visible only on medium screens and larger
    </div>

    <div>
      <h1 class="d-none d-sm-blockn">
        this heading is visible on small screen and above
      </h1>
      <p class="d-flex d-sm-block">
        this paragraph is displayed on small screeens and as a block on larger
        screens
      </p>
    </div> -->

  <!-- <v-row class="ma-5">
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="border-lg"
        align="center"
        justify="center"
      >
        <div>Column 1</div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="border-lg"
        align="center"
        justify="center"
      >
        <div>Column 2</div>
      </v-col>
      <v-col
        cols="12"
        sm="6"
        md="4"
        class="border-lg"
        align="center"
        justify="center"
      >
        <div>Column 3</div>
      </v-col>
    </v-row> -->

  <!-- <v-row>
      <v-col>
        <v-card
          flat
          cols="12"
          sm="6"
          md="4"
          class="border-lg"
          align="center"
          justify="center"
          title="Column 1"
        ></v-card>
      </v-col>
      <v-col>
        <v-card
          flat
          cols="12"
          sm="6"
          md="4"
          class="border-lg"
          align="center"
          justify="center"
          title="Column 2"
        ></v-card>
      </v-col>
      <v-col>
        <v-card
          flat
          cols="12 "
          sm="6"
          md="4"
          class="border-lg"
          align="center"
          justify="center"
          title="Column 3"
        ></v-card>
      </v-col>
    </v-row>
  </v-container>

  <v-row>
    <v-col align="center">
      <div clas="text-center">
        <v-menu transition="fade-transition">
          <template v-slot:activator="{ props }">
            <v-btn
              flat
              class="text-black"
              color="yellow-darken-4"
              v-bind="props"
              >click for fade transition</v-btn
            >
          </template>
          <v-list>
            <v-list-item>
              <v-list-item-title v-text="'hello'"></v-list-item-title>
              <v-list-item-title v-text="'world'"></v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
      <v-hover>
        <template v-slot:default="{ isHovering, props }">
          <v-card
            flat
            class="ml-10 mr-10 text-black"
            v-bind="props"
            :color="isHovering ? 'primary' : 'secondary'"
            title="Hover over me"
            text="Hello World"
          ></v-card>
        </template>
      </v-hover>
    </v-col>
  </v-row>

  <v-row>
    <v-col align="start">
      <v-btn flat class="custom-btn">custom button</v-btn>
    </v-col>
    <v-col>
      <v-btn flat class="custom-btn" @click="toggleTheme">toggle theme</v-btn>
    </v-col>
  </v-row> -->

  <!-- <v-btn class="ma-5" v-tooltip="'Tooltip'">Hover me</v-btn>
  <div class="d-flex justify-center ga-4 py-10">
    <v-btn v-tooltip:start="'Tooltip at the start'">start</v-btn>
    <v-btn v-tooltip:end="'Tooltip at the end'">end</v-btn>
    <v-btn v-tooltip:top="'Tooltip at the top'">top</v-btn>
    <v-btn v-tooltip:bottom="'Tooltip at the bottom'">bottom</v-btn>
    <v-btn v-tooltip:bottom-end="'Tooltip at the bottom-end'">bottom-end</v-btn>
  </div> -->

  <!-- <v-app>
    <div class="elevation-2 pa-4">Dashboard</div>

    <v-container>
      <v-row justify="space between">
        <v-col cols="4">
          <v-card title="sales Overview" text="15% increase"></v-card>
        </v-col>
        <v-col>
          <v-card title="Customer Growth" text="10 new customer"></v-card>
        </v-col>
        <v-col>
          <v-card title="Website Traffic" text="50k Visitors"></v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card title="Recent Orders"> </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app> -->

  <ul>
    <li v-for="fruit in fruits" :key="fruit">{{ fruit }}></li>
  </ul>
</template>

<style>
/* .custom-btn {
  background-color: red;
  color: white;
  border-radius: 8px;
} */
</style>

<!-- lang="ts" setup -->
<script setup>
const fruits = ["apple", "banana", "cherry"];
</script>
