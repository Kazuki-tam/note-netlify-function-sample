import { useEffect, useState } from "react";

interface Article {
  title: string[];
  link: string[];
  "media:thumbnail": string[];
}

/**
 * useFetchRss はRSSフィードから記事を取得するためのカスタムReactフックです。
 *
 * @returns オブジェクトを返します:
 * - `articles`: `Article`オブジェクトの配列。各オブジェクトは個々の記事を表します。
 * - `error`: エラーが発生した場合はErrorオブジェクト、それ以外はnull。
 */
export const useFetchRss = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/.netlify/functions/fetch-note-rss");
        const data = await res.json();

        if (Array.isArray(data.rss.channel[0].item)) {
          setArticles(data.rss.channel[0].item);
        } else {
          throw new Error("articles is not an array.");
        }
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, []);

  return { articles, error };
};
