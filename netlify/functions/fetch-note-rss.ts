import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from "axios";
import xml2js from "xml2js";
import { config } from "dotenv";

config();

// 環境変数のチェック
if (!process.env.ALLOWED_ORIGIN || !process.env.RSS_URL) {
  throw new Error("環境変数が設定されていません");
}

// 設定値
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "undefined";
const RSS_URL = process.env.RSS_URL;
const HEADERS = {
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "GET",
  "Content-Type": "application/json",
};

/**
 * RSS フィードを取得し、JSON形式で返却するNetlify Function
 * @param event - NetlifyのHandlerEvent
 * @param context - NetlifyのHandlerContext
 * @returns レスポンスオブジェクト
 */
const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  // CORSの許可
  const origin = event.headers.origin || "undefined";

  if (event.httpMethod !== "GET") {
    return {
      statusCode: 405,
      body: "Method Not Allowed",
    };
  }

  if (origin !== ALLOWED_ORIGIN) {
    return {
      statusCode: 403,
      body: "Unauthorized",
    };
  }

  try {
    // RSSフィードを取得
    const response = await axios.get(RSS_URL);

    // XMLをJSONに変換
    const parsedData = await xml2js.parseStringPromise(response.data);

    return {
      statusCode: 200,
      headers: HEADERS,
      body: JSON.stringify(parsedData),
    };
  } catch (error) {
    console.error("Error fetching RSS:", error);

    return {
      statusCode: 500,
      headers: HEADERS,
      body: "RSSの取得に失敗しました",
    };
  }
};

export { handler };
