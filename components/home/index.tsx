import React, { ReactElement } from "react";
import Map from "../map";
import places from "../places";
import PlaceInformation from "../place-information";
import styles from "./home.module.scss";

function Home(): ReactElement {
  const defaultMapProps = {
    center: {
      lat: 41.38,
      lng: 2.17,
    },
    zoom: 13,
  };

  return (
    <>
      <div className={styles.doubleColumn}>
        <div className={styles.mapColumn}>
          <Map defaultCenter={defaultMapProps.center} defaultZoom={defaultMapProps.zoom}>
            {places.map((place) => (
              <PlaceInformation key={place.id} {...place}></PlaceInformation>
            ))}
          </Map>
        </div>
      </div>
      <div className={styles.column}>
        <div className={styles.formColumn}>
          <div className={styles.formWrapper}>
            <h1>We need you helping filling out this map. Suggest a new initiative!</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
