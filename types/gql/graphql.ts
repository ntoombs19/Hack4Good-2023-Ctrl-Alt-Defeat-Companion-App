/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Child = {
  __typename?: 'Child';
  FullName?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['String']['output']>;
  childSupport?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Enum_Child_Contact>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChildEntity = {
  __typename?: 'ChildEntity';
  attributes?: Maybe<Child>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChildEntityResponse = {
  __typename?: 'ChildEntityResponse';
  data?: Maybe<ChildEntity>;
};

export type ChildEntityResponseCollection = {
  __typename?: 'ChildEntityResponseCollection';
  data: Array<ChildEntity>;
  meta: ResponseCollectionMeta;
};

export type ChildFiltersInput = {
  FullName?: InputMaybe<StringFilterInput>;
  age?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChildFiltersInput>>>;
  childSupport?: InputMaybe<FloatFilterInput>;
  contact?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateOfBirth?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ChildFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChildFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChildInput = {
  FullName?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['String']['input']>;
  childSupport?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Enum_Child_Contact>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChildRelationResponseCollection = {
  __typename?: 'ChildRelationResponseCollection';
  data: Array<ChildEntity>;
};

export type Class = {
  __typename?: 'Class';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  program?: Maybe<ProgramEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassEntity = {
  __typename?: 'ClassEntity';
  attributes?: Maybe<Class>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClassEntityResponse = {
  __typename?: 'ClassEntityResponse';
  data?: Maybe<ClassEntity>;
};

export type ClassEntityResponseCollection = {
  __typename?: 'ClassEntityResponseCollection';
  data: Array<ClassEntity>;
  meta: ResponseCollectionMeta;
};

export type ClassFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClassFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  program?: InputMaybe<ProgramFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClassInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
};

export type ClassRelationResponseCollection = {
  __typename?: 'ClassRelationResponseCollection';
  data: Array<ClassEntity>;
};

export type Cohort = {
  __typename?: 'Cohort';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  program?: Maybe<ProgramEntityResponse>;
  programs?: Maybe<ProgramRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quizzes?: Maybe<QuizRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type CohortProgramsArgs = {
  filters?: InputMaybe<ProgramFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CohortQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CohortUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CohortEntity = {
  __typename?: 'CohortEntity';
  attributes?: Maybe<Cohort>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CohortEntityResponse = {
  __typename?: 'CohortEntityResponse';
  data?: Maybe<CohortEntity>;
};

export type CohortEntityResponseCollection = {
  __typename?: 'CohortEntityResponseCollection';
  data: Array<CohortEntity>;
  meta: ResponseCollectionMeta;
};

export type CohortFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CohortFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  program?: InputMaybe<ProgramFiltersInput>;
  programs?: InputMaybe<ProgramFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quizzes?: InputMaybe<QuizFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CohortInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  programs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quizzes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Child_Contact {
  Custody = 'Custody',
  None = 'None',
  Phone = 'Phone',
  Visitation = 'Visitation'
}

export enum Enum_Interestedparty_Role {
  CaseWorker = 'Case_Worker',
  ParoleOfficer = 'Parole_Officer',
  ProbationOfficer = 'Probation_Officer'
}

export enum Enum_Userspermissionsuser_Ethnicity {
  AmericanIndianOrAlaskaNative = 'American_Indian_or_Alaska_Native',
  Asian = 'Asian',
  BlackOrAfricanAmerican = 'Black_or_African_American',
  HispanicOrLatino = 'Hispanic_or_Latino',
  NativeHawaiianOrIslander = 'Native_Hawaiian_or_Islander',
  White = 'White'
}

export enum Enum_Userspermissionsuser_Maritalstatus {
  Engaged = 'Engaged',
  LivingWithPartner = 'Living_with_partner',
  Married = 'Married',
  Single = 'Single',
  Widowed = 'Widowed'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Child | Class | Cohort | I18NLocale | InterestedParty | Program | Quiz | QuizQuestion | QuizQuestionAnswer | QuizResult | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type InterestedParty = {
  __typename?: 'InterestedParty';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Enum_Interestedparty_Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type InterestedPartyEntity = {
  __typename?: 'InterestedPartyEntity';
  attributes?: Maybe<InterestedParty>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InterestedPartyEntityResponse = {
  __typename?: 'InterestedPartyEntityResponse';
  data?: Maybe<InterestedPartyEntity>;
};

export type InterestedPartyEntityResponseCollection = {
  __typename?: 'InterestedPartyEntityResponseCollection';
  data: Array<InterestedPartyEntity>;
  meta: ResponseCollectionMeta;
};

export type InterestedPartyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InterestedPartyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InterestedPartyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InterestedPartyFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type InterestedPartyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Enum_Interestedparty_Role>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type InterestedPartyRelationResponseCollection = {
  __typename?: 'InterestedPartyRelationResponseCollection';
  data: Array<InterestedPartyEntity>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createChild?: Maybe<ChildEntityResponse>;
  createClass?: Maybe<ClassEntityResponse>;
  createCohort?: Maybe<CohortEntityResponse>;
  createInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  createProgram?: Maybe<ProgramEntityResponse>;
  createQuiz?: Maybe<QuizEntityResponse>;
  createQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  createQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  createQuizResult?: Maybe<QuizResultEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteChild?: Maybe<ChildEntityResponse>;
  deleteClass?: Maybe<ClassEntityResponse>;
  deleteCohort?: Maybe<CohortEntityResponse>;
  deleteInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  deleteProgram?: Maybe<ProgramEntityResponse>;
  deleteQuiz?: Maybe<QuizEntityResponse>;
  deleteQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  deleteQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  deleteQuizResult?: Maybe<QuizResultEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateChild?: Maybe<ChildEntityResponse>;
  updateClass?: Maybe<ClassEntityResponse>;
  updateCohort?: Maybe<CohortEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  updateProgram?: Maybe<ProgramEntityResponse>;
  updateQuiz?: Maybe<QuizEntityResponse>;
  updateQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  updateQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  updateQuizResult?: Maybe<QuizResultEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  data: ChildInput;
};


export type MutationCreateClassArgs = {
  data: ClassInput;
};


export type MutationCreateCohortArgs = {
  data: CohortInput;
};


export type MutationCreateInterestedPartyArgs = {
  data: InterestedPartyInput;
};


export type MutationCreateProgramArgs = {
  data: ProgramInput;
};


export type MutationCreateQuizArgs = {
  data: QuizInput;
};


export type MutationCreateQuizQuestionArgs = {
  data: QuizQuestionInput;
};


export type MutationCreateQuizQuestionAnswerArgs = {
  data: QuizQuestionAnswerInput;
};


export type MutationCreateQuizResultArgs = {
  data: QuizResultInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteChildArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClassArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCohortArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInterestedPartyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProgramArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizQuestionAnswerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizResultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateChildArgs = {
  data: ChildInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClassArgs = {
  data: ClassInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCohortArgs = {
  data: CohortInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateInterestedPartyArgs = {
  data: InterestedPartyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProgramArgs = {
  data: ProgramInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizArgs = {
  data: QuizInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizQuestionArgs = {
  data: QuizQuestionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizQuestionAnswerArgs = {
  data: QuizQuestionAnswerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizResultArgs = {
  data: QuizResultInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Program = {
  __typename?: 'Program';
  classes?: Maybe<ClassRelationResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProgramClassesArgs = {
  filters?: InputMaybe<ClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProgramEntity = {
  __typename?: 'ProgramEntity';
  attributes?: Maybe<Program>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProgramEntityResponse = {
  __typename?: 'ProgramEntityResponse';
  data?: Maybe<ProgramEntity>;
};

export type ProgramEntityResponseCollection = {
  __typename?: 'ProgramEntityResponseCollection';
  data: Array<ProgramEntity>;
  meta: ResponseCollectionMeta;
};

export type ProgramFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProgramFiltersInput>>>;
  classes?: InputMaybe<ClassFiltersInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  length?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProgramFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProgramFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProgramInput = {
  classes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cohort?: InputMaybe<Scalars['ID']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProgramRelationResponseCollection = {
  __typename?: 'ProgramRelationResponseCollection';
  data: Array<ProgramEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  child?: Maybe<ChildEntityResponse>;
  children?: Maybe<ChildEntityResponseCollection>;
  class?: Maybe<ClassEntityResponse>;
  classes?: Maybe<ClassEntityResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  cohorts?: Maybe<CohortEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  interestedParties?: Maybe<InterestedPartyEntityResponseCollection>;
  interestedParty?: Maybe<InterestedPartyEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  program?: Maybe<ProgramEntityResponse>;
  programs?: Maybe<ProgramEntityResponseCollection>;
  quiz?: Maybe<QuizEntityResponse>;
  quizQuestion?: Maybe<QuizQuestionEntityResponse>;
  quizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  quizQuestionAnswers?: Maybe<QuizQuestionAnswerEntityResponseCollection>;
  quizQuestions?: Maybe<QuizQuestionEntityResponseCollection>;
  quizResult?: Maybe<QuizResultEntityResponse>;
  quizResults?: Maybe<QuizResultEntityResponseCollection>;
  quizzes?: Maybe<QuizEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryChildArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryChildrenArgs = {
  filters?: InputMaybe<ChildFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryClassArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClassesArgs = {
  filters?: InputMaybe<ClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCohortArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCohortsArgs = {
  filters?: InputMaybe<CohortFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInterestedPartiesArgs = {
  filters?: InputMaybe<InterestedPartyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInterestedPartyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProgramArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProgramsArgs = {
  filters?: InputMaybe<ProgramFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionAnswerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionAnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizQuestionsArgs = {
  filters?: InputMaybe<QuizQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizResultArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quiz = {
  __typename?: 'Quiz';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz_questions?: Maybe<QuizQuestionRelationResponseCollection>;
  quiz_results?: Maybe<QuizResultRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type QuizQuiz_QuestionsArgs = {
  filters?: InputMaybe<QuizQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuizQuiz_ResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizEntity = {
  __typename?: 'QuizEntity';
  attributes?: Maybe<Quiz>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizEntityResponse = {
  __typename?: 'QuizEntityResponse';
  data?: Maybe<QuizEntity>;
};

export type QuizEntityResponseCollection = {
  __typename?: 'QuizEntityResponseCollection';
  data: Array<QuizEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<QuizFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz_questions?: InputMaybe<QuizQuestionFiltersInput>;
  quiz_results?: InputMaybe<QuizResultFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz_questions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quiz_results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  quiz_question_answers?: Maybe<QuizQuestionAnswerRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type QuizQuestionQuiz_Question_AnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizQuestionAnswer = {
  __typename?: 'QuizQuestionAnswer';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isCorrectAnswer?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz_question?: Maybe<QuizQuestionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuizQuestionAnswerEntity = {
  __typename?: 'QuizQuestionAnswerEntity';
  attributes?: Maybe<QuizQuestionAnswer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizQuestionAnswerEntityResponse = {
  __typename?: 'QuizQuestionAnswerEntityResponse';
  data?: Maybe<QuizQuestionAnswerEntity>;
};

export type QuizQuestionAnswerEntityResponseCollection = {
  __typename?: 'QuizQuestionAnswerEntityResponseCollection';
  data: Array<QuizQuestionAnswerEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizQuestionAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizQuestionAnswerFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isCorrectAnswer?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizQuestionAnswerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz_question?: InputMaybe<QuizQuestionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizQuestionAnswerInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz_question?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizQuestionAnswerRelationResponseCollection = {
  __typename?: 'QuizQuestionAnswerRelationResponseCollection';
  data: Array<QuizQuestionAnswerEntity>;
};

export type QuizQuestionEntity = {
  __typename?: 'QuizQuestionEntity';
  attributes?: Maybe<QuizQuestion>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizQuestionEntityResponse = {
  __typename?: 'QuizQuestionEntityResponse';
  data?: Maybe<QuizQuestionEntity>;
};

export type QuizQuestionEntityResponseCollection = {
  __typename?: 'QuizQuestionEntityResponseCollection';
  data: Array<QuizQuestionEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizQuestionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizQuestionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizQuestionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizQuestionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  quiz_question_answers?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizQuestionInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
  quiz_question_answers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QuizQuestionRelationResponseCollection = {
  __typename?: 'QuizQuestionRelationResponseCollection';
  data: Array<QuizQuestionEntity>;
};

export type QuizRelationResponseCollection = {
  __typename?: 'QuizRelationResponseCollection';
  data: Array<QuizEntity>;
};

export type QuizResult = {
  __typename?: 'QuizResult';
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  quiz_question_answers?: Maybe<QuizQuestionAnswerRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type QuizResultQuiz_Question_AnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizResultEntity = {
  __typename?: 'QuizResultEntity';
  attributes?: Maybe<QuizResult>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizResultEntityResponse = {
  __typename?: 'QuizResultEntityResponse';
  data?: Maybe<QuizResultEntity>;
};

export type QuizResultEntityResponseCollection = {
  __typename?: 'QuizResultEntityResponseCollection';
  data: Array<QuizResultEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizResultFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizResultFiltersInput>>>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizResultFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizResultFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  quiz_question_answers?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type QuizResultInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
  quiz_question_answers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizResultRelationResponseCollection = {
  __typename?: 'QuizResultRelationResponseCollection';
  data: Array<QuizResultEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  AltContactNumber?: Maybe<Scalars['String']['output']>;
  Approved?: Maybe<Scalars['Boolean']['output']>;
  CellPhoneNumber?: Maybe<Scalars['String']['output']>;
  City?: Maybe<Scalars['String']['output']>;
  ClassLocation?: Maybe<Scalars['String']['output']>;
  DateAccepted?: Maybe<Scalars['Date']['output']>;
  DateEnrolled?: Maybe<Scalars['Date']['output']>;
  DateFormFilledOut?: Maybe<Scalars['Date']['output']>;
  Employer?: Maybe<Scalars['String']['output']>;
  Ethnicity?: Maybe<Enum_Userspermissionsuser_Ethnicity>;
  FirstName?: Maybe<Scalars['String']['output']>;
  HomePhoneNumber?: Maybe<Scalars['String']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  MaritalStatus?: Maybe<Enum_Userspermissionsuser_Maritalstatus>;
  MonthlyChildSupport?: Maybe<Scalars['Float']['output']>;
  StreetAddress?: Maybe<Scalars['String']['output']>;
  WorkPhoneNumber?: Maybe<Scalars['String']['output']>;
  Zipcode?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<ChildRelationResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  interested_parties?: Maybe<InterestedPartyRelationResponseCollection>;
  provider?: Maybe<Scalars['String']['output']>;
  quiz_results?: Maybe<QuizResultRelationResponseCollection>;
  quiz_statuses?: Maybe<QuizResultRelationResponseCollection>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserChildrenArgs = {
  filters?: InputMaybe<ChildFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserInterested_PartiesArgs = {
  filters?: InputMaybe<InterestedPartyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserQuiz_ResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserQuiz_StatusesArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  AltContactNumber?: InputMaybe<StringFilterInput>;
  Approved?: InputMaybe<BooleanFilterInput>;
  CellPhoneNumber?: InputMaybe<StringFilterInput>;
  City?: InputMaybe<StringFilterInput>;
  ClassLocation?: InputMaybe<StringFilterInput>;
  DateAccepted?: InputMaybe<DateFilterInput>;
  DateEnrolled?: InputMaybe<DateFilterInput>;
  DateFormFilledOut?: InputMaybe<DateFilterInput>;
  Employer?: InputMaybe<StringFilterInput>;
  Ethnicity?: InputMaybe<StringFilterInput>;
  FirstName?: InputMaybe<StringFilterInput>;
  HomePhoneNumber?: InputMaybe<StringFilterInput>;
  LastName?: InputMaybe<StringFilterInput>;
  MaritalStatus?: InputMaybe<StringFilterInput>;
  MonthlyChildSupport?: InputMaybe<FloatFilterInput>;
  StreetAddress?: InputMaybe<StringFilterInput>;
  WorkPhoneNumber?: InputMaybe<StringFilterInput>;
  Zipcode?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  children?: InputMaybe<ChildFiltersInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  interested_parties?: InputMaybe<InterestedPartyFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  quiz_results?: InputMaybe<QuizResultFiltersInput>;
  quiz_statuses?: InputMaybe<QuizResultFiltersInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  AltContactNumber?: InputMaybe<Scalars['String']['input']>;
  Approved?: InputMaybe<Scalars['Boolean']['input']>;
  CellPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  City?: InputMaybe<Scalars['String']['input']>;
  ClassLocation?: InputMaybe<Scalars['String']['input']>;
  DateAccepted?: InputMaybe<Scalars['Date']['input']>;
  DateEnrolled?: InputMaybe<Scalars['Date']['input']>;
  DateFormFilledOut?: InputMaybe<Scalars['Date']['input']>;
  Employer?: InputMaybe<Scalars['String']['input']>;
  Ethnicity?: InputMaybe<Enum_Userspermissionsuser_Ethnicity>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  HomePhoneNumber?: InputMaybe<Scalars['String']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  MaritalStatus?: InputMaybe<Enum_Userspermissionsuser_Maritalstatus>;
  MonthlyChildSupport?: InputMaybe<Scalars['Float']['input']>;
  StreetAddress?: InputMaybe<Scalars['String']['input']>;
  WorkPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  Zipcode?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cohort?: InputMaybe<Scalars['ID']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  interested_parties?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  quiz_results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quiz_statuses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};

export type QueryQueryVariables = Exact<{
  id?: InputMaybe<Scalars['ID']['input']>;
}>;


export type QueryQuery = { __typename?: 'Query', usersPermissionsUser?: { __typename?: 'UsersPermissionsUserEntityResponse', data?: { __typename?: 'UsersPermissionsUserEntity', id?: string | null, attributes?: { __typename?: 'UsersPermissionsUser', CellPhoneNumber?: string | null, City?: string | null, Employer?: string | null, Ethnicity?: Enum_Userspermissionsuser_Ethnicity | null, FirstName?: string | null, HomePhoneNumber?: string | null, LastName?: string | null, MaritalStatus?: Enum_Userspermissionsuser_Maritalstatus | null, MonthlyChildSupport?: number | null, StreetAddress?: string | null, WorkPhoneNumber?: string | null, Zipcode?: string | null, email: string } | null } | null } | null };

export type QueryQuizQueryVariables = Exact<{
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
}>;


export type QueryQuizQuery = { __typename?: 'Query', quizQuestionAnswers?: { __typename?: 'QuizQuestionAnswerEntityResponseCollection', data: Array<{ __typename?: 'QuizQuestionAnswerEntity', attributes?: { __typename?: 'QuizQuestionAnswer', answer?: string | null, quiz_question?: { __typename?: 'QuizQuestionEntityResponse', data?: { __typename?: 'QuizQuestionEntity', attributes?: { __typename?: 'QuizQuestion', question?: string | null } | null } | null } | null } | null }> } | null };

export type QuerySchduleQueryVariables = Exact<{
  filters?: InputMaybe<ClassFiltersInput>;
}>;


export type QuerySchduleQuery = { __typename?: 'Query', classes?: { __typename?: 'ClassEntityResponseCollection', data: Array<{ __typename?: 'ClassEntity', attributes?: { __typename?: 'Class', date?: any | null, name?: string | null, description?: string | null, quiz?: { __typename?: 'QuizEntityResponse', data?: { __typename?: 'QuizEntity', id?: string | null, attributes?: { __typename?: 'Quiz', name?: string | null } | null } | null } | null } | null }> } | null };

export type LoginMutationVariables = Exact<{
  input: UsersPermissionsLoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null, user: { __typename?: 'UsersPermissionsMe', email?: string | null, id: string, username: string, role?: { __typename?: 'UsersPermissionsMeRole', name: string, type?: string | null, description?: string | null } | null } } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me?: { __typename?: 'UsersPermissionsMe', id: string, email?: string | null, username: string, role?: { __typename?: 'UsersPermissionsMeRole', name: string } | null } | null };


export const QueryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Query"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"usersPermissionsUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"CellPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"City"}},{"kind":"Field","name":{"kind":"Name","value":"Employer"}},{"kind":"Field","name":{"kind":"Name","value":"Ethnicity"}},{"kind":"Field","name":{"kind":"Name","value":"FirstName"}},{"kind":"Field","name":{"kind":"Name","value":"HomePhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"LastName"}},{"kind":"Field","name":{"kind":"Name","value":"MaritalStatus"}},{"kind":"Field","name":{"kind":"Name","value":"MonthlyChildSupport"}},{"kind":"Field","name":{"kind":"Name","value":"StreetAddress"}},{"kind":"Field","name":{"kind":"Name","value":"WorkPhoneNumber"}},{"kind":"Field","name":{"kind":"Name","value":"Zipcode"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuery, QueryQueryVariables>;
export const QueryQuizDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QueryQuiz"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"QuizQuestionAnswerFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"quizQuestionAnswers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"answer"}},{"kind":"Field","name":{"kind":"Name","value":"quiz_question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"question"}}]}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QueryQuizQuery, QueryQuizQueryVariables>;
export const QuerySchduleDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"QuerySchdule"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"ClassFiltersInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"classes"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"date"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"quiz"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"data"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"attributes"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<QuerySchduleQuery, QuerySchduleQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UsersPermissionsLoginInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"username"}}]}},{"kind":"Field","name":{"kind":"Name","value":"jwt"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}},{"kind":"Field","name":{"kind":"Name","value":"username"}},{"kind":"Field","name":{"kind":"Name","value":"role"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: { input: any; output: any; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `Upload` scalar type represents a file upload. */
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  contains?: InputMaybe<Scalars['Boolean']['input']>;
  containsi?: InputMaybe<Scalars['Boolean']['input']>;
  endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  eq?: InputMaybe<Scalars['Boolean']['input']>;
  eqi?: InputMaybe<Scalars['Boolean']['input']>;
  gt?: InputMaybe<Scalars['Boolean']['input']>;
  gte?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  lt?: InputMaybe<Scalars['Boolean']['input']>;
  lte?: InputMaybe<Scalars['Boolean']['input']>;
  ne?: InputMaybe<Scalars['Boolean']['input']>;
  nei?: InputMaybe<Scalars['Boolean']['input']>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars['Boolean']['input']>;
  notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Boolean']['input']>>>;
  startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Child = {
  __typename?: 'Child';
  FullName?: Maybe<Scalars['String']['output']>;
  age?: Maybe<Scalars['String']['output']>;
  childSupport?: Maybe<Scalars['Float']['output']>;
  contact?: Maybe<Enum_Child_Contact>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  dateOfBirth?: Maybe<Scalars['Date']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ChildEntity = {
  __typename?: 'ChildEntity';
  attributes?: Maybe<Child>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ChildEntityResponse = {
  __typename?: 'ChildEntityResponse';
  data?: Maybe<ChildEntity>;
};

export type ChildEntityResponseCollection = {
  __typename?: 'ChildEntityResponseCollection';
  data: Array<ChildEntity>;
  meta: ResponseCollectionMeta;
};

export type ChildFiltersInput = {
  FullName?: InputMaybe<StringFilterInput>;
  age?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ChildFiltersInput>>>;
  childSupport?: InputMaybe<FloatFilterInput>;
  contact?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  dateOfBirth?: InputMaybe<DateFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ChildFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ChildFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ChildInput = {
  FullName?: InputMaybe<Scalars['String']['input']>;
  age?: InputMaybe<Scalars['String']['input']>;
  childSupport?: InputMaybe<Scalars['Float']['input']>;
  contact?: InputMaybe<Enum_Child_Contact>;
  dateOfBirth?: InputMaybe<Scalars['Date']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ChildRelationResponseCollection = {
  __typename?: 'ChildRelationResponseCollection';
  data: Array<ChildEntity>;
};

export type Class = {
  __typename?: 'Class';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  date?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  program?: Maybe<ProgramEntityResponse>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type ClassEntity = {
  __typename?: 'ClassEntity';
  attributes?: Maybe<Class>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ClassEntityResponse = {
  __typename?: 'ClassEntityResponse';
  data?: Maybe<ClassEntity>;
};

export type ClassEntityResponseCollection = {
  __typename?: 'ClassEntityResponseCollection';
  data: Array<ClassEntity>;
  meta: ResponseCollectionMeta;
};

export type ClassFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  date?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ClassFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ClassFiltersInput>>>;
  program?: InputMaybe<ProgramFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ClassInput = {
  date?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
};

export type ClassRelationResponseCollection = {
  __typename?: 'ClassRelationResponseCollection';
  data: Array<ClassEntity>;
};

export type Cohort = {
  __typename?: 'Cohort';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  location?: Maybe<Scalars['String']['output']>;
  program?: Maybe<ProgramEntityResponse>;
  programs?: Maybe<ProgramRelationResponseCollection>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quizzes?: Maybe<QuizRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type CohortProgramsArgs = {
  filters?: InputMaybe<ProgramFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CohortQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type CohortUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type CohortEntity = {
  __typename?: 'CohortEntity';
  attributes?: Maybe<Cohort>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type CohortEntityResponse = {
  __typename?: 'CohortEntityResponse';
  data?: Maybe<CohortEntity>;
};

export type CohortEntityResponseCollection = {
  __typename?: 'CohortEntityResponseCollection';
  data: Array<CohortEntity>;
  meta: ResponseCollectionMeta;
};

export type CohortFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  location?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<CohortFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<CohortFiltersInput>>>;
  program?: InputMaybe<ProgramFiltersInput>;
  programs?: InputMaybe<ProgramFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quizzes?: InputMaybe<QuizFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type CohortInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  location?: InputMaybe<Scalars['String']['input']>;
  program?: InputMaybe<Scalars['ID']['input']>;
  programs?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quizzes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type DateFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  contains?: InputMaybe<Scalars['Date']['input']>;
  containsi?: InputMaybe<Scalars['Date']['input']>;
  endsWith?: InputMaybe<Scalars['Date']['input']>;
  eq?: InputMaybe<Scalars['Date']['input']>;
  eqi?: InputMaybe<Scalars['Date']['input']>;
  gt?: InputMaybe<Scalars['Date']['input']>;
  gte?: InputMaybe<Scalars['Date']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  lt?: InputMaybe<Scalars['Date']['input']>;
  lte?: InputMaybe<Scalars['Date']['input']>;
  ne?: InputMaybe<Scalars['Date']['input']>;
  nei?: InputMaybe<Scalars['Date']['input']>;
  not?: InputMaybe<DateFilterInput>;
  notContains?: InputMaybe<Scalars['Date']['input']>;
  notContainsi?: InputMaybe<Scalars['Date']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Date']['input']>>>;
  startsWith?: InputMaybe<Scalars['Date']['input']>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  contains?: InputMaybe<Scalars['DateTime']['input']>;
  containsi?: InputMaybe<Scalars['DateTime']['input']>;
  endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  eq?: InputMaybe<Scalars['DateTime']['input']>;
  eqi?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  ne?: InputMaybe<Scalars['DateTime']['input']>;
  nei?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars['DateTime']['input']>;
  notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['DateTime']['input']>>>;
  startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export enum Enum_Child_Contact {
  Custody = 'Custody',
  None = 'None',
  Phone = 'Phone',
  Visitation = 'Visitation'
}

export enum Enum_Interestedparty_Role {
  CaseWorker = 'Case_Worker',
  ParoleOfficer = 'Parole_Officer',
  ProbationOfficer = 'Probation_Officer'
}

export enum Enum_Userspermissionsuser_Ethnicity {
  AmericanIndianOrAlaskaNative = 'American_Indian_or_Alaska_Native',
  Asian = 'Asian',
  BlackOrAfricanAmerican = 'Black_or_African_American',
  HispanicOrLatino = 'Hispanic_or_Latino',
  NativeHawaiianOrIslander = 'Native_Hawaiian_or_Islander',
  White = 'White'
}

export enum Enum_Userspermissionsuser_Maritalstatus {
  Engaged = 'Engaged',
  LivingWithPartner = 'Living_with_partner',
  Married = 'Married',
  Single = 'Single',
  Widowed = 'Widowed'
}

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  contains?: InputMaybe<Scalars['Float']['input']>;
  containsi?: InputMaybe<Scalars['Float']['input']>;
  endsWith?: InputMaybe<Scalars['Float']['input']>;
  eq?: InputMaybe<Scalars['Float']['input']>;
  eqi?: InputMaybe<Scalars['Float']['input']>;
  gt?: InputMaybe<Scalars['Float']['input']>;
  gte?: InputMaybe<Scalars['Float']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  lt?: InputMaybe<Scalars['Float']['input']>;
  lte?: InputMaybe<Scalars['Float']['input']>;
  ne?: InputMaybe<Scalars['Float']['input']>;
  nei?: InputMaybe<Scalars['Float']['input']>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars['Float']['input']>;
  notContainsi?: InputMaybe<Scalars['Float']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Float']['input']>>>;
  startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMorph = Child | Class | Cohort | I18NLocale | InterestedParty | Program | Quiz | QuizQuestion | QuizQuestionAnswer | QuizResult | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  __typename?: 'I18NLocaleEntity';
  attributes?: Maybe<I18NLocale>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  __typename?: 'I18NLocaleEntityResponse';
  data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: 'I18NLocaleEntityResponseCollection';
  data: Array<I18NLocaleEntity>;
  meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  contains?: InputMaybe<Scalars['ID']['input']>;
  containsi?: InputMaybe<Scalars['ID']['input']>;
  endsWith?: InputMaybe<Scalars['ID']['input']>;
  eq?: InputMaybe<Scalars['ID']['input']>;
  eqi?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  ne?: InputMaybe<Scalars['ID']['input']>;
  nei?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars['ID']['input']>;
  notContainsi?: InputMaybe<Scalars['ID']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  contains?: InputMaybe<Scalars['Int']['input']>;
  containsi?: InputMaybe<Scalars['Int']['input']>;
  endsWith?: InputMaybe<Scalars['Int']['input']>;
  eq?: InputMaybe<Scalars['Int']['input']>;
  eqi?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  ne?: InputMaybe<Scalars['Int']['input']>;
  nei?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars['Int']['input']>;
  notContainsi?: InputMaybe<Scalars['Int']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type InterestedParty = {
  __typename?: 'InterestedParty';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phoneNumber?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<Enum_Interestedparty_Role>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type InterestedPartyEntity = {
  __typename?: 'InterestedPartyEntity';
  attributes?: Maybe<InterestedParty>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type InterestedPartyEntityResponse = {
  __typename?: 'InterestedPartyEntityResponse';
  data?: Maybe<InterestedPartyEntity>;
};

export type InterestedPartyEntityResponseCollection = {
  __typename?: 'InterestedPartyEntityResponseCollection';
  data: Array<InterestedPartyEntity>;
  meta: ResponseCollectionMeta;
};

export type InterestedPartyFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<InterestedPartyFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<InterestedPartyFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<InterestedPartyFiltersInput>>>;
  phoneNumber?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type InterestedPartyInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  phoneNumber?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  role?: InputMaybe<Enum_Interestedparty_Role>;
  user?: InputMaybe<Scalars['ID']['input']>;
};

export type InterestedPartyRelationResponseCollection = {
  __typename?: 'InterestedPartyRelationResponseCollection';
  data: Array<InterestedPartyEntity>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  contains?: InputMaybe<Scalars['JSON']['input']>;
  containsi?: InputMaybe<Scalars['JSON']['input']>;
  endsWith?: InputMaybe<Scalars['JSON']['input']>;
  eq?: InputMaybe<Scalars['JSON']['input']>;
  eqi?: InputMaybe<Scalars['JSON']['input']>;
  gt?: InputMaybe<Scalars['JSON']['input']>;
  gte?: InputMaybe<Scalars['JSON']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  lt?: InputMaybe<Scalars['JSON']['input']>;
  lte?: InputMaybe<Scalars['JSON']['input']>;
  ne?: InputMaybe<Scalars['JSON']['input']>;
  nei?: InputMaybe<Scalars['JSON']['input']>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars['JSON']['input']>;
  notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createChild?: Maybe<ChildEntityResponse>;
  createClass?: Maybe<ClassEntityResponse>;
  createCohort?: Maybe<CohortEntityResponse>;
  createInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  createProgram?: Maybe<ProgramEntityResponse>;
  createQuiz?: Maybe<QuizEntityResponse>;
  createQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  createQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  createQuizResult?: Maybe<QuizResultEntityResponse>;
  createUploadFile?: Maybe<UploadFileEntityResponse>;
  createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteChild?: Maybe<ChildEntityResponse>;
  deleteClass?: Maybe<ClassEntityResponse>;
  deleteCohort?: Maybe<CohortEntityResponse>;
  deleteInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  deleteProgram?: Maybe<ProgramEntityResponse>;
  deleteQuiz?: Maybe<QuizEntityResponse>;
  deleteQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  deleteQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  deleteQuizResult?: Maybe<QuizResultEntityResponse>;
  deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateChild?: Maybe<ChildEntityResponse>;
  updateClass?: Maybe<ClassEntityResponse>;
  updateCohort?: Maybe<CohortEntityResponse>;
  updateFileInfo: UploadFileEntityResponse;
  updateInterestedParty?: Maybe<InterestedPartyEntityResponse>;
  updateProgram?: Maybe<ProgramEntityResponse>;
  updateQuiz?: Maybe<QuizEntityResponse>;
  updateQuizQuestion?: Maybe<QuizQuestionEntityResponse>;
  updateQuizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  updateQuizResult?: Maybe<QuizResultEntityResponse>;
  updateUploadFile?: Maybe<UploadFileEntityResponse>;
  updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateChildArgs = {
  data: ChildInput;
};


export type MutationCreateClassArgs = {
  data: ClassInput;
};


export type MutationCreateCohortArgs = {
  data: CohortInput;
};


export type MutationCreateInterestedPartyArgs = {
  data: InterestedPartyInput;
};


export type MutationCreateProgramArgs = {
  data: ProgramInput;
};


export type MutationCreateQuizArgs = {
  data: QuizInput;
};


export type MutationCreateQuizQuestionArgs = {
  data: QuizQuestionInput;
};


export type MutationCreateQuizQuestionAnswerArgs = {
  data: QuizQuestionAnswerInput;
};


export type MutationCreateQuizResultArgs = {
  data: QuizResultInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteChildArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteClassArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteCohortArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteInterestedPartyArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteProgramArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizQuestionArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizQuestionAnswerArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteQuizResultArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: Array<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateChildArgs = {
  data: ChildInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateClassArgs = {
  data: ClassInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateCohortArgs = {
  data: CohortInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateInterestedPartyArgs = {
  data: InterestedPartyInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateProgramArgs = {
  data: ProgramInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizArgs = {
  data: QuizInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizQuestionArgs = {
  data: QuizQuestionInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizQuestionAnswerArgs = {
  data: QuizQuestionAnswerInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateQuizResultArgs = {
  data: QuizResultInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  __typename?: 'Pagination';
  page: Scalars['Int']['output'];
  pageCount: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
  total: Scalars['Int']['output'];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  pageSize?: InputMaybe<Scalars['Int']['input']>;
  start?: InputMaybe<Scalars['Int']['input']>;
};

export type Program = {
  __typename?: 'Program';
  classes?: Maybe<ClassRelationResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  length?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type ProgramClassesArgs = {
  filters?: InputMaybe<ClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type ProgramEntity = {
  __typename?: 'ProgramEntity';
  attributes?: Maybe<Program>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type ProgramEntityResponse = {
  __typename?: 'ProgramEntityResponse';
  data?: Maybe<ProgramEntity>;
};

export type ProgramEntityResponseCollection = {
  __typename?: 'ProgramEntityResponseCollection';
  data: Array<ProgramEntity>;
  meta: ResponseCollectionMeta;
};

export type ProgramFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ProgramFiltersInput>>>;
  classes?: InputMaybe<ClassFiltersInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  length?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ProgramFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ProgramFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ProgramInput = {
  classes?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cohort?: InputMaybe<Scalars['ID']['input']>;
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  length?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type ProgramRelationResponseCollection = {
  __typename?: 'ProgramRelationResponseCollection';
  data: Array<ProgramEntity>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  __typename?: 'Query';
  child?: Maybe<ChildEntityResponse>;
  children?: Maybe<ChildEntityResponseCollection>;
  class?: Maybe<ClassEntityResponse>;
  classes?: Maybe<ClassEntityResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  cohorts?: Maybe<CohortEntityResponseCollection>;
  i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  interestedParties?: Maybe<InterestedPartyEntityResponseCollection>;
  interestedParty?: Maybe<InterestedPartyEntityResponse>;
  me?: Maybe<UsersPermissionsMe>;
  program?: Maybe<ProgramEntityResponse>;
  programs?: Maybe<ProgramEntityResponseCollection>;
  quiz?: Maybe<QuizEntityResponse>;
  quizQuestion?: Maybe<QuizQuestionEntityResponse>;
  quizQuestionAnswer?: Maybe<QuizQuestionAnswerEntityResponse>;
  quizQuestionAnswers?: Maybe<QuizQuestionAnswerEntityResponseCollection>;
  quizQuestions?: Maybe<QuizQuestionEntityResponseCollection>;
  quizResult?: Maybe<QuizResultEntityResponse>;
  quizResults?: Maybe<QuizResultEntityResponseCollection>;
  quizzes?: Maybe<QuizEntityResponseCollection>;
  uploadFile?: Maybe<UploadFileEntityResponse>;
  uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  uploadFolder?: Maybe<UploadFolderEntityResponse>;
  uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryChildArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryChildrenArgs = {
  filters?: InputMaybe<ChildFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryClassArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryClassesArgs = {
  filters?: InputMaybe<ClassFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryCohortArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryCohortsArgs = {
  filters?: InputMaybe<CohortFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInterestedPartiesArgs = {
  filters?: InputMaybe<InterestedPartyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryInterestedPartyArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProgramArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryProgramsArgs = {
  filters?: InputMaybe<ProgramFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionAnswerArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizQuestionAnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizQuestionsArgs = {
  filters?: InputMaybe<QuizQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizResultArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryQuizResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryQuizzesArgs = {
  filters?: InputMaybe<QuizFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Quiz = {
  __typename?: 'Quiz';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz_questions?: Maybe<QuizQuestionRelationResponseCollection>;
  quiz_results?: Maybe<QuizResultRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type QuizQuiz_QuestionsArgs = {
  filters?: InputMaybe<QuizQuestionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type QuizQuiz_ResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizEntity = {
  __typename?: 'QuizEntity';
  attributes?: Maybe<Quiz>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizEntityResponse = {
  __typename?: 'QuizEntityResponse';
  data?: Maybe<QuizEntity>;
};

export type QuizEntityResponseCollection = {
  __typename?: 'QuizEntityResponseCollection';
  data: Array<QuizEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<QuizFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz_questions?: InputMaybe<QuizQuestionFiltersInput>;
  quiz_results?: InputMaybe<QuizResultFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizInput = {
  name?: InputMaybe<Scalars['String']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz_questions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quiz_results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QuizQuestion = {
  __typename?: 'QuizQuestion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  question?: Maybe<Scalars['String']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  quiz_question_answers?: Maybe<QuizQuestionAnswerRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type QuizQuestionQuiz_Question_AnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizQuestionAnswer = {
  __typename?: 'QuizQuestionAnswer';
  answer?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  isCorrectAnswer?: Maybe<Scalars['Boolean']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz_question?: Maybe<QuizQuestionEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type QuizQuestionAnswerEntity = {
  __typename?: 'QuizQuestionAnswerEntity';
  attributes?: Maybe<QuizQuestionAnswer>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizQuestionAnswerEntityResponse = {
  __typename?: 'QuizQuestionAnswerEntityResponse';
  data?: Maybe<QuizQuestionAnswerEntity>;
};

export type QuizQuestionAnswerEntityResponseCollection = {
  __typename?: 'QuizQuestionAnswerEntityResponseCollection';
  data: Array<QuizQuestionAnswerEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizQuestionAnswerFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizQuestionAnswerFiltersInput>>>;
  answer?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  isCorrectAnswer?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizQuestionAnswerFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz_question?: InputMaybe<QuizQuestionFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizQuestionAnswerInput = {
  answer?: InputMaybe<Scalars['String']['input']>;
  isCorrectAnswer?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz_question?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizQuestionAnswerRelationResponseCollection = {
  __typename?: 'QuizQuestionAnswerRelationResponseCollection';
  data: Array<QuizQuestionAnswerEntity>;
};

export type QuizQuestionEntity = {
  __typename?: 'QuizQuestionEntity';
  attributes?: Maybe<QuizQuestion>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizQuestionEntityResponse = {
  __typename?: 'QuizQuestionEntityResponse';
  data?: Maybe<QuizQuestionEntity>;
};

export type QuizQuestionEntityResponseCollection = {
  __typename?: 'QuizQuestionEntityResponseCollection';
  data: Array<QuizQuestionEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizQuestionFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizQuestionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizQuestionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizQuestionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  question?: InputMaybe<StringFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  quiz_question_answers?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type QuizQuestionInput = {
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  question?: InputMaybe<Scalars['String']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
  quiz_question_answers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type QuizQuestionRelationResponseCollection = {
  __typename?: 'QuizQuestionRelationResponseCollection';
  data: Array<QuizQuestionEntity>;
};

export type QuizRelationResponseCollection = {
  __typename?: 'QuizRelationResponseCollection';
  data: Array<QuizEntity>;
};

export type QuizResult = {
  __typename?: 'QuizResult';
  completed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  publishedAt?: Maybe<Scalars['DateTime']['output']>;
  quiz?: Maybe<QuizEntityResponse>;
  quiz_question_answers?: Maybe<QuizQuestionAnswerRelationResponseCollection>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users_permissions_user?: Maybe<UsersPermissionsUserEntityResponse>;
};


export type QuizResultQuiz_Question_AnswersArgs = {
  filters?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type QuizResultEntity = {
  __typename?: 'QuizResultEntity';
  attributes?: Maybe<QuizResult>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type QuizResultEntityResponse = {
  __typename?: 'QuizResultEntityResponse';
  data?: Maybe<QuizResultEntity>;
};

export type QuizResultEntityResponseCollection = {
  __typename?: 'QuizResultEntityResponseCollection';
  data: Array<QuizResultEntity>;
  meta: ResponseCollectionMeta;
};

export type QuizResultFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<QuizResultFiltersInput>>>;
  completed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<QuizResultFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<QuizResultFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  quiz?: InputMaybe<QuizFiltersInput>;
  quiz_question_answers?: InputMaybe<QuizQuestionAnswerFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users_permissions_user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type QuizResultInput = {
  completed?: InputMaybe<Scalars['Boolean']['input']>;
  publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  quiz?: InputMaybe<Scalars['ID']['input']>;
  quiz_question_answers?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  users_permissions_user?: InputMaybe<Scalars['ID']['input']>;
};

export type QuizResultRelationResponseCollection = {
  __typename?: 'QuizResultRelationResponseCollection';
  data: Array<QuizResultEntity>;
};

export type ResponseCollectionMeta = {
  __typename?: 'ResponseCollectionMeta';
  pagination: Pagination;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  containsi?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  eq?: InputMaybe<Scalars['String']['input']>;
  eqi?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  ne?: InputMaybe<Scalars['String']['input']>;
  nei?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars['String']['input']>;
  notContainsi?: InputMaybe<Scalars['String']['input']>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  notNull?: InputMaybe<Scalars['Boolean']['input']>;
  null?: InputMaybe<Scalars['Boolean']['input']>;
  or?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']['output']>;
  caption?: Maybe<Scalars['String']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  ext?: Maybe<Scalars['String']['output']>;
  formats?: Maybe<Scalars['JSON']['output']>;
  hash: Scalars['String']['output'];
  height?: Maybe<Scalars['Int']['output']>;
  mime: Scalars['String']['output'];
  name: Scalars['String']['output'];
  previewUrl?: Maybe<Scalars['String']['output']>;
  provider: Scalars['String']['output'];
  provider_metadata?: Maybe<Scalars['JSON']['output']>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars['Float']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  url: Scalars['String']['output'];
  width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  __typename?: 'UploadFileEntity';
  attributes?: Maybe<UploadFile>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  __typename?: 'UploadFileEntityResponse';
  data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: 'UploadFileEntityResponseCollection';
  data: Array<UploadFileEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  folder?: InputMaybe<UploadFolderFiltersInput>;
  folderPath?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  alternativeText?: InputMaybe<Scalars['String']['input']>;
  caption?: InputMaybe<Scalars['String']['input']>;
  ext?: InputMaybe<Scalars['String']['input']>;
  folder?: InputMaybe<Scalars['ID']['input']>;
  folderPath?: InputMaybe<Scalars['String']['input']>;
  formats?: InputMaybe<Scalars['JSON']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  height?: InputMaybe<Scalars['Int']['input']>;
  mime?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  previewUrl?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  size?: InputMaybe<Scalars['Float']['input']>;
  url?: InputMaybe<Scalars['String']['input']>;
  width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: 'UploadFileRelationResponseCollection';
  data: Array<UploadFileEntity>;
};

export type UploadFolder = {
  __typename?: 'UploadFolder';
  children?: Maybe<UploadFolderRelationResponseCollection>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  files?: Maybe<UploadFileRelationResponseCollection>;
  name: Scalars['String']['output'];
  parent?: Maybe<UploadFolderEntityResponse>;
  path: Scalars['String']['output'];
  pathId: Scalars['Int']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  __typename?: 'UploadFolderEntity';
  attributes?: Maybe<UploadFolder>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  __typename?: 'UploadFolderEntityResponse';
  data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  __typename?: 'UploadFolderEntityResponseCollection';
  data: Array<UploadFolderEntity>;
  meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  children?: InputMaybe<UploadFolderFiltersInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  files?: InputMaybe<UploadFileFiltersInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFolderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFolderFiltersInput>>>;
  parent?: InputMaybe<UploadFolderFiltersInput>;
  path?: InputMaybe<StringFilterInput>;
  pathId?: InputMaybe<IntFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  files?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  name?: InputMaybe<Scalars['String']['input']>;
  parent?: InputMaybe<Scalars['ID']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  __typename?: 'UploadFolderRelationResponseCollection';
  data: Array<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: 'UsersPermissionsCreateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: 'UsersPermissionsDeleteRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars['String']['input'];
  password: Scalars['String']['input'];
  provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']['output']>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  blocked?: Maybe<Scalars['Boolean']['output']>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: 'UsersPermissionsPasswordPayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String']['output'];
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  __typename?: 'UsersPermissionsPermissionEntity';
  attributes?: Maybe<UsersPermissionsPermission>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: 'UsersPermissionsPermissionRelationResponseCollection';
  data: Array<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
  username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  type?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  __typename?: 'UsersPermissionsRoleEntity';
  attributes?: Maybe<UsersPermissionsRole>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  __typename?: 'UsersPermissionsRoleEntityResponse';
  data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: 'UsersPermissionsRoleEntityResponseCollection';
  data: Array<UsersPermissionsRoleEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  type?: InputMaybe<Scalars['String']['input']>;
  users?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: 'UsersPermissionsUpdateRolePayload';
  ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  AltContactNumber?: Maybe<Scalars['String']['output']>;
  Approved?: Maybe<Scalars['Boolean']['output']>;
  CellPhoneNumber?: Maybe<Scalars['String']['output']>;
  City?: Maybe<Scalars['String']['output']>;
  ClassLocation?: Maybe<Scalars['String']['output']>;
  DateAccepted?: Maybe<Scalars['Date']['output']>;
  DateEnrolled?: Maybe<Scalars['Date']['output']>;
  DateFormFilledOut?: Maybe<Scalars['Date']['output']>;
  Employer?: Maybe<Scalars['String']['output']>;
  Ethnicity?: Maybe<Enum_Userspermissionsuser_Ethnicity>;
  FirstName?: Maybe<Scalars['String']['output']>;
  HomePhoneNumber?: Maybe<Scalars['String']['output']>;
  LastName?: Maybe<Scalars['String']['output']>;
  MaritalStatus?: Maybe<Enum_Userspermissionsuser_Maritalstatus>;
  MonthlyChildSupport?: Maybe<Scalars['Float']['output']>;
  StreetAddress?: Maybe<Scalars['String']['output']>;
  WorkPhoneNumber?: Maybe<Scalars['String']['output']>;
  Zipcode?: Maybe<Scalars['String']['output']>;
  blocked?: Maybe<Scalars['Boolean']['output']>;
  children?: Maybe<ChildRelationResponseCollection>;
  cohort?: Maybe<CohortEntityResponse>;
  confirmed?: Maybe<Scalars['Boolean']['output']>;
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['String']['output'];
  interested_parties?: Maybe<InterestedPartyRelationResponseCollection>;
  provider?: Maybe<Scalars['String']['output']>;
  quiz_results?: Maybe<QuizResultRelationResponseCollection>;
  quiz_statuses?: Maybe<QuizResultRelationResponseCollection>;
  role?: Maybe<UsersPermissionsRoleEntityResponse>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  username: Scalars['String']['output'];
};


export type UsersPermissionsUserChildrenArgs = {
  filters?: InputMaybe<ChildFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserInterested_PartiesArgs = {
  filters?: InputMaybe<InterestedPartyFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserQuiz_ResultsArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsUserQuiz_StatusesArgs = {
  filters?: InputMaybe<QuizResultFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  __typename?: 'UsersPermissionsUserEntity';
  attributes?: Maybe<UsersPermissionsUser>;
  id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: 'UsersPermissionsUserEntityResponse';
  data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: 'UsersPermissionsUserEntityResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
  meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  AltContactNumber?: InputMaybe<StringFilterInput>;
  Approved?: InputMaybe<BooleanFilterInput>;
  CellPhoneNumber?: InputMaybe<StringFilterInput>;
  City?: InputMaybe<StringFilterInput>;
  ClassLocation?: InputMaybe<StringFilterInput>;
  DateAccepted?: InputMaybe<DateFilterInput>;
  DateEnrolled?: InputMaybe<DateFilterInput>;
  DateFormFilledOut?: InputMaybe<DateFilterInput>;
  Employer?: InputMaybe<StringFilterInput>;
  Ethnicity?: InputMaybe<StringFilterInput>;
  FirstName?: InputMaybe<StringFilterInput>;
  HomePhoneNumber?: InputMaybe<StringFilterInput>;
  LastName?: InputMaybe<StringFilterInput>;
  MaritalStatus?: InputMaybe<StringFilterInput>;
  MonthlyChildSupport?: InputMaybe<FloatFilterInput>;
  StreetAddress?: InputMaybe<StringFilterInput>;
  WorkPhoneNumber?: InputMaybe<StringFilterInput>;
  Zipcode?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  children?: InputMaybe<ChildFiltersInput>;
  cohort?: InputMaybe<CohortFiltersInput>;
  confirmationToken?: InputMaybe<StringFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  id?: InputMaybe<IdFilterInput>;
  interested_parties?: InputMaybe<InterestedPartyFiltersInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  password?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  quiz_results?: InputMaybe<QuizResultFiltersInput>;
  quiz_statuses?: InputMaybe<QuizResultFiltersInput>;
  resetPasswordToken?: InputMaybe<StringFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  AltContactNumber?: InputMaybe<Scalars['String']['input']>;
  Approved?: InputMaybe<Scalars['Boolean']['input']>;
  CellPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  City?: InputMaybe<Scalars['String']['input']>;
  ClassLocation?: InputMaybe<Scalars['String']['input']>;
  DateAccepted?: InputMaybe<Scalars['Date']['input']>;
  DateEnrolled?: InputMaybe<Scalars['Date']['input']>;
  DateFormFilledOut?: InputMaybe<Scalars['Date']['input']>;
  Employer?: InputMaybe<Scalars['String']['input']>;
  Ethnicity?: InputMaybe<Enum_Userspermissionsuser_Ethnicity>;
  FirstName?: InputMaybe<Scalars['String']['input']>;
  HomePhoneNumber?: InputMaybe<Scalars['String']['input']>;
  LastName?: InputMaybe<Scalars['String']['input']>;
  MaritalStatus?: InputMaybe<Enum_Userspermissionsuser_Maritalstatus>;
  MonthlyChildSupport?: InputMaybe<Scalars['Float']['input']>;
  StreetAddress?: InputMaybe<Scalars['String']['input']>;
  WorkPhoneNumber?: InputMaybe<Scalars['String']['input']>;
  Zipcode?: InputMaybe<Scalars['String']['input']>;
  blocked?: InputMaybe<Scalars['Boolean']['input']>;
  children?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  cohort?: InputMaybe<Scalars['ID']['input']>;
  confirmationToken?: InputMaybe<Scalars['String']['input']>;
  confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  interested_parties?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  password?: InputMaybe<Scalars['String']['input']>;
  provider?: InputMaybe<Scalars['String']['input']>;
  quiz_results?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  quiz_statuses?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['ID']['input']>;
  username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: 'UsersPermissionsUserRelationResponseCollection';
  data: Array<UsersPermissionsUserEntity>;
};
