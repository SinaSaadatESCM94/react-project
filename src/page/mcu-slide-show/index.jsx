import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight, faCaretLeft } from "@fortawesome/free-solid-svg-icons";

// importing styles
import "./mcuSlideShow.scss";

// importing components
import { MovieCard, HeaderTitle } from "../../component";
import { MovieData } from "../../utils";

function McuSlides() {
  const numberofCards = MovieData.length;
  const [cardIndex, setCardIndex] = useState([numberofCards - 1, 0, 1]);
  // card generation for all data
  const movieCards = MovieData.map((movieInfo) => (
    <MovieCard key={movieInfo.id} movieData={movieInfo} />
  ));
  const nextSlide = () => {
    setCardIndex((prevCardIndex) => {
      let tempIndex = [
        prevCardIndex[1],
        prevCardIndex[2],
        prevCardIndex[2] + 1,
      ];
      if (tempIndex[2] === numberofCards) {
        tempIndex[2] = 0;
      }
      return tempIndex;
    });
  };
  const prevSlide = () => {
    setCardIndex((prevCardIndex) => {
      let tempIndex = [
        prevCardIndex[0] - 1,
        prevCardIndex[0],
        prevCardIndex[1],
      ];
      if (tempIndex[0] === -1) {
        tempIndex[0] = numberofCards - 1;
      }
      return tempIndex;
    });
  };
  return (
    <div className="McuSlides">
      <HeaderTitle />
      <div className="cardContainer">
        <div className="left holder">{movieCards[cardIndex[0]]}</div>
        <div className="middle holder">{movieCards[cardIndex[1]]}</div>
        <div className="right holder">{movieCards[cardIndex[2]]}</div>
      </div>
      <div className="btn-container">
        <FontAwesomeIcon
          onClick={prevSlide}
          icon={faCaretLeft}
          className="icon previous"
        />
        <FontAwesomeIcon
          onClick={nextSlide}
          icon={faCaretRight}
          className="icon next"
        />
      </div>
    </div>
  );
}

export default McuSlides;
