import React, { ReactElement } from "react";
import styles from "./marker.module.scss";

interface MarkerProp {
  lat: number;
  lng: number;
  onClick: () => void;
}

function Marker({ onClick }: MarkerProp): ReactElement {
  return (
    <>
      <div role="button" tabIndex={0} className={styles.markerContainer} onClick={onClick} onKeyDown={onClick}></div>
    </>
  );
}

export default Marker;
