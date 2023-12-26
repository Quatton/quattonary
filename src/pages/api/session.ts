import type { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";
import type { APIRoute } from "astro";
import { notion } from "src/utils/notion";

export const POST: APIRoute = async ({ request, redirect }) => {
  const code = (await request.formData()).get("code");

  if (!code) return redirect("/", 303);

  const database_id = import.meta.env.NOTION_DATABASE_ID;

  if (!database_id) return redirect("/", 303);

  const page = (
    await notion.databases.query({
      database_id,
      filter: { property: "code", rich_text: { equals: code.toString() } },
    })
  ).results[0] as PageObjectResponse;

  if (!page || page.properties.slug.type !== "rich_text")
    return redirect("/", 303);

  const slug = page.properties.slug.rich_text[0].plain_text;

  return redirect(`/hny/${slug}`, 303);
};
