import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faListCheck,
  faCalendar,
} from "@fortawesome/free-solid-svg-icons";
import "../card/Card.scss";
import { Contributer } from "../../../component";

const Card = ({
  cardClassName,
  taskDetail,
  thisProjectContributers,
  completedTaskNumber,
  allTaskNumber,
  startedDate,
}) => {
  return (
    <div className={`card w-100 h-auto border rounded-4 p-3 ${cardClassName}`}>
      <div className="d-flex align-items-center justify-content-between gap-1 top-section">
        <div className="h-auto task">
          <h5 className="h5 text-capitalize text-color-secondary-dark">
            {taskDetail.title}
          </h5>
          <div className="w-100 d-flex align-items-center">
            <h6
              className={`h6 text-capitalize p-1 rounded ${taskDetail.className}`}
            >
              {taskDetail.category}
            </h6>
          </div>
        </div>
        <div className="col-4 h-auto d-flex justify-content-end">
          <Contributer
            contributers={thisProjectContributers}
            isAddOptionOn={false}
            imageWidth={3}
          />
        </div>
      </div>
      <hr />
      <div className="d-flex align-items-center justify-content-between my-3 text-color-secondary-light bottom-section">
        {allTaskNumber === completedTaskNumber ? (
          <div className="w-auto d-flex align-items-center gap-1 task-number">
            <FontAwesomeIcon icon={faCheckCircle} className="fs-6" />
            <span className="fs-6 fw-bold text-capitalize">Completed</span>
          </div>
        ) : (
          <div className="w-auto d-flex align-items-center gap-1 task-number">
            <FontAwesomeIcon icon={faListCheck} className="fs-6" />
            <span className="fs-6 fw-bold">{`${completedTaskNumber}/${allTaskNumber}`}</span>
          </div>
        )}
        <div className="w-auto d-flex align-items-center gap-1">
          <FontAwesomeIcon icon={faCalendar} className="fs-6" />
          <span className="fs-6 fw-bold text-capitalize">{startedDate}</span>
        </div>
      </div>
    </div>
  );
};

Card.defaultProps = {
  cardClassName: "",
  taskDetail: { title: "", category: "", className: "primary" },
  thisProjectContributers: [],
  completedTaskNumber: 0,
  allTaskNumber: 0,
  startedDate: "01.01.2022",
};
Card.propTypes = {
  cardClassName: PropTypes.string,
  taskDetail: PropTypes.object,
  thisProjectContributers: PropTypes.array,
  completedTaskNumber: PropTypes.number,
  allTaskNumber: PropTypes.number,
  startedDate: PropTypes.string,
};

export default Card;
