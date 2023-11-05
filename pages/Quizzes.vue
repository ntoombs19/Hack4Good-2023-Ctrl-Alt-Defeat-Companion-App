<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div v-for="quiz in quizzes">
    <QuizModules :quiz="quiz" />
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import {GET_QUIZ} from "~/graphql/quiz";

const icons = reactive({
  alert: BellAlertIcon,
  help: LifebuoyIcon,
  profile: UserIcon,
  schedule: ClockIcon,
  quizzes: NewspaperIcon,
})

const currentPage = {
  name: "Alerts"
}

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Alerts', href: '/alerts', current: false, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: false, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
  { name: 'Quizzes', href: '/quizzes', current: true, icon: icons.quizzes },
]

const quizzes = [];

const { data } = await useAsyncQuery(GET_QUIZ, {
  filters: {
    quiz_question: {
      quiz: {
        id: {
          eq: 1
        }
      }
    }
  }
})

let questions = [];
let answerSet = [];


for(let i = 0; i < data.value.quizQuestionAnswers.data.length; i++) {
  if(!questions.includes(data.value.quizQuestionAnswers.data[i].attributes.quiz_question.data.attributes.question)){
    questions.push(data.value.quizQuestionAnswers.data[i].attributes.quiz_question.data.attributes.question);
  }
}

//This code was written at 4am
for(let i = 0; i < questions.length; i++) {
  answerSet.push([]);
  for(let ii = 0; ii < data.value.quizQuestionAnswers.data.length; ii++){
    if(questions[i] == data.value.quizQuestionAnswers.data[ii].attributes.quiz_question.data.attributes.question){
      answerSet[i].push(
          {
            content: data.value.quizQuestionAnswers.data[ii].attributes.answer,
            isCorrect: data.value.quizQuestionAnswers.data[ii].attributes.isCorrectAnswer,
            chosen: false
          });
    }
  }
}

let content = [];

for(let i = 0; i < questions.length; i++) {
  content.push(
      {
          question: questions[i],
          choices: answerSet[i]
        }
    )
}

quizzes.push(
    {
      name: "Module 1",
      content: content
    }
)

</script>