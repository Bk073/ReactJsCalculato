import React from "react";
import ScreenRow from "./screenRow";
import PropTypes from "prop-types";

const Screen = props => {
  return (
    <div>
      <ScreenRow value={props.question} />
      <ScreenRow value={props.answer} />
    </div>
  );
};
Screen.propsType = {
  question: PropTypes.string.isRequired,
  answer: PropTypes.string.isRequired
};

export default Screen;
