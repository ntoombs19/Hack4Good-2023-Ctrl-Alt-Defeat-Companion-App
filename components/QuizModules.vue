<template>

  <div class="md:flex md:items-center md:justify-between mt-10 ml-9">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">{{ quiz.name }}</h2>
    </div>
  </div>
  <form class="mx-5 flex items-center justify-center" action="">
    <div v-for="question in quiz">
      <div v-for="quest in question">
        <QuestionModule :question="quest" />
      </div>
    </div>
  </form>

</template>

<script setup>
const props = defineProps(['quiz'])

</script>

<style scoped></style>
