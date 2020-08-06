import React, { ReactElement } from "react";
import Map from "../map";
import places from "../places";
import PlaceInformation from "../place-information";

function Home(): ReactElement {
  const defaultMapProps = {
    center: {
      lat: 41.38,
      lng: 2.17,
    },
    zoom: 13,
  };

  return (
    <div>
      <Map defaultCenter={defaultMapProps.center} defaultZoom={defaultMapProps.zoom}>
        {places.map((place) => (
          <PlaceInformation key={place.id} {...place}></PlaceInformation>
        ))}
      </Map>
    </div>
  );
}

export default Home;
