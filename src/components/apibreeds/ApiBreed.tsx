
//Father
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CardBreed {
  breedname: string;
}

const ApiBreed: FC<CardBreed> = ({ breedname }) => {
  let data: any;
  const handleAnchorClick = (event: any) => {
    data = breedname; 
  };

  let url: string = `/`;

  return (
    <div className="breeds" id={breedname}>
      <Link
        to={url + breedname}
        state={[breedname, 20]}
        className="breedname"
        onClick={handleAnchorClick}
      >
        {breedname}
      </Link>
    </div>
  );
};

export default ApiBreed;
