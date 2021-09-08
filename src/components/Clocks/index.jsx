import React from "react";
import { getTimeZoneDate } from "../../helpers";
import "./styles.scss";

import Arg from "../../assets/argentina.svg?component";
import Spain from "../../assets/spain.svg?component";

const Clocks = () => {
  return (
    <div className="clocks">
      <div className="clocks__country">
        <span>{getTimeZoneDate("America/Argentina/Buenos_Aires")}</span>
        <Arg width={20} size={20} style={{ width: "100px" }} />
      </div>
      <div className="clocks__country">
        <span>{getTimeZoneDate("Europe/Madrid")}</span>
        <Spain className="clocks__flag" />
      </div>
    </div>
  );
};

export default Clocks;
