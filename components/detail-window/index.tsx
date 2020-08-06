import React, { ReactElement } from "react";
import { PlaceProp } from "../places";
import styles from "./detail-window.module.scss";

function DetailWindow(place: PlaceProp): ReactElement {
  return (
    <div className={styles.detailContainer}>
      <div className={styles.detailHeader}>{place.name}</div>
      <div>{place.address}</div>
    </div>
  );
}

export default DetailWindow;
