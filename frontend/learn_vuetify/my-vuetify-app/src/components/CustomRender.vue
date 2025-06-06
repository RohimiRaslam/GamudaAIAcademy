<template>
  <component :is="RenderComponent" :title="title"></component>
</template>

<script setup>
const slots = useSlots();
const RenderComponent = (props, context) => {
  return h("div", {}, [
    h("h1", {}, props.title),
    h("p", {}, slots.default ? slots.default : ""),
  ]);
};
defineProps(["title"]);
</script>
