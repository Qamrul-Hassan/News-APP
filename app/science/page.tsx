import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function SciencePage() {
  const articles = await fetchTopHeadlines({ category: "science", pageSize: 12 });

  return (
    <NewsPage
      title="Science"
      subtitle="Discoveries, peer-reviewed research, and innovation shaping tomorrow."
      icon="Science"
      articles={articles}
      accent="blue"
      emptyMessage="No science headlines are available at the moment."
      sectionTags={["Research", "Innovation", "Climate"]}
    />
  );
}
