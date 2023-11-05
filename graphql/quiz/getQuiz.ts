import {graphql} from "~/types/gql";

export default graphql(`
    query QueryQuiz($filters: QuizQuestionAnswerFiltersInput) {
        quizQuestionAnswers(filters: $filters) {
            data {
                attributes {
                    answer
                    quiz_question {
                        data {
                            attributes {
                                question
                            }
                        }
                    }
                }
            }
        }
    }`)