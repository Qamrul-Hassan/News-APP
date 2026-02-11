import NewsPage from "../../components/NewsPage";
import { fetchTopHeadlines } from "../../lib/news";

export const revalidate = 0;

export default async function BlockchainPage() {
  const articles = await fetchTopHeadlines({ query: "blockchain", pageSize: 12 });

  return (
    <NewsPage
      title="Blockchain"
      subtitle="Protocol upgrades, digital assets, regulation, and enterprise adoption."
      icon="Chain"
      articles={articles}
      accent="emerald"
      emptyMessage="No blockchain stories are available at the moment."
      sectionTags={["Protocols", "Policy", "Markets"]}
    />
  );
}
