import { useFormatter } from "next-intl";

export default function formatTime() {
  const format = useFormatter();
  const dateTime = new Date("2020-11-20T10:36:01.516Z");

  // Renders "Nov 20, 2020"
  format.dateTime(dateTime, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  // Renders "11:36 AM"
  format.dateTime(dateTime, { hour: "numeric", minute: "numeric" });
}
