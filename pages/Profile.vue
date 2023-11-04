<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div class="p-5">
    <ProfileForm :profile="profile" />
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon } from '@heroicons/vue/24/outline'

const icons = reactive({
  alert: BellAlertIcon,
  help: LifebuoyIcon,
  profile: UserIcon,
  schedule: ClockIcon,
})

const currentPage = {
  name: "Alerts"
}

const profile = {
  clientName: 'Tom Cook',
  date: '',
  addressOne: '',
  addressTwo: '',
  city: '',
  state: 'MO',
  zip: '',
  employer: '',
  mainPhone: '',
  workPhone: '',
  otherNumber: '',
  email: '',
  interestedParty: {
    name: '',
    phone: '',
    role: {
      probationOfficer: '',
      paroleOffice: '',
      caseWorker: ''
    }
  },
  children: [{
    name: '',
    age: '',
    dob: '',
    contact: {
      custody: false,
      visitation: false,
      phone: true,
      none: false,
    }
  }],
  childSupportPerMonth: '',
  maritalStatus: {
    married: false,
    engaged: false,
    single: false,
    widowed: false
  },
  ethnicity: {
    americanIndian: false,
    asian: false,
    black: false,
    hispanic: false,
    nativeHawaiianIslander: false,
    white: false,
  },
  imageUrl: '',
}
const navigation = [
  { name: 'Alerts', href: '/alerts', current: true, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: false, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
]
</script>