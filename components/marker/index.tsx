import React, { ReactElement } from "react";
import styles from "./marker.module.scss";

interface MarkerProp {
  lat: number;
  lng: number;
}

function Marker({}: MarkerProp): ReactElement {
  return (
    <>
      <div className={styles.markerContainer}></div>
    </>
  );
}

export default Marker;
