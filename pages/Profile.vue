<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div class="p-5">
    <pre>{{data}}</pre>
<!--    <ProfileForm :profile="profile" />-->
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon } from '@heroicons/vue/24/outline'
import { GET_PROFILE_INFO } from '~/graphql/users'
import { getUserId } from "~/helper/getUserId";
const userId = getUserId();
console.log(userId)

const icons = reactive({
  alert: BellAlertIcon,
  help: LifebuoyIcon,
  profile: UserIcon,
  schedule: ClockIcon,
})

const navigation = [
  { name: 'Alerts', href: '/alerts', current: true, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: false, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
]
const { data } = await useAsyncQuery(GET_PROFILE_INFO, { id: userId })
</script>