import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function ShareMarketPage() {
  const articles = await fetchTopHeadlines({ query: "share market stock market indices", pageSize: 12 });

  return (
    <NewsPage
      title="Share Market"
      subtitle="Indices, equities, earnings, and daily market movements across global exchanges."
      icon="Stocks"
      articles={articles}
      accent="amber"
      emptyMessage="No share market headlines are available at the moment."
      sectionTags={["Stocks", "Indices", "Earnings"]}
    />
  );
}
