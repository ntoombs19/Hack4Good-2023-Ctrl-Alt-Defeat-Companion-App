import {graphql} from "~/types/gql";

export default graphql(`
    mutation UpdateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {
        updateUsersPermissionsUser(id: $id, data: $data) {
            data {
                attributes {
                    CellPhoneNumber
                    City
                    Employer
                    Ethnicity
                    FirstName
                    HomePhoneNumber
                    LastName
                    MaritalStatus
                    MonthlyChildSupport
                    StreetAddress
                    WorkPhoneNumber
                    Zipcode
                    email
                }
            }
        }
    }`)