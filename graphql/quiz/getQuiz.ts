import {graphql} from "~/types/gql";

export default graphql(`
    query QueryQuiz($filters: QuizQuestionAnswerFiltersInput) {
        quizQuestionAnswers(filters: $filters) {
            data {
                attributes {
                    answer
                    isCorrectAnswer
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