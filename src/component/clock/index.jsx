import React from "react";
import PropTypes from "prop-types";
import "./clock.scss";
import TimeDropDown from "./timeDropDown";

let minutesArr = [];
for (let i = 0; i < 60; i++) {
  minutesArr.push({ id: i });
}
let hoursArr = [];
for (let i = 0; i <= 12; i++) {
  hoursArr.push({ id: i });
}
export default function Clock({ clockRadius = "16rem", clockStatus = "hour" }) {
  const pairedNumber = [
    {
      topNum: { hour: 12, minutes: 60 },
      bottomNum: { hour: 6, minutes: 30 },
      rotate: "",
      rotateRev: "",
    },
    {
      topNum: { hour: 1, minutes: 5 },
      bottomNum: { hour: 7, minutes: 35 },
      rotate: "rotate(30deg)",
      rotateRev: "rotate(-30deg)",
    },
    {
      topNum: { hour: 2, minutes: 10 },
      bottomNum: { hour: 8, minutes: 40 },
      rotate: "rotate(60deg)",
      rotateRev: "rotate(-60deg)",
    },
    {
      topNum: { hour: 3, minutes: 15 },
      bottomNum: { hour: 9, minutes: 45 },
      rotate: "rotate(90deg)",
      rotateRev: "rotate(-90deg)",
    },
    {
      topNum: { hour: 4, minutes: 20 },
      bottomNum: { hour: 10, minutes: 50 },
      rotate: "rotate(120deg)",
      rotateRev: "rotate(-120deg)",
    },
    {
      topNum: { hour: 5, minutes: 25 },
      bottomNum: { hour: 11, minutes: 55 },
      rotate: "rotate(150deg)",
      rotateRev: "rotate(-150deg)",
    },
  ];
  return (
    <main className="w-100 d-flex flex-column align-items-center justify-content-center border border-danger">
      <section className="col-4 d-flex align-items-center justify-content-between">
        <TimeDropDown data={hoursArr} show="id" />
      </section>
      <section
        className="rounded-circle d-none flex-column align-items-center justify-content-between position-relative clock-container"
        style={{
          width: `${clockRadius}`,
          height: `${clockRadius}`,
        }}
      >
        {pairedNumber.map((number, index) => {
          const { bottomNum, topNum, rotate, rotateRev } = number;
          return (
            <div
              key={index}
              className="h-100 col-1 p-0 d-flex flex-column align-items-center justify-content-between position-absolute"
              style={{ transform: `${rotate}` }}
            >
              <span
                className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle num-size"
                style={{ transform: `${rotateRev}` }}
              >
                {topNum[clockStatus]}
              </span>
              <span
                className="d-flex align-items-center justify-content-center bg-primary text-white rounded-circle num-size"
                style={{ transform: `${rotateRev}` }}
              >
                {bottomNum[clockStatus]}
              </span>
            </div>
          );
        })}
      </section>
    </main>
  );
}
Clock.propTypes = {
  clockRadius: PropTypes.string,
  clockStatus: PropTypes.oneOf(["hour", "minutes"]),
};
Clock.defaultProps = {
  clockRadius: "16rem",
  clockStatus: "hour",
};
