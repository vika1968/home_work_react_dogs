import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import FullDogList from "../apidogs/FullDogList";
const WikiSearch = () => {
  const location = useLocation();
  const resultItem = location.state;

  useEffect(() => {
    wikiSearchAPI(resultItem).then((result) => {
      let url: any = displayResultWikiSearch(result.query.search[0].pageid);

      window.open(url);
    });
  }, [resultItem]);

  return <FullDogList />;
};

async function wikiSearchAPI(searchedBreed: any) {
  try {
    const url =
      "https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&inprop=url&utf8=&format=json&origin=*&srlimit=1&srsearch=" +
      searchedBreed.replace("-", "_");

    const res = await fetch(url);

    if (!res.ok) {
      throw Error(res.statusText);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

function displayResultWikiSearch(searchResult: any) {
  const url = `https://en.wikipedia.org/?curid=${searchResult}`;
  return url;
}

export default WikiSearch;
// --------------------------------------------------------------------------
// ------Gili , very simple way without errors :) and without API :) Worjs fine----
// --------------------------------------------------------------------------


// useEffect(() => {
 
//   if (resultItem.includes("-")) {
//     sURL ="https://en.wikipedia.org/w/index.php?fulltext=1&search=" + resultItem.replace("-", "+") + "&title=Special%3ASearch&ns0=1"   
//   }
//   else{
//     sURL = "https://en.wikipedia.org/wiki/" + resultItem.replace("-", "_")
//   }
//   window.open(     
//    sURL
//   );
// }, [resultItem]);

// return <FullDogList />;
// };

