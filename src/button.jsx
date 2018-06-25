import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  return (
    <input type="button" onClick={props.handleClick} value={props.label} />
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
};
export default Button;
