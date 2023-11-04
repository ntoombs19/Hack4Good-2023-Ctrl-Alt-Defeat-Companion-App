import {graphql} from "~/types/gql";

export default graphql(`
    query Query($id: ID) {
        usersPermissionsUser(id: $id) {
            data {
                id
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