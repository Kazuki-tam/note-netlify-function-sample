import axios from "axios";
import xml2js from "xml2js";

/**
 * RSSデータを指定されたURLから非同期にフェッチし、JSON形式に変換して返します。
 * @param RSS_URL - フェッチするRSSデータのURL
 * @returns パースされたJSONデータ。フェッチまたはパースに失敗した場合はnull。
 */
export const fetchNoteRss = async (RSS_URL: string): Promise<any | null> => {
  try {
    const response = await axios.get(RSS_URL);
    const parsedData = await xml2js.parseStringPromise(response.data);
    return parsedData;
  } catch (error) {
    console.error("Error fetching RSS:", error);
    return null;
  }
};
