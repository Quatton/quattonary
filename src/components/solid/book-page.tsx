import type { BlogMeta } from "src/content/config";
import { cn } from "src/lib/utils";

export function BookPage({
  meta,
  page,
  children,
}: {
  meta: BlogMeta;
  page: number;
  children: Element;
}) {
  return (
    <article
      class={cn(
        "rounded-lg absolute prose prose-invert aspect-square bg-neutral-900 p-4 w-1/2 shadow-neutral-950 shadow-lg",
        page % 2 === 1 ? "left-page" : "right-page"
      )}
    >
      {children}
    </article>
  );
}
