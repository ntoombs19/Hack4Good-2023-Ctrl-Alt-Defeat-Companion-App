<template>
  <Header :navigation="navigation" />
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

const profile = ref({
  clientName: 'Tom Cook',
  date: '2018-07-22',
  addressOne: '123 Street Rd',
  addressTwo: 'APT 123',
  city: 'Springfield',
  state: 'MO',
  zip: '65807',
  employer: 'Good Dads',
  mainPhone: '(417) 123-1111',
  workPhone: '(417) 123-2222',
  otherNumber: '(417) 123-3333',
  email: 'your@email.com',
  interestedParty: {
    name: 'John',
    phone: '(417) 123-3333',
    role: [
      'Probation Officer',
      'Parole Officer',
      'Case Worker'
    ]
  },
  children: [{
    name: 'Timmy',
    age: '4',
    dob: '10/1/2019',
    contactStatus: [
      'custody',
      'visitation',
      'phone',
      'none',
    ]
  }],
  childSupportPerMonth: 200,
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
})
const navigation = [
  { name: 'Alerts', href: '/alerts', current: false, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: true, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
]
</script>