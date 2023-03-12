import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import ApiBreed from "./ApiBreed";

const BreedList = () => {
  const [breedArray, setbreedArray] = useState<string[]>([]);

  async function handleBreedList() {
    try {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");

      let breedArray = data.message;
      let endBreedsArray = Object.keys(breedArray);
      setbreedArray(endBreedsArray);
      
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    handleBreedList();
  }, []);

  return (
    <div className="breeds-box">
      {breedArray.map((breed, index) => {
        return <ApiBreed key={index} breedname={breed} />;
      })}
    </div>
  );
};

export default BreedList;
