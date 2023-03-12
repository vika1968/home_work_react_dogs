//Child
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";

const OneBreedList = () => {
  const location = useLocation();
  const searcheBreed = location.state;
  const [chosedBreedArray, setchosedBreedArray] = useState([]);
  let urlChosedBreed: string = `/`;

  async function handleShowChosedBreed() {
    try {
      let url: string;
      if (searcheBreed[1] === 1) {
        url = `https://dog.ceo/api/breed/${searcheBreed[0]}/images/random/1`;
      } else {
        url = `https://dog.ceo/api/breed/${searcheBreed[0]}/images/random/${searcheBreed[1]}`;
      }

      const { data } = await axios.get(url);
      const { message } = data;
      setchosedBreedArray(message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleShowChosedBreed();
  }, []);

  return (
    <div className="chosed-breeds-box">
      {chosedBreedArray.map((element: any, index) => {
       // console.log(urlChosedBreed + element.split("/")[4]);
        return (
          <Link
            to={urlChosedBreed + element.split("/")[4] + "/1"}
            state={[element.split("/")[4], 1]}
            className="one-breed-image"
          >
            <img key={index} className="images" src={element} alt={element} />
          </Link>
        );
      })}
    </div>
  );
};

export default OneBreedList;
