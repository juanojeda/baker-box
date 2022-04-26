import { Link } from "./components/Link";
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
      <Text fontStyle="headline3" as="h1">Your recipes</Text>
      {recipes.map(({ id, name }) => <div key={id}>
        <Link to={`#${id}`} title={name}>
          <Text fontStyle="subhead1" as="span">{name}</Text>
        </Link>
      </div>)}
    </div>
  );
}

export default RecipeList;
