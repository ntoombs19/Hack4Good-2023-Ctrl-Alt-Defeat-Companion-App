/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    query Query($id: ID) {\n        usersPermissionsUser(id: $id) {\n            data {\n                id\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }": types.QueryDocument,
    "\n    mutation UpdateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {\n        updateUsersPermissionsUser(id: $id, data: $data) {\n            data {\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }": types.UpdateUsersPermissionsUserDocument,
    "\n    query QueryQuiz($filters: QuizQuestionAnswerFiltersInput) {\n        quizQuestionAnswers(filters: $filters) {\n            data {\n                attributes {\n                    answer\n                    isCorrectAnswer\n                    quiz_question {\n                        data {\n                            attributes {\n                                question\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }": types.QueryQuizDocument,
    "\n    query QueryQuizResultsForUser($filters: QuizResultFiltersInput) {\n            quizResults(filters: $filters) {\n                data {\n                    attributes {\n                        completed\n                        quiz {\n                            data {\n                                id\n                                attributes {\n                                    name\n                                }\n                            }\n                        }\n                        users_permissions_user {\n                            data {\n                                id\n                                attributes {\n                                    username\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    ": types.QueryQuizResultsForUserDocument,
    "\n    query QuerySchedule($filters: ClassFiltersInput) {\n        classes(filters: $filters) {\n            data {\n                attributes {\n                    date\n                    name\n                    description\n                    quiz {\n                        data {\n                            attributes {\n                                name\n                            }\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }": types.QueryScheduleDocument,
    "\n    mutation login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            user {\n                email\n                id\n                role {\n                    name\n                    type\n                    description\n                }\n                username\n            }\n            jwt\n        }\n    }": types.LoginDocument,
    "\n    query me {\n        me {\n            id\n            email\n            username\n            role {\n                name\n            }\n        }\n    }": types.MeDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query Query($id: ID) {\n        usersPermissionsUser(id: $id) {\n            data {\n                id\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query Query($id: ID) {\n        usersPermissionsUser(id: $id) {\n            data {\n                id\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation UpdateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {\n        updateUsersPermissionsUser(id: $id, data: $data) {\n            data {\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }"): (typeof documents)["\n    mutation UpdateUsersPermissionsUser($id: ID!, $data: UsersPermissionsUserInput!) {\n        updateUsersPermissionsUser(id: $id, data: $data) {\n            data {\n                attributes {\n                    CellPhoneNumber\n                    City\n                    Employer\n                    Ethnicity\n                    FirstName\n                    HomePhoneNumber\n                    LastName\n                    MaritalStatus\n                    MonthlyChildSupport\n                    StreetAddress\n                    WorkPhoneNumber\n                    Zipcode\n                    email\n                }\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryQuiz($filters: QuizQuestionAnswerFiltersInput) {\n        quizQuestionAnswers(filters: $filters) {\n            data {\n                attributes {\n                    answer\n                    isCorrectAnswer\n                    quiz_question {\n                        data {\n                            attributes {\n                                question\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query QueryQuiz($filters: QuizQuestionAnswerFiltersInput) {\n        quizQuestionAnswers(filters: $filters) {\n            data {\n                attributes {\n                    answer\n                    isCorrectAnswer\n                    quiz_question {\n                        data {\n                            attributes {\n                                question\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QueryQuizResultsForUser($filters: QuizResultFiltersInput) {\n            quizResults(filters: $filters) {\n                data {\n                    attributes {\n                        completed\n                        quiz {\n                            data {\n                                id\n                                attributes {\n                                    name\n                                }\n                            }\n                        }\n                        users_permissions_user {\n                            data {\n                                id\n                                attributes {\n                                    username\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "): (typeof documents)["\n    query QueryQuizResultsForUser($filters: QuizResultFiltersInput) {\n            quizResults(filters: $filters) {\n                data {\n                    attributes {\n                        completed\n                        quiz {\n                            data {\n                                id\n                                attributes {\n                                    name\n                                }\n                            }\n                        }\n                        users_permissions_user {\n                            data {\n                                id\n                                attributes {\n                                    username\n                                }\n                            }\n                        }\n                    }\n                }\n            }\n        }\n    "];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query QuerySchedule($filters: ClassFiltersInput) {\n        classes(filters: $filters) {\n            data {\n                attributes {\n                    date\n                    name\n                    description\n                    quiz {\n                        data {\n                            attributes {\n                                name\n                            }\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }"): (typeof documents)["\n    query QuerySchedule($filters: ClassFiltersInput) {\n        classes(filters: $filters) {\n            data {\n                attributes {\n                    date\n                    name\n                    description\n                    quiz {\n                        data {\n                            attributes {\n                                name\n                            }\n                            id\n                        }\n                    }\n                }\n            }\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            user {\n                email\n                id\n                role {\n                    name\n                    type\n                    description\n                }\n                username\n            }\n            jwt\n        }\n    }"): (typeof documents)["\n    mutation login($input: UsersPermissionsLoginInput!) {\n        login(input: $input) {\n            user {\n                email\n                id\n                role {\n                    name\n                    type\n                    description\n                }\n                username\n            }\n            jwt\n        }\n    }"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query me {\n        me {\n            id\n            email\n            username\n            role {\n                name\n            }\n        }\n    }"): (typeof documents)["\n    query me {\n        me {\n            id\n            email\n            username\n            role {\n                name\n            }\n        }\n    }"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;