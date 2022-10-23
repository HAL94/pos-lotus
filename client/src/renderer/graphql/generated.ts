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

export type Category = {
  __typename?: 'Category';
  created: Scalars['String'];
  id: Scalars['Int'];
  image: Scalars['String'];
  title: Scalars['String'];
  updated: Scalars['String'];
};

export type CreateProductInput = {
  arName: Scalars['String'];
  catId: Scalars['Float'];
  description: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sellingPrice: Scalars['Float'];
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
  createCategory: Category;
  createProduct: Product;
  login: LoginResponse;
  refreshToken: RefreshResponse;
  register: RegisterResponse;
};


export type MutationCreateCategoryArgs = {
  image: Scalars['String'];
  title: Scalars['String'];
};


export type MutationCreateProductArgs = {
  productInput: CreateProductInput;
};


export type MutationLoginArgs = {
  LoginInput: CredentialsInput;
};


export type MutationRegisterArgs = {
  RegisterInput: CredentialsInput;
};

export type Product = {
  __typename?: 'Product';
  arName: Scalars['String'];
  category?: Maybe<Category>;
  created: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['String'];
  image: Scalars['String'];
  name: Scalars['String'];
  price: Scalars['Float'];
  sellingPrice: Scalars['Float'];
  updated: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  categories: Array<Category>;
  logout: LogoutResponse;
  me: MeResponse;
  products: Array<Product>;
  productsByCategory: Array<Product>;
};


export type QueryProductsByCategoryArgs = {
  catId: Scalars['Float'];
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

export type LoginMutationVariables = Exact<{
  loginInput: CredentialsInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginResponse', message: string, success: boolean } };

export type MeQueryVariables = Exact<{ [key: string]: never; }>;


export type MeQuery = { __typename?: 'Query', me: { __typename?: 'MeResponse', success: boolean, user: any } };

export type LogoutQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoutQuery = { __typename?: 'Query', logout: { __typename?: 'LogoutResponse', success: boolean, message: string } };

export type CategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type CategoriesQuery = { __typename?: 'Query', categories: Array<{ __typename?: 'Category', id: number, title: string, created: string, updated: string, image: string }> };

export type GetProductsByCategoryQueryVariables = Exact<{
  catId: Scalars['Float'];
}>;


export type GetProductsByCategoryQuery = { __typename?: 'Query', productsByCategory: Array<{ __typename?: 'Product', id: string, name: string, arName: string, description: string, image: string, price: number, sellingPrice: number }> };

export type GetProductsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetProductsQuery = { __typename?: 'Query', products: Array<{ __typename?: 'Product', id: string, name: string, arName: string, description: string, image: string, price: number, sellingPrice: number }> };


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CredentialsInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"login"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"LoginInput"},"value":{"kind":"Variable","name":{"kind":"Name","value":"loginInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}},{"kind":"Field","name":{"kind":"Name","value":"success"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const MeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"me"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"user"}}]}}]}}]} as unknown as DocumentNode<MeQuery, MeQueryVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]} as unknown as DocumentNode<LogoutQuery, LogoutQueryVariables>;
export const CategoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"categories"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"updated"}},{"kind":"Field","name":{"kind":"Name","value":"image"}}]}}]}}]} as unknown as DocumentNode<CategoriesQuery, CategoriesQueryVariables>;
export const GetProductsByCategoryDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProductsByCategory"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"catId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Float"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"productsByCategory"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"catId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"catId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"}}]}}]}}]} as unknown as DocumentNode<GetProductsByCategoryQuery, GetProductsByCategoryQueryVariables>;
export const GetProductsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetProducts"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"products"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"arName"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"image"}},{"kind":"Field","name":{"kind":"Name","value":"price"}},{"kind":"Field","name":{"kind":"Name","value":"sellingPrice"}}]}}]}}]} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;