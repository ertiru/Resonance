import React from "react";

const Tekst = ({ heading, heading2, spec, spec2, spec3 }) => {
  return (
    <div className="teksti">
      <div className="container">
        <h1>{heading}</h1>
        <h2>{heading2}</h2>

        <p>{spec}</p>
        <p className="spec2">{spec2}</p>
        <p className="spec3">{spec3}</p>
      </div>
    </div>
  );
};

export default Tekst;
