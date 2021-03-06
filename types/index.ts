import { Palette } from "../constants/palette";

export interface Ingredient {
  name: string;
  isFlour: boolean;
  isWater: boolean;
}
type WeightInGrams = number;

export interface IngredientWithQty {
  ingredient: Ingredient;
  weight: WeightInGrams;
}

type Note = string;

export interface Recipe {
  id: string;
  name: string;
  ingredients: IngredientWithQty[];
  notes: Note[];
}

export interface FontStyle {
  font: string;
  fontWeight: string;
  fontSize: string;
  lineHeight: string;
  letterSpacing: string;
}

export interface Theme {
  colors: {
    light: {
      [colorKey: string]: Palette;
    };
    dark: {
      [colorKey: string]: Palette;
    };
  };
  spacing: {
    gridSize: number;
    minUnit: number;
    maxUnit: number;
  };
  typography: {
    [fontKey: string]: FontStyle;
  };
}
