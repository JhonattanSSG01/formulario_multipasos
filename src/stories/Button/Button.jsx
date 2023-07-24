import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";
import { Link } from "react-router-dom";
import { Icon } from "../Icon/Icon";

/**
 * Primary UI component for user interaction
 */
export const Button = ({ label, primary, dir }) => {
  const color = primary
    ? "container__all--button--primary"
    : "container__all--button--secondary";
  const posicion = dir ? "container__all--right" : "container__all--left";
  return (
    <button
      type="submit"
      className={`${posicion} container__all--button ${color}`}
    >
      {label}
        {dir ? (
          <Icon icon="right" />
        ) : (
          <Icon icon="left" />
        )}
    </button>
  );
};

export const LinkButton = ({ to, label, primary, dir, option, active }) => {
  const color = primary
    ? "container__all--button--primary"
    : "container__all--button--secondary";
  const posicion = dir ? "container__all--right" : "container__all--left";
  return (
    <Link to={to} className={`${posicion} container__all--button ${color}`}>
      {label}
      {active ? (
        dir ? (
          <Icon icon="right" />
        ) : (
          <Icon icon="left" />
        )
      ) : option === "cancel" ? (
        <Icon icon="cancel" />
      ) : (
        <Icon icon="send" />
      )}
    </Link>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  primary: PropTypes.bool,
  dir: PropTypes.bool,
};

Button.defaultProps = {
  label: "",
  to: "/",
  prymary: true,
  dir: true,
};

LinkButton.propTypes = {
  label: PropTypes.string,
  to: PropTypes.string,
  primary: PropTypes.bool,
  dir: PropTypes.bool,
  option: PropTypes.string,
  active: PropTypes.bool,
};

LinkButton.defaultProps = {
  label: "",
  to: "/",
  prymary: true,
  dir: true,
  option: "",
  active: true,
};
