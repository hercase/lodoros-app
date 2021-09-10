import { getHours } from "date-fns";
import { format, utcToZonedTime } from "date-fns-tz";

export const getTimeZoneDate = (timeZone) => {
  if (!timeZone) return "";
  const today = new Date();
  const date = utcToZonedTime(today, timeZone);
  const stringDate = format(date, "Pp", { timeZone });

  return [stringDate, date];
};

export const isNight = (date) => {
  return getHours(date) < 8 || getHours(date) > 23;
};
