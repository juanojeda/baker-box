import { styled } from "@linaria/react";
import { Text } from "./components/Text";

const recipes: Recipe[] = [
  {
    id: "000",
    name: "Rye/Spelt Sourdough Batard (80%)",
    ingredients: [[{ name: "Rye flour", isFlour: true, isWater: false }, 100]],
    notes: []
  },
  {
    id: "001",
    name: "Rye Sourdough Batard (80%)",
    ingredients: [[{ name: "Rye flour", isFlour: true, isWater: false }, 100]],
    notes: []
  },
  {
    id: "002",
    name: "Spelt Sourdough Batard (80%)",
    ingredients: [[{ name: "Rye flour", isFlour: true, isWater: false }, 100]],
    notes: []
  }
]

const RecipeList = () => {
  return (
    <div>
      {recipes.map(({ id, name }) => <div key={id}><Text fontStyle="subhead1" as="a">{name}</Text></div>)}
    </div>
  );
}

export default RecipeList;
