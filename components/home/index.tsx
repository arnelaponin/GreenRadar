import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
import styles from "./home.module.scss";

function Home(): ReactElement {
  const defaultMapProps = {
    center: {
      lat: 41.38,
      lng: 2.17,
    },
    zoom: 11,
  };

  return (
    <div className={styles.mapcontainer}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      ></GoogleMapReact>
    </div>
  );
}

export default Home;
