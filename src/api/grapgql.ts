import { type TypedDocumentString } from "@/gql/graphql";

type GraphQLResponse<T> =
	| { data?: undefined; errors: { message: string }[] }
	| { data: T; errors?: undefined };

// export const executeGraphql = async <TResult, TVariables>(
// 	query: TypedDocumentString<TResult, TVariables>,
// 	...[variables]: TVariables extends Record<string, never> ? [] : [TVariables]
// ): Promise<TResult> => {
export const executeGraphql = async <TResult, TVariables>({
	query,
	variables,
	next,
	cache,
}: {
	query: TypedDocumentString<TResult, TVariables>;
	variables?: TVariables;
	next?: NextFetchRequestConfig;
	cache?: RequestCache;
}): Promise<TResult> => {
	if (!process.env.GRAPHQL_URL) {
		throw TypeError("GRAPHQL_URL is not defined");
	}

	if (!process.env.HYGRAPH_MUTATION_TOKEN) {
		throw TypeError("HYGRAPH_MUTATION_TOKEN is not defined");
	}

	const res = await fetch(process.env.GRAPHQL_URL, {
		method: "POST",
		body: JSON.stringify({
			query,
			variables,
		}),
		headers: {
			"Content-Type": "application/json",
			Authorization: `Bearer ${process.env.HYGRAPH_MUTATION_TOKEN}`,
		},
		next,
		cache,
	});

	const graphqlResponse = (await res.json()) as GraphQLResponse<TResult>;

	console.log(graphqlResponse);
	console.log("123");

	if (graphqlResponse.errors) {
		throw TypeError(`GraphQL Error`, {
			cause: graphqlResponse.errors,
		});
	}

	return graphqlResponse.data;
};
