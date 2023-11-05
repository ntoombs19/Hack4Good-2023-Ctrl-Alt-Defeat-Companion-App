<template>
  <div class="fixed bottom-0 left-0 z-50 w-full h-16 border-t border-gray-200 bg-dark-green">
    <div class="grid h-full max-w-sm grid-cols-5 mx-auto font-medium">
      <div v-for="item in navigation" :key="item.name" :href="item.href" :class="[item.current ? 'border-indigo-500 text-white' : 'border-transparent text-white hover:border-gray-300 hover:text-gray-700', 'inline-flex items-center border-b-2 pt-1 text-sm font-medium']" :aria-current="item.current ? 'page' : undefined">
        <NuxtLink :to="item.href">
          <button type="button" class="inline-flex flex-col items-center justify-center px-5 hover:bg-dark-green-hover">
            <component class="justify-center w-5 h-5 mb-2 text-white group-hover:text-light-green" :is="item.icon"></component>
            <span class="text-sm text-white group-hover:text-light-green">{{item.name}}</span>
          </button>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon, NewspaperIcon } from '@heroicons/vue/24/outline'

const icons = reactive({
  alert: BellAlertIcon,
  help: LifebuoyIcon,
  profile: UserIcon,
  schedule: ClockIcon,
  quizzes: NewspaperIcon
})

const props = defineProps(['navigation'])
</script>
<style scoped></style>
