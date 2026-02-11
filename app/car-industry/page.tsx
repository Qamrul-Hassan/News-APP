import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function CarIndustryPage() {
  const articles = await fetchTopHeadlines({ query: "automotive electric vehicles car industry", pageSize: 12 });

  return (
    <NewsPage
      title="Car Industry"
      subtitle="Automotive manufacturing, EV transitions, supply chains, and global mobility trends."
      icon="Auto"
      articles={articles}
      accent="emerald"
      emptyMessage="No car industry headlines are available at the moment."
      sectionTags={["Automotive", "EV", "Manufacturing"]}
    />
  );
}
