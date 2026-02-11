import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function AstronomyPage() {
  const articles = await fetchTopHeadlines({ query: "astronomy space telescope", pageSize: 12 });

  return (
    <NewsPage
      title="Astronomy"
      subtitle="Space exploration, observatory discoveries, and astrophysics stories from around the world."
      icon="Space"
      articles={articles}
      accent="blue"
      emptyMessage="No astronomy headlines are available at the moment."
      sectionTags={["Space", "Telescopes", "Research"]}
    />
  );
}
