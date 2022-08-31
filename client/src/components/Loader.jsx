import React from "react";
import { Spinner } from "reactstrap";

export default function Loader() {
  return (
    <div className="Loader">
      <Spinner
        color="warning"
        style={{
          height: "6rem",
          width: "6rem",
        }}
      >
        Loading...
      </Spinner>
    </div>
  );
}
