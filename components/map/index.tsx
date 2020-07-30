import React, { ReactElement } from "react";
import GoogleMapReact from "google-map-react";

// eslint-disable-next-line react/prop-types
function Map({ children, ...props }): ReactElement {
  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        //bootstrapURLKeys={{ key: /* YOUR KEY HERE */ }}
        {...props}
      >
        {children}
      </GoogleMapReact>
    </div>
  );
}

export default Map;
