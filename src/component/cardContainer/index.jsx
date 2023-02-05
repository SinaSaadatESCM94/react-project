import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import "../cardContainer/CardContainer.scss";
import { Card } from "../../component";

const CardContainer = ({
  containerClassName,
  containerTitle,
  thisContainerCards,
}) => {
  return (
    <div
      className={`w-auto h-auto rounded-4 rounded-start-4 p-3 bg-container card-container ${containerClassName}`}
    >
      <div className="w-100 h-auto d-flex align-items-center justify-content-between mb-2 px-2 title-container">
        <div className="w-auto h-auto d-flex align-items-center justify-content-between gap-3">
          <h4 className="h4 text-capitalize text-color-secondary-dark">
            {containerTitle}
          </h4>
          {thisContainerCards.length && (
            <h4 className="w-auto h-auto h4 px-3 py-2 rounded-4 card-counter text-color-secondary-dark bg-secondary-lighter">
              {thisContainerCards.length}
            </h4>
          )}
        </div>
        <div className="w-auto ms-auto cursot-pointer">
          <FontAwesomeIcon
            icon={faEllipsisH}
            className="h4 pe-3 text-color-secondary-light cursor-pointer"
          />
        </div>
      </div>
      <div className="w-100 h-auto d-flex flex-column align-items-center justify-content-between gap-3 px-2 scroll-design card-section">
        {thisContainerCards.map((eachCard) => {
          return (
            <Card
              cardClassName={eachCard.cardClassName}
              taskDetail={eachCard.taskDetail}
              thisProjectContributers={eachCard.thisProjectContributers}
              completedTaskNumber={eachCard.completedTaskNumber}
              allTaskNumber={eachCard.allTaskNumber}
              startedDate={eachCard.startedDate}
              key={eachCard.key}
            />
          );
        })}
      </div>
      <div className="w-100 h-3rem rounded m-0 mt-5 bg-transparent shadow border-0 cursor-pointer btn-container">
        <button className="w-100 h-100 rounded-4 h4 m-0 text-color-secondary-dark">
          + Add Card
        </button>
      </div>
    </div>
  );
};

CardContainer.defaultProps = {
  className: "",
  containerTitle: "Unknown",
  thisContainerCards: [],
};
CardContainer.propTypes = {
  className: PropTypes.string,
  containerTitle: PropTypes.string,
  thisContainerCards: PropTypes.array,
};

export default CardContainer;
