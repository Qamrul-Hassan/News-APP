import { NewsApiResponse, NewsArticle } from "../types";
import { getFallbackArticles } from "./fallbackNews";

type FetchTopHeadlinesParams = {
  category?: string;
  query?: string;
  pageSize?: number;
  language?: string;
};

const API_BASE = "https://newsapi.org/v2";

function getApiKey(): string | null {
  const apiKey = process.env.NEWS_API_KEY?.trim();
  return apiKey || null;
}

export async function fetchTopHeadlines({
  category,
  query,
  pageSize = 12,
  language = "en",
}: FetchTopHeadlinesParams = {}): Promise<NewsArticle[]> {
  const apiKey = getApiKey();
  if (!apiKey) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("NEWS_API_KEY is not configured. Using fallback article list.");
    }
    return getFallbackArticles({ category, query, pageSize });
  }

  const endpoint = query ? "everything" : "top-headlines";
  const searchParams = new URLSearchParams({
    apiKey,
    pageSize: String(pageSize),
  });

  if (query) {
    searchParams.set("q", query);
    searchParams.set("sortBy", "publishedAt");
    searchParams.set("language", language);
  } else {
    searchParams.set("language", language);
    if (category) {
      searchParams.set("category", category);
    }
  }

  const response = await fetch(`${API_BASE}/${endpoint}?${searchParams.toString()}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(`NewsAPI request failed (${response.status}). Using fallback article list.`);
    }
    return getFallbackArticles({ category, query, pageSize });
  }

  const data = (await response.json()) as NewsApiResponse;

  if (!data.articles) {
    return getFallbackArticles({ category, query, pageSize });
  }

  const articles = data.articles.filter((article) => Boolean(article?.url));
  return articles.length > 0 ? articles : getFallbackArticles({ category, query, pageSize });
}
