import React, { ReactElement } from "react";
import Marker from "../marker";
import Map from "../map";

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
        <Marker lat={defaultMapProps.center.lat} lng={defaultMapProps.center.lng} />
      </Map>
    </div>
  );
}

export default Home;
