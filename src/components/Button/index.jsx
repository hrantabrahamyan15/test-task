import React from "react";
import PropTypes from "prop-types";

import { noop } from "../../utils";

const Button = ({ onClick, className, disabled, children, ...rest }) => (
  <button
    type="button"
    {...rest}
    disabled={disabled}
    onClick={onClick}
    className={className}
  >
    {children}
  </button>
);

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  onClick: noop,
  className: "",
  disabled: false,
};

export default Button;
