export function formatDate(date: string | Date) {
  const d = date instanceof Date ? date : new Date(date);
  return Intl.DateTimeFormat("en-UK", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  }).format(d);
}
