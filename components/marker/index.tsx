import React, { ReactElement } from "react";

interface MarkerProp {
  lat: number;
  lng: number;
  text: string;
}

function Marker({ text }: MarkerProp): ReactElement {
  return <div>{text}</div>;
}

export default Marker;
