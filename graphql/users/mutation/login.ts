import {graphql} from "~/types/gql";

export default graphql(`
    mutation login($input: UsersPermissionsLoginInput!) {
        login(input: $input) {
            user {
                email
                id
                role {
                    name
                    type
                    description
                }
                username
            }
            jwt
        }
    }`)