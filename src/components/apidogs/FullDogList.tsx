import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ApiDogs from "./ApiDogs";

const FullDogList = () => {
  const [imageArray, setimageArray] = useState([]);
  async function handleGetDogs() {
    try {
      const { data } = await axios.get(
        "https://dog.ceo/api/breeds/image/random/50"
      );
      const { message } = data;
      setimageArray(message);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleGetDogs();
  }, []);

  return (
    <div className="img-box">
      {imageArray.map((image, index) => {
        return <ApiDogs key={index} src={image} />;
      })}
    </div>
  );
};

export default FullDogList;
