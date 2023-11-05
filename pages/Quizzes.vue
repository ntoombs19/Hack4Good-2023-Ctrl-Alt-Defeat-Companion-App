<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div v-for="quiz in quizzes" class="md:flex md:items-center md:justify-between ml-9 mb-5">
    <QuizModules :quiz="quiz" />
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import {GET_SCHEDULE} from "~/graphql/users";

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

const { data } = await useAsyncQuery(GET_SCHEDULE, {
  filters: {
    program: {
      cohort: {
        users: {
          username: {
            eq: "joeJohnson"
          }
        }
      }
    }
  }
})

console.log(data)

</script>