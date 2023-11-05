import {ME} from "~/graphql/users";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authToken = useCookie('apollo:default.token')
    if (authToken.value && to.path === '/')
        return navigateTo('/alerts', {redirectCode: 301})
    if (!authToken.value && to.path !== '/')
        return navigateTo('/', {redirectCode: 301})
});
