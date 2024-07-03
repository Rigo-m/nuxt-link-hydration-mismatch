<template>
  <div>
    {{ $t("welcome") }}
    <MyLinks nuxt-client></MyLinks>
  </div>
</template>

<script setup lang="ts">
defineProps<{ locale: string }>();
</script>

<style scoped></style>
