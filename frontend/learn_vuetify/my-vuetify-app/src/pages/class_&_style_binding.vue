<template>
  <v-app>
    <v-container>
      <v-row>
        <v-col>
          <h3>Mood Tracker</h3>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-select
            v-model="selected"
            :items="emotions"
            label="How are you feeling today?"
            outlined
          ></v-select>
        </v-col>
      </v-row>

      <v-row>
        <v-col>
          <v-card>
            <div
              :class="{
                emotions: { happy: isHappy, sad: isSad, angry: isAngry },
              }"
            >
              {{ selected }}
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<style scoped>
.happy {
  background-color: black;
}
.sad {
  background-color: green;
}
.angry {
  background-color: blue;
}
</style>

<script setup>
import { ref } from "vue";
const selected = ref("");
const emotions = ["happy", "sad", "angry"];

const isHappy = ref(false);
const isSad = ref(false);
const isAngry = ref(false);
</script>
