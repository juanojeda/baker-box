interface Ingredient {
  name: string;
  isFlour: boolean;
  isWater: boolean;
}

type WeightInGrams = number;
type Note = string;

interface Recipe {
  id: string;
  name: string;
  ingredients: [Ingredient, WeightInGrams][];
  notes: Note[];
}
