import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function SportsPage() {
  const articles = await fetchTopHeadlines({ category: "sports", pageSize: 12 });

  return (
    <NewsPage
      title="Sports"
      subtitle="Live match stories, results, and athlete coverage from major competitions worldwide."
      icon="Sports"
      articles={articles}
      accent="amber"
      emptyMessage="No sports headlines are available at the moment."
      sectionTags={["Football", "Cricket", "Basketball"]}
    />
  );
}
