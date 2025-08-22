import { useFormatter } from "next-intl";

// This function is a placeholder. It should be called from a React component
// where `useFormatter` is available, and the `format` object should be passed
// as an argument along with the date to be formatted.
export function formatTime(
  date: Date,
  format: ReturnType<typeof useFormatter>,
) {
  // Example usage:
  return format.dateTime(date, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
