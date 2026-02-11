import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function PoliticsPage() {
  const articles = await fetchTopHeadlines({ query: "global politics", pageSize: 12 });

  return (
    <NewsPage
      title="Politics"
      subtitle="Government, elections, legislation, and international policy coverage."
      icon="Politics"
      articles={articles}
      accent="amber"
      emptyMessage="No politics headlines are available at the moment."
      sectionTags={["Elections", "Policy", "Government"]}
    />
  );
}
