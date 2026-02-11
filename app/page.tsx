import NewsPage from "./components/NewsPage";
import { fetchTopHeadlines } from "./lib/news";

export const revalidate = 0;

export default async function HomePage() {
  const articles = await fetchTopHeadlines({ pageSize: 9 });

  return (
    <NewsPage
      title="Latest Headlines"
      subtitle="Real-time international coverage across world affairs, business, politics, technology, health, and sports."
      icon="Live"
      articles={articles}
      accent="blue"
      emptyMessage="No news articles are available right now."
      sectionTags={["World", "Business", "Technology", "Health", "Sports"]}
    />
  );
}
