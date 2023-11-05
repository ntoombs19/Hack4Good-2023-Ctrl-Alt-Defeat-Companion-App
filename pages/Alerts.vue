<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div class="md:flex md:items-center md:justify-between mt-10 ml-9 mb-5">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Alerts</h2>
    </div>
  </div>
  <div class="md:flex md:items-center md:justify-between mt-10 ml-9 mb-5">
    <div class="min-w-0 flex-1">
      <h2 class="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Welcome, Dad!</h2>
    </div>
  </div>
  <ul role="list" class="divide-y divide-gray-100 mx-10">
    <li class="flex justify-between gap-x-6 py-5">
      <div class="flex min-w-0 gap-x-4">
        <div class="min-w-0 flex-auto">
          <p class="text-sm font-semibold leading-6 text-gray-900">No new notifications</p>
          <p class="mt-1 truncate text-xs leading-5 text-gray-500">You're all caught up!</p>
        </div>
      </div>
    </li>
  </ul>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon, NewspaperIcon } from '@heroicons/vue/24/outline'
import {GET_SCHEDULE} from "~/graphql/schedule";

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
  { name: 'Alerts', href: '/alerts', current: true, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: false, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
  { name: 'Quizzes', href: '/quizzes', current: false, icon: icons.quizzes },
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