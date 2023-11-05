<template>
  <fieldset>
    <p class="mt-10 text-sm leading-6 text-gray-600">{{ question.question }}</p>
    <div class="mt-6 space-y-6">
      <div v-for="choice in question.choices" class="flex items-center gap-x-3">
        <input id="push-everything" name="push-notifications" type="radio" class="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600" />
        <label for="push-everything" class="block text-sm font-medium leading-6 text-gray-900">{{ choice.content }}</label>
      </div>
    </div>
  </fieldset>
</template>

<script setup>
const props = defineProps(['question'])

const quizzes = [
  {
    name: 'Module 1',
    content: [{
      question: 'Choose the best definition for the term “People Skills” that your group discussed during Module 1 of Good Dads 2.0.',
      choices: [
        {
          content: "Knowing a large number of people and having lots of friends",
          isCorrect: false
        }, 
        {
          content: "Knowing the personalities, interests, desires, strengths and weaknesses of those around you.",
          isCorrect: true
        }, 
        {
          content: "Knowing who likes you and who doesn’t like you.",
          isCorrect: false
        }, 
        {
          content: "Knowing the right thing to say all the time.",
          isCorrect: false
        }
      ]
    }, {
      question: "Which of the following best describes the traits of a good leader?",
      choices: [
        {
          content: "Sticking to the plan.",
          isCorrect: false
        }, 
        {
          content: "Commitment",
          isCorrect: false
        }, 
        {
          content: "Knowing which tool to use for a given job.",
          isCorrect: false
        }, 
        {
          content: "Knowing the right thing to say all the time.",
          isCorrect: true
        }
      ]
    }]
  },
]

</script>

<style scoped></style>
