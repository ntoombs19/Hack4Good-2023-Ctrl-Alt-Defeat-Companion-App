import {graphql} from "~/types/gql";

export default graphql(`
    query QueryQuizResultsForUser($filters: QuizResultFiltersInput) {
            quizResults(filters: $filters) {
                data {
                    attributes {
                        completed
                        quiz {
                            data {
                                id
                                attributes {
                                    name
                                }
                            }
                        }
                        users_permissions_user {
                            data {
                                id
                                attributes {
                                    username
                                }
                            }
                        }
                    }
                }
            }
        }
    `)