"use server";

import { cookies } from "next/headers";
import { executeGraphql } from "./grapgql";
import { CartCreateDocument } from "@/gql/graphql";

export async function createCartMutation() {
	console.log("createCartMutation");
	console.log(cookies().get("cart"));
	return executeGraphql({ query: CartCreateDocument });
}
