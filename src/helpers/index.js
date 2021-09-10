import { getHours } from "date-fns";

export const isNight = (date) => {
  return getHours(date) < 8 || getHours(date) > 23;
};
