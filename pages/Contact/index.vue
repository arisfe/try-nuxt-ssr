<template>
  <div :style="wrapperStyle">
    <h1>{{ title }} Page</h1>
    <p>This is the {{ title }} page of our website.</p>
    <h1 :style="titleStyle">Kontak Kami</h1>
    <p :style="paragraphStyle">
      Untuk pertanyaan atau kerja sama, silakan hubungi kami melalui email di:
    </p>
    <p :style="emailStyle">hello@nuxt3.dev</p>
    <p :style="paragraphStyle">Atau kunjungi kami di kantor pusat kami di:</p>
    <p :style="paragraphStyle">Jl. Framework Modern No.3, Web City, Internet</p>
  </div>
</template>

<script setup>
definePageMeta({
  title: "Contact",
  description: "Contact Page Description.",
});

const title = ref("");

if (process.client) {
  title.value = "Contact";
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
  color: "#ff5722",
};

const paragraphStyle = {
  fontSize: "1.125rem",
  marginBottom: "1rem",
};

const emailStyle = {
  fontSize: "1.25rem",
  fontWeight: "bold",
  color: "#333",
  marginBottom: "1.5rem",
};
</script>
