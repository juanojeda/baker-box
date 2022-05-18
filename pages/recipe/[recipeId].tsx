import Head from "next/head";
import { useRouter } from "next/router";
import { Layout } from "../../components/Layout";
import RecipeDetail from "../../containers/RecipeDetail";

export default function RecipeDetailPage() {

  const { query: { recipeId } } = useRouter();

  return (
    <Layout>
      <Head>
        <title>Recipe Detail: {recipeId}</title>
      </Head>
      <RecipeDetail />
    </Layout>
  );
}
