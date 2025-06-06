<!-- <template>
  <v-app>
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-card
            title="Colorful card"
            text="This card will change color!"
            ref="colorCard"
            class="text-black"
          >
          </v-card>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="6">
          <v-btn @click="changeColor">Change Color</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>
<script setup>
import { ref } from "vue";

const colorCard = ref(null);
const changeColor = () => {
  if (colorCard.value) {
    let colur = (colorCard.value.$el.style.backgroundColor = "blue");
    console.log(colur);
  }
};
</script>

<style></style> -->

<template>
  <UserCard
    v-for="user in users"
    :key="user.email"
    :name="user.name"
    :email="user.email"
  />
</template>

<script setup>
import UserCard from "../components/UserCard.vue";

const users = [
  { name: "John Doe", email: "johnexample@gmail.com" },
  { name: "Jane smith", email: "janeexample@gmail.com" },
];
</script>
