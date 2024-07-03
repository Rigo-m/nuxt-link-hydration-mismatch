<template>
  <div>
    <NuxtLink :to="linkIndex">Index</NuxtLink>
    <NuxtLink :to="linkIndex2">Index 2</NuxtLink>
    Test
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalePath();
const { locale } = useI18n();
console.log("locale", locale.value);
const linkIndex = computed(() => localePath("/"));
const linkIndex2 = computed(() => localePath("/index2"));
</script>

<style scoped></style>
