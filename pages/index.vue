<template>
  <div>
    index
    <MyComp :locale />
    <NuxtLink to="/it/"> To it</NuxtLink>
    <NuxtLink to="/en/"> To en</NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
