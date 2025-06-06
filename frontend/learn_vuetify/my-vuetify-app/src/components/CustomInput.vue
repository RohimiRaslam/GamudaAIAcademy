<template>
  <v-text-field
    :model-value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    :label="label"
  ></v-text-field>
</template>

<script setup>
defineProps({
  modelValue: String,
  label: String,
});
defineEmits(["update:modelValue"]);
</script>
