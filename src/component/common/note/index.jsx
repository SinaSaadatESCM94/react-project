import React from "react";
import PropTypes from "prop-types";

const Note = ({ className, title, startTime, endTime }) => {
	function notePropertiesCalc (startTime, endTime){
		// to calcilate height based on time duration of the taks nex variable is set, the value is in rem
		const heightCoefficient = 6;
		const [ noteHeight, noteTop ] = [
			`${(endTime - startTime) * heightCoefficient}rem`,
			`${startTime * heightCoefficient + heightCoefficient / 2}rem`,
		];
		return [ noteHeight, noteTop ];
	}
	let [ height, top ] = notePropertiesCalc(startTime, endTime);
	return (
		<div
			className={`w-100 px-3 py-2 rounded-4 position-absolute end-0 ${className}`}
			style={{ height: height, top: top }}
		>
			<h2 className="h2 text-capitalize text-color-secondary-dark">{title}</h2>
			<p className="fs-5 text-color-secondary-dark">{`${startTime}:00 - ${endTime}:00`}</p>
		</div>
	);
};

Note.defaultProps = {
	className: "bg-secondary-lighter",
	title: "Task Title",
	startTime: 9,
	endTime: 10,
};
Note.propTypes = {
	className: PropTypes.string,
	title: PropTypes.string,
	startTime: PropTypes.number,
	endTime: PropTypes.number,
};

export default Note;
