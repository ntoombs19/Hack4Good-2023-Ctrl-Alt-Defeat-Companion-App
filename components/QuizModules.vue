<template>

  <div v-for="question in quiz">
    <div v-for="quest in question">
      <QuestionModule :question="quest" />
    </div>
  </div>

</template>

<script setup>
const props = defineProps(['quiz'])

</script>

<style scoped></style>
