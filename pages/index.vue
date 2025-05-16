<template>
    <div>
        <div :style="wrapperStyle">
        <h1>{{ title }} Page</h1>
        <p>This is the {{ title }} page of our website.</p>
            <h1 :style="titleStyle">Selamat Datang di Nuxt 3</h1>
            <p :style="paragraphStyle">
                Nuxt 3 adalah framework modern berbasis Vue 3 yang dirancang untuk membuat aplikasi web yang cepat, modular,
                dan powerful. Dengan dukungan untuk rendering sisi server (SSR), static site generation (SSG), dan hybrid
                rendering, Nuxt 3 sangat fleksibel untuk berbagai jenis proyek.
            </p>
            <p :style="paragraphStyle">
                Fitur unggulan Nuxt 3 antara lain:
            <ul :style="listStyle">
                <li>Built-in server API (Nitro)</li>
                <li>Vue 3 dan Composition API</li>
                <li>File-based routing</li>
                <li>TypeScript support out of the box</li>
                <li>Modular dengan lebih dari 100+ module</li>
            </ul>
            </p>
            <p :style="paragraphStyle">
                Dengan Nuxt 3, developer dapat membangun aplikasi full-stack dengan pengalaman developer yang luar biasa.
            </p>
        </div>

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

const wrapperStyle = {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    fontFamily: 'sans-serif',
    lineHeight: '1.6',
}

const titleStyle = {
    fontSize: '2.5rem',
    marginBottom: '1rem',
    color: '#00DC82',
}

const paragraphStyle = {
    fontSize: '1.125rem',
    marginBottom: '1rem',
}

const listStyle = {
    paddingLeft: '1.5rem',
    marginTop: '0.5rem',
}
</script>


