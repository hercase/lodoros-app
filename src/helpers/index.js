import { format, utcToZonedTime } from "date-fns-tz";

export const getTimeZoneDate = (timeZone) => {
  if (!timeZone) return "";
  const today = new Date();
  const utcDate = utcToZonedTime(today, timeZone);
  const formatedDate = format(utcDate, "Pp", { timeZone });

  return formatedDate;
};
