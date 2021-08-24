import React from "react";
import PropTypes from "prop-types";

import styles from "./Input.module.scss";

import { noop } from "../../utils";

const Input = ({ type, label, name, error, placeholder, refy }) => (
  <div className={styles.wrapper}>
    <span>{label}</span>
    <input
      ref={refy}
      type={type}
      name={name}
      placeholder={placeholder}
      autoComplete="off"
    />
    <p>{error}</p>
  </div>
);

Input.propTypes = {
  refy: PropTypes.func,
  name: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  refy: noop,
  name: "text",
  type: "text",
  label: "",
  placeholder: "",
};

export default Input;
