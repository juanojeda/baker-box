import { Recipe } from "../types";

export const recipes: Recipe[] = [
  {
    id: "000",
    name: "Rye/Spelt Sourdough Batard (80%)",
    ingredients: [
      {
        ingredient: { name: "Rye flour", isFlour: true, isWater: false },
        weight: 100
      }
    ],
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
];
