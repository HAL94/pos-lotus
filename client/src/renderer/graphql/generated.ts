import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  UserPayload: any;
};

export type CredentialsInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type LogoutResponse = {
  __typename?: 'LogoutResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type MeResponse = {
  __typename?: 'MeResponse';
  success: Scalars['Boolean'];
  user: Scalars['UserPayload'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createTask: Task;
  login: LoginResponse;
  refreshToken: RefreshResponse;
  register: RegisterResponse;
};


export type MutationCreateTaskArgs = {
  title: Scalars['String'];
};


export type MutationLoginArgs = {
  LoginInput: CredentialsInput;
};


export type MutationRegisterArgs = {
  RegisterInput: CredentialsInput;
};

export type Query = {
  __typename?: 'Query';
  logout: LogoutResponse;
  me: MeResponse;
  tasks: Array<Task>;
};

export type RefreshResponse = {
  __typename?: 'RefreshResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message: Scalars['String'];
  success: Scalars['Boolean'];
};

export type Task = {
  __typename?: 'Task';
  created: Scalars['String'];
  id: Scalars['Int'];
  isComplete: Scalars['Boolean'];
  title: Scalars['String'];
  updated: Scalars['String'];
};

export type LoginMutationVariables = Exact<{
  loginInput: CredentialsInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', message: string, success: boolean } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', success: boolean, user: any } };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'LogoutResponse', success: boolean, message: string } };

export type TasksQueryVariables = Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', tasks: Array<{ __typename?: 'Task', id: number, title: string, created: string, updated: string, isComplete: boolean }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CredentialsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"LoginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>;
export const TasksDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"tasks"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"isComplete"}}]}}]}}]} as unknown as DocumentNode<TasksQuery, TasksQueryVariables>;