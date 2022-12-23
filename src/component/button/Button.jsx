import React from "react";
import PropTypes from "prop-types";

function Button({
	fontSize,
	disableColor,
	inableColor,
	backgroundColor,
	border,
	borderRadius,
	paddingY,
	type,
	id,
	value,
	disabled,
	form,
	className,
	label,
	onClick,
}) {
	return (
		<div className={`w-100 d-flex align-items-center`}>
			<button
				type={type}
				id={id}
				value={value}
				disabled={disabled}
				form={form}
				className={`w-100 text-center text-capitalize m-0 ${backgroundColor} ${border} ${borderRadius} ${paddingY} ${fontSize} ${
					disabled ? disableColor : inableColor
				} ${className}`}
				onClick={onClick}
			>
				{label}
			</button>
		</div>
	);
}

Button.propTypes = {
	fontSize: PropTypes.string,
	disableColor: PropTypes.string,
	inableColor: PropTypes.string,
	backgroundColor: PropTypes.string,
	border: PropTypes.string,
	borderRadius: PropTypes.string,
	paddingY: PropTypes.string,
	type: PropTypes.string,
	id: PropTypes.string,
	value: PropTypes.string,
	disabled: PropTypes.bool,
	form: PropTypes.string,
	className: PropTypes.string,
	label: PropTypes.string,
	onClick: PropTypes.func,
};
Button.defaultProps = {
	fontSize: "h5",
	disableColor: "text-muted",
	inableColor: "text-white",
	backgroundColor: "bg-primary",
	border: "border-0",
	borderRadius: "rounded-pill",
	paddingY: "p-2",
	type: PropTypes.oneOf[("button", "submit", "reset")],
	id: "form-button",
	value: "button",
	disabled: false,
	form: "",
	className: "",
	label: "submit",
	onClick: () => {},
};

export default Button;
