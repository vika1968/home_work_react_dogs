import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FullDogList from "../apidogs/FullDogList";
const WikiSearch = () => {
  const location = useLocation();  
  let resultItem = location.state;

  useEffect(() => {
    window.open(
      "https://en.wikipedia.org/wiki/" + resultItem.replace("-", "_")
    );
  }, [resultItem]);

  return <FullDogList />;
};

export default WikiSearch;
