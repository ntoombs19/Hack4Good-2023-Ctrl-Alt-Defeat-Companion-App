import { jwtDecode } from "jwt-decode";

export function getUserId() {
  const authToken = useCookie('apollo:default.token')
  if (typeof authToken?.value === 'string') {
    return jwtDecode(authToken.value).id ?? 0
  }
  return 0
}
