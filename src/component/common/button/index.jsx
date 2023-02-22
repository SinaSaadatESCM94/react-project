import React from "react";
import PropTypes from "prop-types";
import "./button.scss";

// importing components
import { LoadingButton } from "..";
function Button({
  containerClass,
  fontSize,
  inableColor,
  backgroundColor,
  border,
  borderRadius,
  paddingY,
  type,
  id,
  value,
  loading,
  disabled,
  form,
  className,
  label,
  tabindex,
  showLoadingOnClick,
  onClick,
}) {
  // components states
  // functions
  return (
    // container of the whole button element.
    // 		passed props to this element as class:
    // 			- fontSize
    // 			- containerClass
    <div
      className={`w-100 d-flex align-items-center ${fontSize} ${containerClass} m-0 p-0 form-element-height`}
    >
      {/* main button element of course
						passed props to this element as class:
							- backgroundColor
							- border
							- borderRadius
							- paddingY
							- disabledColor
							- inableColor
							- className
					 */}
      <button
        type={type}
        id={id}
        value={value}
        tabIndex={tabindex}
        // there are two conditions that the button is supposed to be disabled:
        // 		1. when the user has set disabled to true
        // 		2. when the button is clicked, so the button won't respond to more clickes and with that it is possible to prevent to many request from api
        disabled={disabled}
        form={form}
        className={`w-100 h-100 text-center text-capitalize m-0 d-flex align-items-center justify-content-center ${backgroundColor} ${border} ${borderRadius} ${paddingY}  ${inableColor} ${className}`}
        onClick={onClick}
      >
        {/* the following is label for the button, if the user wants to use LoadingButton after button is clicked, can pass showLoadingOnClock prop as true (which is its defualt value), but in case of false value for this prop label will not change after click.  */}
        {showLoadingOnClick && loading ? <LoadingButton /> : label}
      </button>
    </div>
  );
}

Button.propTypes = {
  containerClass: PropTypes.string,
  fontSize: PropTypes.string,
  inableColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  paddingY: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  form: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  tabIndex: PropTypes.string,
  showLoadingOnClick: PropTypes.bool,
  onClick: PropTypes.func,
};
Button.defaultProps = {
  containerClass: "",
  fontSize: "h5",
  inableColor: "text-white",
  backgroundColor: "bg-primary",
  border: "border-0",
  borderRadius: "rounded-4",
  paddingY: "py-2",
  type: PropTypes.oneOf[("button", "submit", "reset")],
  id: "form-button",
  value: "button",
  loading: false,
  disabled: false,
  form: "",
  className: "",
  label: "submit",
  tabIndex: "",
  showLoadingOnClick: true,
  onClick: () => {},
};

export default Button;

// ******************************USAGE******************************
//	<Button
//		containerClass=""	--> class for main parent
//		fontSize="h5"	--> font size for label applied to container
//		inableColor="text-white"	--> text color when button is inabled
//		backgroundColor="bg-primary"	--> button background color
//		border="border-0"	--> button border
//		borderRadius="rounded-pill"	--> button border radius
//		paddingY="p-2"	--> button padding-y
//		type="button"	--> button type
//		id="form-button"	--> button id
//		value="button"	--> button value
//		loading={loading} --> state for loading that is controlled from parent
//		disabled={false}	--> disabled true or false
//		form=""	--> form that this button belongs to
//		className=""	--> botton className
//		label="submit"	--> button label
// 		tabindex="1" --> button tabindex
//		showLoadingOnClick={true}	--> boolean value, whether using loading or not
//		onClick={() => {}} --> onClick function
//	/>;
