import Head from "next/head";
import { Layout } from "../components/Layout";
import RecipeList from "../containers/RecipeList";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>With Linaria</title>
      </Head>
      <RecipeList />
    </Layout>
  );
}
