<template>
  <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <div class="flex justify-center">
      <NuxtImg src="http://127.0.0.1:1337/uploads/logo_feaa7823fa.png" />
        </div>
    </div>
      <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form @submit.prevent="handleSubmit()" class="space-y-6" action="#" method="POST">
          <div>
            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Username</label>
            <div class="mt-2">
              <input v-model="form.identifier" id="username" name="username" type="text" required=""
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>

          <div>
            <div class="flex items-center justify-between">
              <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              <div class="text-sm">
                <a href="#" class="font-semibold text-dark-green hover:text-light-green">Forgot password?</a>
              </div>
            </div>
            <div class="mt-2">
              <input v-model="form.password" id="password" name="password" type="password"
                     autocomplete="current-password"
                     required=""
                     class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
          </div>
          <div>
            <button type="submit"
                    class="flex w-full justify-center rounded-md bg-dark-green px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-dark-green-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Sign in
            </button>
          </div>
        </form>
      </div>
  </div>
</template>
<script setup lang="ts">
import {MUTATION_LOGIN} from "~/graphql/users";

const {onLogin, onLogout} = useApollo()
import {reactive} from 'vue';

const form = reactive({
  identifier: '',
  password: ''
})


async function handleSubmit() {
  const {mutate, onError} = useMutation(MUTATION_LOGIN)
  try {
    const response = await mutate({input: form})
    const token = response?.data?.login?.jwt
    if (typeof token == 'string') {
      await onLogin(token)
      await navigateTo({path: '/alerts'})
    }
  } catch (e) {
    console.log(e)
  }
}
</script>