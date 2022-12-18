import { Client } from "@notionhq/client";
import {
  PageObjectResponse,
  RichTextItemResponse,
} from "node_modules/@notionhq/client/build/src/api-endpoints";

// Initializing a client
export const notion = new Client({
  auth: import.meta.env.NOTION_SECRET,
});

export interface Props {
  slug: RichTextItemResponse;
}
