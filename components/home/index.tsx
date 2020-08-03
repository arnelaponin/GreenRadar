import React, { ReactElement } from "react";
import Marker from "../marker";
import Map from "../map";
import places from "../places";

function Home(): ReactElement {
  const defaultMapProps = {
    center: {
      lat: 41.38,
      lng: 2.17,
    },
    zoom: 11,
  };

  return (
    <div>
      <Map defaultCenter={defaultMapProps.center} defaultZoom={defaultMapProps.zoom}>
        {places.map((place) => (
          <Marker key={place.id} lat={place.lat} lng={place.lng} />
        ))}
      </Map>
    </div>
  );
}

export default Home;
