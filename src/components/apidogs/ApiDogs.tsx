//https://dog.ceo/dog-api/
import React, { FC } from "react";
import { Link } from "react-router-dom";

interface CardDogs {
  src: string;
}
const ApiDogs: FC<CardDogs> = ({ src }) => {
  let urlWiki: string = `/wikisearch/`;

  return (
    <div className="image-gallery">
      <div className="image-container">
        <img className="images" src={src} alt="" />

        <div className="span-container">
          <span>
          <div className="breed-name">{src.split("/")[4].charAt(0).toUpperCase() + src.split("/")[4].slice(1) }</div>
            <Link
              to={urlWiki + src.split("/")[4]}
              state={src.split("/")[4]}
              className="breed"
            >
              For more info click here ...
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ApiDogs;
