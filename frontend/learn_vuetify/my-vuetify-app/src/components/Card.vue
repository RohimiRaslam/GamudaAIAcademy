<!-- <template>
  <v-card>
    <v-card-title>
      <slot name="title">Component title</slot>
    </v-card-title>
    <v-card-text>
      <slot>Component content</slot>
    </v-card-text>
  </v-card>
</template> -->

<!-- <template>
  <v-card>
    <v-card-title>
      <slot name="title">Product Title</slot>
    </v-card-title>
    <v-card-text>
      <slot name="description">Product Description</slot>
      <br />
      <slot name="price">Product Price</slot>
    </v-card-text>
    <v-img
      src="https://www.apple.com/v/macbook-air/u/images/overview/design/color/design_side_skyblue__dtyt9gw4nfiq_medium_2x.jpg"
      height="200"
    ></v-img>
  </v-card>
</template> -->

<!-- <template>
  <v-card>
    <v-card-title>
      <slot name="title">Product Title</slot>
    </v-card-title>
    <v-card-text>
      <slot name="description">Product Description</slot>
      <br />
      <slot name="price">Product Price</slot>
    </v-card-text>

    <v-img width="300" :src="src"> </v-img>
  </v-card>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  src: {
    type: String,
    default:
      "https://images.pexels.com/photos/3411134/pexels-photo-3411134.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
});
</script> -->

<!-- <template>
  <div v-for="item in items" :key="item.id">
    <slot :item="item">{{ item }}</slot>
  </div>
</template>
<script setup>
const items = [
  { id: "1", name: "item 1", description: "Description" },
  { id: "1", name: "item 1", description: "Description" },
];
</script> -->

<!-- <template>
  <slot :items="items"></slot>
</template>

<script setup>
const items = [
  { id: "1", name: "item 1", description: "Description" },
  { id: "1", name: "item 1", description: "Description" },
];
</script> -->
