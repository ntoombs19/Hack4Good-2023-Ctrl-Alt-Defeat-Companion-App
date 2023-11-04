import {graphql} from "~/types/gql";

export default graphql(`
    query QuerySchdule($filters: ClassFiltersInput) {
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