import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function WorldPage() {
  const articles = await fetchTopHeadlines({ category: "general", pageSize: 12 });

  return (
    <NewsPage
      title="World"
      subtitle="International headlines from politics, diplomacy, economics, and global affairs."
      icon="World"
      articles={articles}
      accent="blue"
      emptyMessage="No world headlines are available at the moment."
      sectionTags={["Global", "Diplomacy", "Policy"]}
    />
  );
}
