import React from "react";
import "../styles/Loaders.css";

const Loader = () => {
  return (
    <div className="lds-spinner">
      <div>uno</div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loader;
