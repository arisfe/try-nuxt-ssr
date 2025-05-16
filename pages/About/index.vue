<template>
  <div :style="wrapperStyle">
    <h1>{{ title }} Page</h1>
    <p>This is the {{ title }} page of our website.</p>
    <h1 :style="titleStyle">Tentang Nuxt 3</h1>
    <p :style="paragraphStyle">
      Nuxt 3 adalah evolusi dari Nuxt.js yang dibangun di atas fondasi Vue 3 dan
      Vite. Framework ini menawarkan kinerja yang lebih cepat, ukuran bundle
      lebih kecil, dan pengalaman developer yang lebih baik.
    </p>
    <p :style="paragraphStyle">
      Komunitas Nuxt sangat aktif dan terus memberikan kontribusi dalam
      pengembangan modul-modul baru yang memudahkan pengembangan aplikasi
      modern.
    </p>
  </div>
</template>

<script setup>
definePageMeta({
  title: "About",
  description: "About Page Description.",
});

const title = ref("");

if (process.client) {
  title.value = "About";
}
const wrapperStyle = {
  padding: "2rem",
  maxWidth: "800px",
  margin: "0 auto",
  fontFamily: "sans-serif",
  lineHeight: "1.6",
};

const titleStyle = {
  fontSize: "2rem",
  marginBottom: "1rem",
  color: "#0070f3",
};

const paragraphStyle = {
  fontSize: "1.125rem",
  marginBottom: "1rem",
};
</script>
