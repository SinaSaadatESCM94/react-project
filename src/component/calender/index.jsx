import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendar,
  faSheetPlastic,
  faCaretDown,
  faCaretLeft,
  faCaretRight,
} from "@fortawesome/free-solid-svg-icons";
import "../calender/Calender.scss";
import { Shortcut, Note } from "../../component";

const Calender = ({ className, notes }) => {
  const hours = Array.from(Array(24).keys());
  // to have today's day, month, date, hour
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = new Date();
  return (
    <div
      className={`w-100 h-100 d-flex flex-column rounded-4 calender-container ${className}`}
    >
      <header className="w-100 h-auto d-flex align-items-center rounded-4 p-1 bg-container">
        <div className="col-6 h-auto me-auto d-flex justify-content-center rounded-4 transition-all calender-tab-container">
          <Shortcut
            icon={faCalendar}
            label={"Calender"}
            className={
              "py-3 px-5 me-2 fs-5 fw-bold border-0 rounded-4 shadow bg-board text-color-secondary-dark"
            }
            textContainerClassName={"px-5 py-1 gap-0"}
          />
        </div>
        <div className="col-6 h-auto ms-auto d-flex justify-content-center rounded-4 shadow-hover transition-all calender-tab-container">
          <Shortcut
            icon={faSheetPlastic}
            label={"Invoices"}
            className={
              "py-3 px-5 ms-2 fs-5 border-0 text-color-secondary-light"
            }
            textContainerClassName={"px-5 py-1 gap-0"}
          />
        </div>
      </header>
      <div className="w-100 h-auto p-3 d-flex align-items-center date-container">
        <div className="w-auto h-100 d-flex align-items-center gap-4">
          <p className="fs-5 fw-bold text-capitalize m-0 text-color-secondary-dark">
            {`${weekday[date.getDay()]}, ${
              months[date.getMonth()]
            } ${date.getDate()}`}
          </p>
          <FontAwesomeIcon
            icon={faCaretDown}
            className="fs-5 fw-bold m-0 ms-2 cursor-pointer text-color-secondary-light text-hover-secondary transition-all"
          />
        </div>
        <div className="w-auto h-100 d-flex align-items-center gap-4 ms-auto">
          <div className="w-aoto h-100 d-flex align-items-center">
            <FontAwesomeIcon
              icon={faCaretLeft}
              className="fs-5 fw-bold m-0 ms-2 cursor-pointer text-color-secondary-light text-hover-secondary transition-all"
            />
            <FontAwesomeIcon
              icon={faCaretRight}
              className="fs-5 fw-bold m-0 ms-2 cursor-pointer text-color-secondary-light text-hover-secondary transition-all"
            />
          </div>
          <p className="fs-5 fw-bold text-capitalize m-0 text-color-secondary-light">
            today
          </p>
        </div>
      </div>
      <div className="w-100 h-auto p-3">
        <hr className="w-100 border m-0 color-secondary-light" />
      </div>
      <section className="w-100 mv-100 position-relative scroll-design time-table">
        {hours.map((eachHour) => {
          return (
            <div
              className="w-100 h-6rem d-flex align-items-center px-3"
              key={eachHour}
            >
              <p className="col-2 fs-6 m-0 text-color-secondary-light">{`${eachHour}:00`}</p>
              <hr className="col-10 m-0 border-color-secondary-light" />
            </div>
          );
        })}
        <div
          className="col-10 me-3 bg-transparent position-absolute top-0 end-0 notes-container"
          style={{ height: `${24 * 6}rem` }}
        >
          {notes.map((eachNote) => {
            return (
              <Note
                key={eachNote.key}
                className={eachNote.className}
                title={eachNote.title}
                startTime={eachNote.startTime}
                endTime={eachNote.endTime}
              />
            );
          })}
          <div
            className="w-100 h-auto d-flex p-0 m-0 align-items-center position-absolute end-0 translate-middle-y this-hour"
            style={{
              top: `${(date.getHours() + date.getMinutes() / 60) * 6 + 3}rem`,
            }}
          >
            <span className="w-auto h-auto p-2 rounded-circle bg-secondary-dark" />
            <hr className="w-100 m-0 border-color-secondary-dark" />
          </div>
        </div>
      </section>
    </div>
  );
};

Calender.defaultProps = {
  className: "",
  notes: [],
};
Calender.propTypes = {
  className: PropTypes.string,
  notes: PropTypes.array,
};

export default Calender;
