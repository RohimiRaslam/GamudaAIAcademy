<!-- ============================================================================================================= -->
<!-- =========================== store ======================================================================= -->

<!-- <template>
  <v-container>
    <v-row>
      <v-col>
        <div>Count: {{ store.count }}</div>
        <div>Double: {{ store.doubleCount }}</div>
        <v-btn @click="store.increment">Increment ></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== state management ======================================================================= -->

<!-- <template>
  <v-container>
    <div>{{ name }} is {{ age }} years old</div>
    <v-btn @click="store.haveBirthday">Have birthday</v-btn>
  </v-container>
</template>

<script setup>
import { useUserStore } from "@/stores/counter";
import { storeToRefs } from "pinia";
const store = useUserStore();
const { name, age } = storeToRefs(store);
</script> -->
