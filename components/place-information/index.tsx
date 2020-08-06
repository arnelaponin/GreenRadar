import React, { ReactElement, useState } from "react";
import { PlaceProp } from "../places";
import Marker from "../marker";

function PlaceInformation(place: PlaceProp): ReactElement {
  const [isDetailVisible, setDetailVisible] = useState(false);
  function onClick(): void {
    setDetailVisible(!isDetailVisible);
  }

  return (
    <>
      <Marker key={place.id} lat={place.lat} lng={place.lng} onClick={onClick} />
    </>
  );
}

export default PlaceInformation;
