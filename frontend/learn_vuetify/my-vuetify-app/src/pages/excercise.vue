<!-- <template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <h1 class="text-center">Vuetify Hands-On Excercise</h1>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <v-card title="Card 1" subtitle="This is a simple card"></v-card>
      </v-col>
      <v-col>
        <v-card title="Card 2" subtitle="Styled with vuetify classes"></v-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <div class="bg-light-blue text-center mt-4 pa-4">
          This is primary coloured container with padding
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-card>
          <h2 class="text-center elevation-3">Stylish Heading with Shadows</h2>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <div
          class="opacity-50 text-center rounded-lg border border-primary pa-3"
        >
          Rounded border with opacity
        </div>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<!-- ============================================================================================================= -->
<!-- =========================== Dialog ======================================================================= -->
<!-- <template>
  <v-container>
    <v-btn color="primary" @click="dialog = true"> Open dialog </v-btn>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-card-title>Dialog title</v-card-title>
        <v-card-text>Dialog content goes here</v-card-text>
        <v-card-action>
          <v-btn text @click="dialog = false">Close</v-btn>
        </v-card-action>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== Grid ======================================================================= -->

<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12" class="border-lg" align="center" justify="center">
        <div>column 1</div>
      </v-col>

      <v-col cols="12" class="border-lg" align="center" justify="center">
        <div>column 2</div>
      </v-col>

      <v-col cols="12" class="border-lg" align="center" justify="center">
        <div>column 3</div>
      </v-col>
    </v-row>
  </v-container>
</template> -->

<!-- ============================================================================================================= -->
<!-- =========================== Transition ======================================================================= -->

<!-- <template>
  <div class="text-center">
    <v-menu transition="fade-transition">
      <template v-slot:activator="{ props }">
        <v-btn color="primary" v-bind="props">Fade transition</v-btn>
      </template>
      <v-list>
        <v-list-item>
          <v-list-item-title
            class="text-black"
            v-text="'Hello'"
          ></v-list-item-title>
          <v-list-item-title v-text="'World'"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template> -->

<!-- ============================================================================================================= -->
<!-- =========================== Hovering ======================================================================= -->

<!-- <template>
  <v-hover>
    <template v-slot:default="{ isHovering, props }">
      <v-card
        v-bind="props"
        :color="isHovering ? 'primary' : undefined"
        title="hover over me"
        text="Hello World"
      ></v-card>
    </template>
  </v-hover>
</template> -->

<!-- ============================================================================================================= -->
<!-- =========================== Basic slots ======================================================================= -->

<!-- <template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <CardSlot>
          <template #title>
            <h1>Custom header</h1>
          </template>
          <template #text>
            <p>This is the main content of the card</p>
          </template>
          <template #footer>
            <v-btn outlined class="text-light-blue"
              >Action button in footer</v-btn
            >
          </template>
        </CardSlot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import Card from "../components/CardSlot.vue";
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== Scoped slots ======================================================================= -->

<!-- ============================================================================================================= -->
<!-- =========================== Custom Render ======================================================================= -->

<!-- <template>
  <RenderComponent title="My Title"> this is the content </RenderComponent>
</template>

<script setup>
import RenderComponent from "../components/CustomRender.vue";
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== composables ======================================================================= -->

<!-- <template>
    <div>
        <v-btn @click="storeValue">Toggle key</v-btn>
    </div>
</template>

<script setup>
import 
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== custom directives ======================================================================= -->

<!-- <template>
  <div>
    <button v-cool-hover="'#ff5252'">Hover for red!</button>
  </div>
</template>

<script>
import { coolHover } from "../directives/v-hovering.js";

export default {
  directives: {
    "cool-hover": coolHover,
  },
};
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== composables tak jadi ======================================================================= -->

<!-- <template>
  <v-row>
    <v-col>
      <div>
        <v-btn @click="fetchUsers" :disabled="loading">{{
          loading ? "Loading..." : "Fetch Users"
        }}</v-btn>
        <div v-if="error" class="error">{{ error }}</div>
        <ul v-if="data">
          <li v-for="user in data" :key="user.id">{{ user.name }}</li>
        </ul>
      </div>
    </v-col>
  </v-row>

  <v-row>
    <v-col>
    
    </v-col>
  </v-row>
  <div>
    <button @click="fetchUsers" :disabled="loading">
      {{ loading ? "Loading..." : "Fetch Users" }}
    </button>

    <div v-if="error" class="error">{{ error }}</div>

    <ul v-if="data">
      <li v-for="user in data" :key="user.id">
        {{ user.name }}
      </li>
    </ul>

    <button @click="createUser" :disabled="loading">Create User</button>
  </div>
</template>

<script setup>
import { useApi } from "../composables/useFetch.js";

const { data, error, loading, get, post } = useApi();

// GET example
const fetchUsers = async () => {
  await get("https://softwium.com/api/books");
};
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== stores ======================================================================= -->

<!-- <template>
  <v-container>
    <v-row>
      <v-col>
        <div class="bg-red">to do count: {{ todoArray.count }}</div>
      </v-col>
      <v-col>
        <v-btn @click="todoArray.increment"></v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <div class="bg-green">to do count: {{ todoArray.count }}</div>
      </v-col>
      <v-col>
        <v-btn @click="todoArray.increment"></v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { todo } from "@/stores/counter";
import { todoArray } from "@/stores/todo";

const store = useCounterStore();
</script>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '@/stores/todoStore'

// Initialize the store
const todoStore = useTodoStore()
const newTodoText = ref('')

// Function to add a new todo
const addNewTodo = () => {
  if (newTodoText.value.trim()) {
    todoStore.addTodo(newTodoText.value)
    newTodoText.value = ''
  }
}
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== sendiri try ======================================================================= -->

<!-- <template>
  <div>
    <h2>Shopping List</h2>
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: ["Apples", "Bread", "Milk", "Eggs", "Coffee"],
    };
  },
};
</script> -->

<!-- <template>
  <div>
    <h2>Product List</h2>
    <ul>
      <li v-for="product in products" :key="product.id">
        {{ product.name }} - ${{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [
        { id: 1, name: "Laptop", price: 999 },
        { id: 2, name: "Phone", price: 699 },
        { id: 3, name: "Tablet", price: 399 },
        { id: 4, name: "Headphones", price: 149 },
      ],
    };
  },
};
</script> -->

<!-- ============================================================================================================= -->
<!-- =========================== actions ======================================================================= -->

<!-- <template>
  <v-container>
    <v-btn @click="fetchBooks">Load Books</v-btn>
    <v-list>
      <v-list-item v-for="book in books" :key="book.id" :title="book.title" />
    </v-list>
  </v-container>
</template>

<script setup>
import { useBookStore } from "../stores/bookStores";
import { onMounted } from "vue";

const { books, fetchBooks } = useBookStore();

onMounted(fetchBooks);
</script> -->
