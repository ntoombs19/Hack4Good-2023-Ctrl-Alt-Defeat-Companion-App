<template>
  <div v-for="quiz in quizzes">
    <div v-for="question in quiz">
      <div v-for="quest in question">
        <QuestionModule :question="quest" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['profile'])

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
      }, 
      {
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
