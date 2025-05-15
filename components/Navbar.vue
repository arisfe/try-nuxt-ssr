<template>
  <nav class="navbar">
    <ul class="flex gap-4">
      <li><NuxtLink to="/" class="hover:underline">Home</NuxtLink></li>
      <li><NuxtLink to="/about" class="hover:underline">About</NuxtLink></li>
      <li>
        <NuxtLink to="/blog" class="hover:underline">Blog</NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="hover:underline">Contact</NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<style lang="css">
.navbar {
  display: flex;
  background-color: #165757;
  justify-content: center;
  ul,
  a {
    display: flex;
    gap: 5em;
    color: #bffafa;
  }
}
</style>
