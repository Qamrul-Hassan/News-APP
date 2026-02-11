import NewsPage from "../../components/NewsPage";
import { fetchTopHeadlines } from "../../lib/news";

export const revalidate = 0;

export default async function CryptoPage() {
  const articles = await fetchTopHeadlines({ query: "crypto cryptocurrency bitcoin ethereum", pageSize: 12 });

  return (
    <NewsPage
      title="Crypto News"
      subtitle="Bitcoin, Ethereum, regulation, exchanges, and digital-asset market developments."
      icon="Crypto"
      articles={articles}
      accent="amber"
      emptyMessage="No crypto stories are available at the moment."
      sectionTags={["Bitcoin", "Ethereum", "Regulation"]}
    />
  );
}
