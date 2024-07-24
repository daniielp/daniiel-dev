export function formatDate(date: Date | string) {
  const formatedDate = new Date(date);
  return new Intl.DateTimeFormat("da-DK", { dateStyle: "long" }).format(
    formatedDate,
  );
}
