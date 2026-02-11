import NewsPage from "../../components/NewsPage";
import { fetchTopHeadlines } from "../../lib/news";

export const revalidate = 0;

export default async function AIPage() {
  const articles = await fetchTopHeadlines({ query: "AI machine learning", pageSize: 12 });

  return (
    <NewsPage
      title="AI and Machine Learning"
      subtitle="Model releases, safety policy, and real-world AI applications across industries."
      icon="AI"
      articles={articles}
      accent="blue"
      emptyMessage="No AI or machine learning stories are available right now."
      sectionTags={["Models", "Policy", "Applications"]}
    />
  );
}
