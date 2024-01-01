import { createMemo } from "solid-js";
import type { BlogMeta } from "src/lib/schema";
import { cn } from "src/lib/utils";
import { currentPageSignal } from "./book-signal";

export function BookPage({
  meta,
  page,
  children,
}: {
  meta: BlogMeta;
  page: number;
  children: Element;
}) {
  const [currentPage] = currentPageSignal;
  const isLeftPage = createMemo(() => page % 2 === 1);

  const stack = createMemo<{
    status: "upright" | "flipped";
    offset: number;
  }>(() => {
    /**
     * 7-upright-6 8-upright-2
     * 6-flipped-5 9-flipped-1
     * 5-upright-4 10-upright-0
     * 4-flipped-3
     * 3-upright-2
     * 2-flipped-1
     * 1-upright-0
     */

    const max = meta.maxPages;
    return isLeftPage()
      ? // is flipped when doesn't reach the page yet
        currentPage() < page
        ? // is flipped down
          {
            status: "flipped",
            offset: max - page,
          }
        : // is upright
          {
            status: "upright",
            offset: page - 1,
          }
      : // is flipped when already passed the page
      currentPage() > page
      ? // is flipped up
        {
          status: "flipped",
          offset: page - 1,
        }
      : // is upright
        {
          status: "upright",
          offset: max - page,
        };
  });

  const isLeftSide = createMemo(
    () =>
      (isLeftPage() && stack().status === "upright") ||
      (!isLeftPage() && stack().status === "flipped")
  );

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
