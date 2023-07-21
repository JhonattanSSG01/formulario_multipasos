import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import { BsArrowBarRight } from "react-icons/bs";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, primary, icon }) => {
  const color = primary ? "btn-primary" : "btn-secondary";
  return (
    <div className="btn">
      <button type="submit" className={`button button-icon ${color}`}>
        {label}
        <BsArrowBarRight className="icon" />
      </button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  primary: PropTypes.bool,
  icon: PropTypes.string,
};

Button.defaultProps = {
  label: "",
  prymary: true,
  icon: "",
};
