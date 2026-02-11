import NewsPage from "../../components/NewsPage";
import { fetchTopHeadlines } from "../../lib/news";

export const revalidate = 0;

export default async function TechNewsPage() {
  const articles = await fetchTopHeadlines({ query: "technology", pageSize: 12 });

  return (
    <NewsPage
      title="Technology"
      subtitle="Product launches, engineering trends, and platform updates shaping the digital world."
      icon="Tech"
      articles={articles}
      accent="blue"
      emptyMessage="No technology stories are available at the moment."
      sectionTags={["Software", "Hardware", "Cybersecurity"]}
    />
  );
}
