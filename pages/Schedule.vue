<template>
  <Header class="hidden sm:block" :navigation="navigation" />

  <div class="md:flex md:items-center md:justify-between mt-10 ml-9 mb-5">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Schedule</h2>
    </div>
  </div>
  <div class="ml-10 mr-10">
    <ul role="list" class="divide-y">
      <li v-for="deployment in deployments" :key="deployment.id" class="relative flex items-center space-x-4 py-4">
        <div class="min-w-0 flex-auto">
          <div class="flex items-center gap-x-3">
            <h2 class="min-w-0 text-sm font-semibold leading-6">
              <a :href="deployment.href" class="flex gap-x-2">
                <span class="truncate">{{ deployment.cohort }}</span>
                <span class="text-gray-400">/</span>
                <span class="whitespace-nowrap">{{ deployment.date }}</span>
                <span class="absolute inset-0" />
              </a>
            </h2>
          </div>
          <div class="mt-3 flex items-center gap-x-2.5 text-xs leading-5 text-gray-400">
            <p class="truncate">{{ deployment.time }}</p>
            <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
              <circle cx="1" cy="1" r="1" />
            </svg>
            <p class="whitespace-nowrap">{{ deployment.statusText }}</p>
          </div>
        </div>
        <div :class="[statuses[deployment.status], 'rounded-full flex-none py-1 px-2 text-xs font-medium ring-1 ring-inset']">{{ deployment.status }}</div>
        <ChevronRightIcon class="h-5 w-5 flex-none text-gray-400" v-if="deployment.status === 'Take Quiz'" aria-hidden="true" />
      </li>
    </ul>
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import {GET_SCHEDULE} from '~/graphql/schedule'
import {GET_QUIZ_RESULTS} from "~/graphql/quiz";

import { getUserId } from "~/helper/getUserId";
const userId = getUserId();

const statuses = {
  Upcoming: 'text-gray-500 bg-gray-100/10',
  Completed: 'text-green-400 bg-green-400/10',
}

let deployments = [
  {
    id: 1,
    href: '#',
    cohort: 'Cohort',
    date: 'Tues, Nov 7',
    time: '10:00am',
    status: 'Upcoming',
    statusText: 'Due 01/01/2024',
    description: 'Quiz',
    completed: false,
  },
  {
    id: 2,
    href: '#',
    cohort: 'Cohort',
    date: 'Tues, Oct 31',
    time: '10:00am',
    status: 'Take Quiz',
    statusText: 'Due 01/01/2024',
    description: 'Quiz',
    completed: false,
  },
  {
    id: 3,
    href: '#',
    cohort: 'Cohort',
    date: 'Tues, Oct 24',
    time: '10:00am',
    status: 'Completed',
    statusText: 'Due 01/01/2024',
    completed: true,
  },
  {
    id: 4,
    href: '#',
    cohort: 'Cohort',
    date: 'Tues, Oct 17',
    time: '6:00pm',
    status: 'Completed',
    statusText: 'Due 01/01/2024',
    completed: true,
  },
]

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
  { name: 'Schedule', href: '/schedule', current: true, icon: icons.schedule },
  { name: 'Quizzes', href: '/quizzes', current: false, icon: icons.quizzes },
]

let results = await useAsyncQuery(GET_SCHEDULE);
let scheduleInfo = results.data;
let results2 = await useAsyncQuery(GET_QUIZ_RESULTS, {
  filters: {
    users_permissions_user: {
      username: {
        eq: "joeJohnson"
      }
    }
  }
})
let quizResults = results2.data;
console.log(scheduleInfo);
console.log(quizResults);

deployments = []

for(let i = 1; i < scheduleInfo.value.classes.data.length; i++){
  let status = '';
  let quizCompleted = isQuizCompleted(scheduleInfo.value.classes.data[i].attributes.quiz);

  let scheduleDate = new Date(scheduleInfo.value.classes.data[i].attributes.date);
  let today = new Date();
  let upcomingDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 7);
  let classDate = new Date(scheduleInfo.value.classes.data[i].attributes.date);

  if(quizCompleted){
    status = 'Completed'
  }
  else if(classDate.getTime() > upcomingDate.getTime()){
    status = 'Upcoming';
  }else{
    status = 'Take Quiz';
  }

  deployments.push(
      {
        id: i,
        href: '#',
        cohort: 'Cohort',
        date: scheduleDate.toISOString().split('T')[0],
        time: '10:00am',
        status: status,
        statusText: 'Due ' + scheduleDate.toISOString().split('T')[0],
        description: 'Quiz',
        completed: quizCompleted,
      });

  deployments.sort(function(a, b){
    return new Date(a.date) - new Date(b.date);
  });
}

function isQuizCompleted(quiz){
  var quizName = '';
  if(quiz && quiz.data){
    quizName = quiz.data.attributes.name;
    console.log("Quiz name is " +  quiz.data.attributes.name);
  }
  if(quizResults && quizResults.value){
    for(let i = 0; i < quizResults.value.quizResults.data.length; i++){
      if(quizResults.value.quizResults.data[i].attributes.completed &&
          quizResults.value.quizResults.data[i].attributes.quiz.data.attributes.name == quizName &&
          quizResults.value.quizResults.data[i].attributes.users_permissions_user.data.attributes.username == 'joeJohnson'){
        return true;
      }
    }
  }
  return false;
}


</script>