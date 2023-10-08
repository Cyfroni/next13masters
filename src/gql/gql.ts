/* eslint-disable */
import * as types from './graphql';



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
    "query CollectionGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}\n\nquery CollectionGetById($id: ID!) {\n  collection(where: {id: $id}) {\n    id\n    name\n    slug\n    description\n  }\n}": types.CollectionGetListDocument,
    "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}\n\nquery ProductsGetList($skip: Int!) {\n  products(first: 4, skip: $skip) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetListByCategory($slug: String!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: 2, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}": types.ProductListItemFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query CollectionGetList {\n  collections {\n    id\n    name\n    slug\n  }\n}\n\nquery CollectionGetById($id: ID!) {\n  collection(where: {id: $id}) {\n    id\n    name\n    slug\n    description\n  }\n}"): typeof import('./graphql').CollectionGetListDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "fragment ProductListItem on Product {\n  id\n  name\n  description\n  categories(first: 1) {\n    name\n  }\n  images(first: 1) {\n    url\n  }\n  price\n}\n\nquery ProductsGetList($skip: Int!) {\n  products(first: 4, skip: $skip) {\n    ...ProductListItem\n  }\n}\n\nquery ProductsGetListByCategory($slug: String!, $skip: Int!) {\n  categories(where: {slug: $slug}) {\n    products(first: 2, skip: $skip) {\n      ...ProductListItem\n    }\n  }\n}\n\nquery ProductGetById($id: ID!) {\n  product(where: {id: $id}) {\n    ...ProductListItem\n  }\n}"): typeof import('./graphql').ProductListItemFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
