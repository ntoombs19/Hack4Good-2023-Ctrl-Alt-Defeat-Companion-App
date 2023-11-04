import {graphql} from "~/types/gql";

export default graphql(`
    query QueryProfileInfo($filters: UsersPermissionsUserFiltersInput) {
      usersPermissionsUsers(filters: $filters) {
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