import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function BusinessPage() {
  const articles = await fetchTopHeadlines({ category: "business", pageSize: 12 });

  return (
    <NewsPage
      title="Business"
      subtitle="Markets, corporate strategy, startups, and macroeconomic developments worldwide."
      icon="Markets"
      articles={articles}
      accent="emerald"
      emptyMessage="No business headlines are available at the moment."
      sectionTags={["Markets", "Economy", "Companies"]}
    />
  );
}
