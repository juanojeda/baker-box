import { recipes } from "../../../data/recipesMock";

export const resolvers = {
  Query: {
    getRecipes: async () => {
      return recipes;
    },
    getRecipeById: async (_: any, args: { id: string }) => {
      const allRecipes = recipes;

      const recipe = allRecipes.find(({ id }) => {
        return id === args.id;
      });

      console.log(recipe);

      return recipe;
    }
  }
};
