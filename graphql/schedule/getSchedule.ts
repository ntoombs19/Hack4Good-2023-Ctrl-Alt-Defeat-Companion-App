import {graphql} from "~/types/gql";

export default graphql(`
    query QuerySchedule($filters: ClassFiltersInput) {
        classes(filters: $filters) {
            data {
                attributes {
                    date
                    name
                    description
                    quiz {
                        data {
                            attributes {
                                name
                            }
                            id
                        }
                    }
                }
            }
        }
    }`)