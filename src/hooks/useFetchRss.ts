import useSWR, { type SWRResponse } from "swr";

type Article = {
  title: string[];
  link: string[];
  "media:thumbnail": string[];
};

type FetcherResponse = {
  rss: {
    channel: [
      {
        item: Article[];
      }
    ];
  };
};

const fetcher = async (url: string): Promise<Article[]> => {
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  const data: FetcherResponse = await res.json();

  if (Array.isArray(data.rss.channel[0].item)) {
    return data.rss.channel[0].item;
  } else {
    throw new Error("Articles is not an array.");
  }
};

/**
 * useFetchRss はRSSフィードから記事を取得するためのカスタムReactフックです。
 *
 * @returns オブジェクトを返します:
 * - `articles`: `Article`オブジェクトの配列。各オブジェクトは個々の記事を表します。
 * - `error`: エラーが発生した場合はErrorオブジェクト、それ以外はundefined。
 * - `isLoading`: データの読み込み中はtrue、それ以外はfalse。
 */
export const useFetchRss = (): {
  articles: Article[] | undefined;
  error: Error | undefined;
  isLoading: boolean;
} => {
  const { data, error }: SWRResponse<Article[], Error> = useSWR(
    "/.netlify/functions/fetch-note-rss",
    fetcher
  );

  const isLoading = !data && !error;

  return {
    articles: data,
    error,
    isLoading,
  };
};
