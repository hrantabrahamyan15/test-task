import React from "react";
import PropTypes from "prop-types";

import { Helmet } from "react-helmet";

import styles from "./AuthLayouth.module.scss";

const AuthLayouth = ({ children, title, contentTitle }) => (
  <>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <section className={styles.wrapper}>
      <div className={styles.content}>
        <h1 className={styles.content__title}>{contentTitle}</h1>
        {children}
      </div>
    </section>
  </>
);

AuthLayouth.propTypes = {
  title: PropTypes.string.isRequired,
  contentTitle: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default AuthLayouth;
