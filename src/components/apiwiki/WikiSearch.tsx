import React from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import FullDogList from "../apidogs/FullDogList";
const WikiSearch = () => {
  const location = useLocation();  
  let resultItem = location.state;
  let sURL: string 

  useEffect(() => {
 
    if (resultItem.includes("-")) {
      sURL ="https://en.wikipedia.org/w/index.php?fulltext=1&search=" + resultItem.replace("-", "+") + "&title=Special%3ASearch&ns0=1"   
    }
    else{
      sURL = "https://en.wikipedia.org/wiki/" + resultItem.replace("-", "_")
    }
    window.open(     
     sURL
    );
  }, [resultItem]);

  return <FullDogList />;
};

export default WikiSearch;
