import React from "react";
import DescrCard from "../components/DescrCard";

const Description = (props) => {
  const rows = props.data;

  return Object.keys(rows).map((key) => (
    <DescrCard key={key} val={rows[key]} title={key} color={props.color} />
  ));
};

export default Description;
