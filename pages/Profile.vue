<template>
  <div class="mb-20">
    <Header :navigation="navigation" />
    <div class="p-5">
      <ProfileForm @add-interested-party="onAddInterestedParty" @add-child="addChild" :profile="profile" />
    </div>
    <button type="button" class="ml-10 rounded-md bg-red-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-600">Log Out</button>
    <MobileNav :navigation="navigation" />
  </div>
</template>

<script setup>
import { BellAlertIcon, NewspaperIcon, ClockIcon, LifebuoyIcon, UserIcon } from '@heroicons/vue/24/outline'
import GET_PROFILE_INFO from '~/graphql/profile/getProfileInfo'
import { getUserId } from "~/helper/getUserId";
const userId = getUserId();
console.log(userId)
const emit = defineEmits(['addChild', 'onAddInterestedParty'])

function buttonClick() {
  emit('addChild')
}

const computedChildrenArray = computed(() => {
  return [...profile.children.value]; // Copy the original array
});

const addChild = () => {
  const newChild = {
    name: '',
    age: '',
    dob: '',
    contactStatus: [],
  };
  profile.value.children.push(newChild);
}

const onAddInterestedParty = () => {
  const newInterestedParty = {
    name: '',
    phone: '',
    role: [
      'Probation Officer',
      'Parole Officer',
      'Case Worker'
    ]
  };
  profile.value.interestedParties.push(newInterestedParty);
}

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

const profile = ref({
  clientName: 'Tom Cook',
  firstName: 'Tom',
  lastName: 'Cook',
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
  interestedParties: [{
    name: 'John',
    phone: '(417) 123-3333',
    role: [
      'Probation Officer',
      'Parole Officer',
      'Case Worker'
    ]
  }],
  children: [{
    name: 'Timmy',
    age: '4',
    dob: '2018-10-01',
    contactStatus: [
      'custody',
      'visitation',
      'phone',
      'none',
    ]
  }],
  childSupportPerMonth: 200,
  maritalStatus: [
    'single',
    'married',
    'engaged',
    'widowed',
  ],
  
  ethnicity: [
    'American Indian',
    'Asian',
    'Black',
    'White',
    'Hispanic',
    'Native Hawaiian / Pacific Islander',
  ]
})
const navigation = [
  { name: 'Alerts', href: '/alerts', current: false, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: true, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
  { name: 'Quizzes', href: '/quizzes', current: false, icon: icons.quizzes },
]
//const { data } = await useAsyncQuery(GET_PROFILE_INFO, { id: userId })
</script>