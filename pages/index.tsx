import Head from "next/head";
import RecipeList from "../containers/RecipeList";

export default function Home() {
  return (
    <>
      <Head>
        <title>With Linaria</title>
      </Head>
      <RecipeList />
    </>
  );
}
