import React, { ReactElement } from "react";
import { PlaceProp } from "../places";
import Marker from "../marker";

function PlaceInformation(place: PlaceProp): ReactElement {
  return (
    <>
      <Marker key={place.id} lat={place.lat} lng={place.lng} />
    </>
  );
}

export default PlaceInformation;
