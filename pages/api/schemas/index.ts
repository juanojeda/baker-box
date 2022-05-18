import { gql } from "apollo-server-micro";

export const typeDefs = gql`
  type Ingredient {
    name: String
    isFlour: Boolean
    isWater: Boolean
  }

  type IngredientWithQty {
    ingredient: Ingredient
    weight: Float
  }

  type Recipe {
    id: ID
    name: String
    ingredients: [IngredientWithQty]
    notes: [String]
  }

  type Query {
    getRecipes: [Recipe]
    getRecipeById(id: ID!): Recipe!
  }
`;
