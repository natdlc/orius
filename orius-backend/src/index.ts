import { ApolloServer } from "apollo-server-express";
import * as Express from "express";
import { buildSchema } from "graphql";

@Resolver()
class RecipeResolver {
	private recipesCollection: Recipe[] = [];

	@Query((returns) => [Recipe])
	async recipes() {
		return await this.recipesCollection;
	}
}

const main = async () => {
	const schema = await buildSchema({
		resolvers: [FirstResolver, SecondResolver],
	});

	const apolloServer = new ApolloServer({});
};

main();
