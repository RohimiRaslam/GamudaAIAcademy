<!-- <template>
  <Card>
    <template #title>Page title</template>
    <p>Page content</p>
  </Card>
</template>

<script setup>
import Card from "../Components/Card.vue";
</script> -->

<!-- <template>
  <ProductCard>
    <template #title>Macbook Air</template>
    <template #description> Speed of lightness</template>
    <template #price> RM 10,000 </template>
    <template #image></template>
  </ProductCard>
</template>
<script setup>
import { ref } from "vue";
import ProductCard from "../components/Card.vue";
</script> -->

<!-- <template>
  <ProductCard
    src="https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=600"
  >
    <template #title>Macbook Air</template>
    <template #description>Speed of lightness</template>
    <template #price>From RM 4,499</template>
  </ProductCard>
</template>
<script setup>
import { ref } from "vue";
import ProductCard from "../components/Card.vue";
</script> -->

<!-- <template>
  <List>
    <template #default="{ item }">
      <v-card class="ma-5 w-25">
        <v-card-title>
          {{ item.name }}
        </v-card-title>
        <v-card-text>
          {{ item.description }}
        </v-card-text>
      </v-card>
    </template>
  </List>
</template> 

<script setup>
import List from "../components/Card.vue";
</script> -->

<!-- <template>
  <List>
    <template #default="{ items }">
      <div>
        <v-card
          v-for="item in items"
          :key="item.id"
          :title="item.name"
          :text="item.description"
        ></v-card>
      </div>
    </template>
  </List>
</template>

<script setup>
import List from "../components/Card.vue";
</script> -->
