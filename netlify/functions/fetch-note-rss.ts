import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import axios from "axios";
import xml2js from "xml2js";

const NOTE_RSS = "https://note.com/yonemoto/rss";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  try {
    const response = await axios.get(NOTE_RSS);
    const result = await xml2js.parseStringPromise(response.data);
    return {
      statusCode: 200,
      body: JSON.stringify(result),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: "RSSの取得に失敗しました",
    };
  }
};

export { handler };
