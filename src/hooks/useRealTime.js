import { useEffect, useState } from "react";
import { format, utcToZonedTime } from "date-fns-tz";

const useRealTime = (timezone) => {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const date = utcToZonedTime(now, timezone);
  const string = format(date, "Pp", { timezone });

  return [string, date];
};

export default useRealTime;
