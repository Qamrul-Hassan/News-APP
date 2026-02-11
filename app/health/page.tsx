import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function HealthPage() {
  const articles = await fetchTopHeadlines({ category: "health", pageSize: 12 });

  return (
    <NewsPage
      title="Health"
      subtitle="Public health, medicine, and clinical breakthroughs from trusted sources."
      icon="Health"
      articles={articles}
      accent="emerald"
      emptyMessage="No health headlines are available at the moment."
      sectionTags={["Public Health", "Medicine", "Research"]}
    />
  );
}
