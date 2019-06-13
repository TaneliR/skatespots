import React, { Fragment } from "react";
import Form from "./Form";
import Spots from "./Spots";

export default function Dashboard() {
  return (
    <Fragment>
      <Form />
      <Spots />
    </Fragment>
  );
}
