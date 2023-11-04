<template>
  <Header class="hidden sm:block" :navigation="navigation" />
  <div class="p-5">
    <!--<pre>{{data}}</pre>-->
    <ProfileForm :profile="profile" />
  </div>
  <MobileNav :navigation="navigation" />
</template>

<script setup>
import { BellAlertIcon, ClockIcon, LifebuoyIcon, UserIcon } from '@heroicons/vue/24/outline'
import { GET_PROFILE_INFO } from '~/graphql/users'

const icons = reactive({
  alert: BellAlertIcon,
  help: LifebuoyIcon,
  profile: UserIcon,
  schedule: ClockIcon,
})

const currentPage = {
  name: "Alerts"
}

const navigation = [
  { name: 'Alerts', href: '/alerts', current: true, icon: icons.alert },
  { name: 'Help', href: '/help', current: false, icon: icons.help },
  { name: 'Profile', href: '/profile', current: false, icon: icons.profile },
  { name: 'Schedule', href: '/schedule', current: false, icon: icons.schedule },
]
const { data } = await useAsyncQuery(GET_PROFILE_INFO, {
  filters: {
    username: {
      eq: "joeJohnson"
    }
  }
})

console.log(data)

let profile = {
  clientName: data.value.usersPermissionsUsers.data[0].attributes.name,
  firstName: data.value.usersPermissionsUsers.data[0].attributes.FirstName,
  lastName: data.value.usersPermissionsUsers.data[0].attributes.LastName,
  date: data.value.usersPermissionsUsers.data[0].attributes.date,
  addressOne: data.value.usersPermissionsUsers.data[0].attributes.StreetAddress,
  addressTwo: '',
  city: data.value.usersPermissionsUsers.data[0].attributes.City,
  state: 'MO',
  zip: data.value.usersPermissionsUsers.data[0].attributes.Zipcode,
  employer: data.value.usersPermissionsUsers.data[0].attributes.Employer,
  mainPhone: data.value.usersPermissionsUsers.data[0].attributes.CellPhoneNumber,
  workPhone: '',
  otherNumber: '',
  email: data.value.usersPermissionsUsers.data[0].attributes.email,
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
    married: data.value.usersPermissionsUsers.data[0].attributes.MaritalStatus == "Married",
    engaged: data.value.usersPermissionsUsers.data[0].attributes.MaritalStatus == "Engaged",
    single: data.value.usersPermissionsUsers.data[0].attributes.MaritalStatus == "Single",
    widowed: data.value.usersPermissionsUsers.data[0].attributes.MaritalStatus == "Widowed"
  },
  ethnicity: {
    americanIndian: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "American Indian or Alaska Native",
    asian: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "Asian",
    black: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "Black or African American",
    hispanic: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "Hispanic or Latino",
    nativeHawaiianIslander: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "Native Hawaiian or Islander",
    white: data.value.usersPermissionsUsers.data[0].attributes.Ethnicity == "White",
  },
  imageUrl: '',
}

</script>