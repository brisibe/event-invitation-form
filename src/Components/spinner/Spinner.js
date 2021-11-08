import React from "react";

const Spinner = () => {
  return (
    <p className="lead mb-4 d-flex justify-content-center">
      <span className="spinner-border" role="status">
        <span className="visually-hidden ">Loading...</span>
      </span>
    </p>
  );
};

export default Spinner;
