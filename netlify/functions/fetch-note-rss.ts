import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from "axios";
import xml2js from "xml2js";

// RSSフィードのURL
const NOTE_RSS = "https://note.com/yonemoto/rss";

/**
 * Netlify Functionのハンドラー
 * @param event - NetlifyのHandlerEventオブジェクト
 * @param context - NetlifyのHandlerContextオブジェクト
 * @returns レスポンスオブジェクト
 */
const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    // RSSフィードを取得
    const response = await axios.get(NOTE_RSS);

    // XMLをJSONに変換
    const result = await xml2js.parseStringPromise(response.data);

    // 成功レスポンスを返す
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.error("Error fetching RSS:", error); // エラーログを出力

    // エラーレスポンスを返す
    return {
      statusCode: 500,
      body: "RSSの取得に失敗しました",
    };
  }
};

export { handler };
