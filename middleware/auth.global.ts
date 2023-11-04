import {ME} from "~/graphql/users";

export default defineNuxtRouteMiddleware(async (to, from) => {
    const authToken = useCookie('apollo:default.token')
    if (!authToken.value && to.path !== '/') {
        // setting the redirect code to '301 Moved Permanently'
        return navigateTo('/', {redirectCode: 301})
    }
});
