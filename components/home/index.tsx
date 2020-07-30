import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";
import Marker from "../marker";

function Home(): ReactElement {
  const defaultMapProps = {
    center: {
      lat: 41.38,
      lng: 2.17,
    },
    zoom: 11,
  };

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        defaultCenter={defaultMapProps.center}
        defaultZoom={defaultMapProps.zoom}
      >
        <Marker lat={defaultMapProps.center.lat} lng={defaultMapProps.center.lng} text="My Marker" />
      </GoogleMapReact>
    </div>
  );
}

export default Home;
