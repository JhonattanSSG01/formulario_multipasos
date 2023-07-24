import React from "react";
import PropTypes from "prop-types";
import "./Icon.scss";
import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import { MdOutlineCancel } from "react-icons/md";
import { BiSend } from "react-icons/bi";

/**
 * Primary UI component for user interaction
 */
export const Icon = ({ icon }) => {
  return (
    <>
      {icon === "right" ? (
        <BsArrowBarRight className="container__all--icon-right" />
      ) : (
        ""
      )}
      {icon === "left" ? (
        <BsArrowBarLeft className="container__all--icon-left" />
      ) : (
        ""
      )}
      {icon === "cancel" ? (
        <MdOutlineCancel className="container__all--icon-left" />
      ) : (
        ""
      )}
      {icon === "send" ? <BiSend className="container__all--icon-left" /> : ""}
    </>
  );
};

Icon.propTypes = {
  icon: PropTypes.string,
};

Icon.defaultProps = {
  icon: "",
};
