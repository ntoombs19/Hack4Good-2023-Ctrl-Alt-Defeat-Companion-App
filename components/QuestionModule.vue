<template>
  <fieldset>
    <h2 class="mt-3"><strong>{{ question.question }}</strong></h2>
    <div class="mt-6 space-y-6">
      <div @click="$emit('testEvent', [choice.content,question.question])" v-for="choice in question.choices" class="flex items-center">
        <input :name="quizName" id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">{{ choice.content }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const props = defineProps(['question', 'quizName'])

let answer = '';

</script>

<style scoped></style>
