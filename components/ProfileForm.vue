<template>
  <form @submit.prevent>
    <h2 class="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
    <p class="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>

    <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
      <div class="sm:col-span-3">
        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">First name</label>
        <div class="mt-2">
          <input v-model="profile.firstName" type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Last name</label>
        <div class="mt-2">
          <input v-model="profile.lastName" type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-4">
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
        <div class="mt-2">
          <input v-model="profile.email" id="email" name="email" type="email" autocomplete="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-3">
        <label for="country" class="block text-sm font-medium leading-6 text-gray-900">Country</label>
        <div class="mt-2">
          <select id="country" name="country" autocomplete="country-name" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6">
            <option>United States</option>
            <option>Canada</option>
            <option>Mexico</option>
          </select>
        </div>
      </div>

      <div class="col-span-full">
        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address</label>
        <div class="mt-2">
          <input v-model="profile.addressOne" type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="col-span-full">
        <label for="street-address" class="block text-sm font-medium leading-6 text-gray-900">Street address 2</label>
        <div class="mt-2">
          <input v-model="profile.addressTwo" type="text" name="street-address" id="street-address" autocomplete="street-address" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-2 sm:col-start-1">
        <label for="city" class="block text-sm font-medium leading-6 text-gray-900">City</label>
        <div class="mt-2">
          <input v-model="profile.city" type="text" name="city" id="city" autocomplete="address-level2" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="region" class="block text-sm font-medium leading-6 text-gray-900">State / Province</label>
        <div class="mt-2">
          <input v-model="profile.state" type="text" name="region" id="region" autocomplete="address-level1" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div class="sm:col-span-2">
        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">ZIP / Postal code</label>
        <div class="mt-2">
          <input v-model="profile.zip" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>
      
      <div class="sm:col-span-2">
        <label for="postal-code" class="block text-sm font-medium leading-6 text-gray-900">Employer</label>
        <div class="mt-2">
          <input v-model="profile.employer" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
        </div>
      </div>

      <div>
        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Home/Cell Phone</label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" autocomplete="country" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input v-model="profile.mainPhone" type="text" name="phone-number" id="phone-number" class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543" />
        </div>
      </div>

      <div>
        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Work Phone</label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" autocomplete="country" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input v-model="profile.workPhone" type="text" name="phone-number" id="phone-number" class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543" />
        </div>
      </div>

      <div>
        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">Other Phone</label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="absolute inset-y-0 left-0 flex items-center">
            <label for="country" class="sr-only">Country</label>
            <select id="country" name="country" autocomplete="country" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
              <option>US</option>
              <option>CA</option>
              <option>EU</option>
            </select>
          </div>
          <input v-model="profile.otherPhone" type="text" name="phone-number" id="phone-number" class="block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543" />
        </div>
      </div>

    </div>

    
      
    <div class="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">

      <div>
        <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email</label>
        <div class="mt-2">
          <input v-model="profile.email" type="email" name="email" id="email" class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="you@example.com" />
        </div>
      </div>

      <div class="w-full rounded overflow-hidden shadow-lg">
        <div class="border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 class="text-lg font-semibold leading-6 text-gray-900">Interested Party</h3>
          <div v-for="party in profile.interestedParties" class="w-full rounded overflow-hidden shadow-lg">
            <div class="mt-3 w-full rounded overflow-hidden shadow-lg">
              <div class="border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div>
                  <div class="mt-3 mb-1 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                    <input v-model="party.name" type="text" name="clientName" id="clientName" autocomplete="clientName" class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Name" />
                  </div>
                  <div class="relative mt-2 rounded-md shadow-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center">
                    <label for="country" class="sr-only">Country</label>
                    <select id="country" name="country" autocomplete="country" class="h-full rounded-md border-0 bg-transparent py-0 pl-3 pr-7 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm">
                      <option>US</option>
                      <option>CA</option>
                      <option>EU</option>
                    </select>
                  </div>
                  <input v-model="party.phone" type="text" name="phone-number" id="phone-number" class="mb-2 block w-full rounded-md border-0 py-1.5 pl-16 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="+1 (555) 987-6543" />
                  </div>
                  <label for="location" class="block text-sm font-medium leading-6 text-gray-900">Role</label>
                  <select id="location" name="location" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                    <option v-for="role in party.role">{{role}}</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <button class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="$emit('addInterestedParty')">Add Interested Party</button>
          </div>
        </div>
      </div>

      <div class="w-full rounded overflow-hidden shadow-lg">
        <div class="border-gray-200 bg-white px-4 py-5 sm:px-6">
          <h3 class="text-lg font-semibold leading-6 text-gray-900">Children</h3>
          <div v-for="child in profile.children" class="w-full rounded overflow-hidden shadow-lg">
            <div class="mt-3 border-gray-200 bg-white px-4 py-5 sm:px-6">
              <div>
                <div class="mt-3 mb-1 flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  <span class="ml-1 mt-2 block text-sm font-medium leading-6 text-gray-900">Name:</span>
                  <input v-model="child.name" type="text" name="childName" id="childName" autocomplete="childName" class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" placeholder="Name" />
                  <span class="mt-2 block text-sm font-medium leading-6 text-gray-900">Age:</span>
                  <input v-model="child.age" type="number" id="childAge" name="childAge" step="1" class="flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6">
                </div>
                <label for="username" class="block text-sm font-medium leading-6 text-gray-900">DOB</label>
                <div class="mt-2">
                  <input class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6" type="date" id="start" name="trip-start" v-model="child.dob" />
                  <div class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                  </div>
                </div>
                <label for="contactStatus" class="block text-sm font-medium leading-6 text-gray-900">Contact Status</label>
                <select id="contactStatus" name="contactStatus" class="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6">
                  <option v-for="contact in child.contactStatus">{{contact}}</option>
                </select>
              </div>
            </div>
          </div>
          <div class="mt-3">
            <button class="rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" @click="$emit('addChild')">Add Child</button>
          </div>
        </div>
      </div>
      
      <div>
        <label for="price" class="block text-sm font-medium leading-6 text-gray-900">How much do you pay in child support per month?</label>
        <div class="relative mt-2 rounded-md shadow-sm">
          <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <span class="text-gray-500 sm:text-sm">$</span>
          </div>
          <input type="text" v-model="profile.childSupportPerMonth" name="price" id="price" class="block w-full rounded-md border-0 py-1.5 pl-7 pr-12 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="price-currency" />
          <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
            <span class="text-gray-500 sm:text-sm" id="price-currency">USD</span>
          </div>
        </div>
      </div>
    </div>    
  </form>
</template>

<script setup>
import { UserCircleIcon } from '@heroicons/vue/24/solid'
import { ref } from 'vue'

const props = defineProps(['profile'])

</script>