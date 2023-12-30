export function Book({ children }: { children: Element | Element[] }) {
  return (
    <div class="relative w-[min(48rem,100%)] aspect-[2/1] book-parent">
      {children}
    </div>
  );
}
