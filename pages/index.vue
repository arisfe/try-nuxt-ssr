<template>
  <div>
    <h1>{{ title }} Page</h1>
    <p>This is the {{ title }} page of our website.</p>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Home",
  description: "Home Page Description.",
});

const title = ref("");

if (process.client) {
  title.value = "Home";
}
</script>
