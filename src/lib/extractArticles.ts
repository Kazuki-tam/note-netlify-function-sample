/**
 * `Article` タイプは RSS フィードの各記事を表します。
 */
type Article = {
  title: string[];
  link: string[];
  "media:thumbnail": string[];
};

/**
 * `FetcherResponse` タイプは `fetchNoteRss` 関数から返される
 * JSON データの構造を表します。
 */
type FetcherResponse = {
  rss: {
    channel: [
      {
        item: Article[];
      }
    ];
  };
};

/**
 * `extractArticles` 関数は `FetcherResponse` オブジェクトから記事情報を抽出します。
 *
 * @param {FetcherResponse} data - 記事情報が含まれる `FetcherResponse` オブジェクト。
 * @returns {Article[] | null} 抽出された記事の配列。記事が配列として存在しない場合は null。
 */
export const extractArticles = (data: FetcherResponse): Article[] | null => {
  if (Array.isArray(data.rss.channel[0].item)) {
    return data.rss.channel[0].item;
  } else {
    console.error("Articles is not an array.");
    return null;
  }
};
