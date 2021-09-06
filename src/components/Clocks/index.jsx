import React from "react";
import { getTimeZoneDate } from "../../helpers";
import "./styles.scss";

const Clocks = () => {
  return (
    <div className="clocks">
      <div className="clocks__country">
        <span>{getTimeZoneDate("America/Argentina/Buenos_Aires")}</span>
      </div>
      <div className="clocks__country">
        <span>{getTimeZoneDate("Europe/Madrid")}</span>
      </div>
    </div>
  );
};

export default Clocks;
