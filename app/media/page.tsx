import NewsPage from "../components/NewsPage";
import { fetchTopHeadlines } from "../lib/news";

export const revalidate = 0;

export default async function MediaPage() {
  const articles = await fetchTopHeadlines({ query: "media journalism streaming", pageSize: 12 });

  return (
    <NewsPage
      title="Media"
      subtitle="Broadcast, digital platforms, journalism, and global media business developments."
      icon="Media"
      articles={articles}
      accent="blue"
      emptyMessage="No media headlines are available at the moment."
      sectionTags={["Broadcast", "Journalism", "Streaming"]}
    />
  );
}
