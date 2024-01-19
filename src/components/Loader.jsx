import React, { useEffect, useState } from "react";
import "../styles/loader.scss";

const Loader = () => {
  const [loading, setLoading] = useState(true);

  return (
    <div
      className="loaderContainer"
      style={{ display: loading ? "flex" : "none" }}
    >
      <div className="loader"></div>
    </div>
  );
};

export default Loader;
