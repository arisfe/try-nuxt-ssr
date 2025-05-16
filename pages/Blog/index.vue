<template>
  <div :style="wrapperStyle">
    <h1>{{ title }} Page</h1>
    <p>This is the {{ title }} page of our website.</p>
    <h1 :style="titleStyle">Blog Terbaru</h1>
    <div v-for="(post, index) in posts" :key="index" :style="postStyle">
      <h2 :style="postTitleStyle">{{ post.title }}</h2>
      <p :style="paragraphStyle">{{ post.excerpt }}</p>
    </div>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Blog",
  description: "Blog Page Description.",
});

const title = ref("");

if (process.client) {
  title.value = "Blog";
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
  color: "#8e44ad",
};

const paragraphStyle = {
  fontSize: "1rem",
  marginBottom: "1rem",
};

const postStyle = {
  borderBottom: "1px solid #ddd",
  marginBottom: "2rem",
  paddingBottom: "1rem",
};

const postTitleStyle = {
  fontSize: "1.5rem",
  color: "#2c3e50",
};

const posts = [
  {
    title: "Mengenal Nuxt 3 dan Keunggulannya",
    excerpt:
      "Pelajari fitur-fitur baru dari Nuxt 3 yang membuat pengembangan web semakin mudah dan cepat.",
  },
  {
    title: "Cara Membuat API di Nuxt 3 dengan Nitro",
    excerpt:
      "Nuxt 3 hadir dengan Nitro server, membuat pembuatan API menjadi seamless dan efisien.",
  },
  {
    title: "Optimasi SEO dengan Nuxt 3",
    excerpt:
      "Nuxt 3 memiliki dukungan SEO bawaan yang sangat baik. Yuk, kita bahas cara memaksimalkannya!",
  },
];
</script>
