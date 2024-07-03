<template>
  <div>
    index2
    <MyComp :locale />
  </div>
</template>

<script setup lang="ts">
const { locale } = useI18n();
</script>
