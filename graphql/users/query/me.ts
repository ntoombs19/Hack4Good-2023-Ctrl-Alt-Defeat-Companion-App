import {graphql} from "~/types/gql";

export default graphql(`
    query me {
        me {
            id
            email
            username
            role {
                name
            }
        }
    }`)