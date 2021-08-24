import React from "react";
import { Helmet } from "react-helmet";

import styles from "./Home.module.scss";

const Home = () => (
  <>
    <Helmet>
      <title>Home</title>
    </Helmet>
    <div className={styles.wrapper}>
      <h1 className={styles.title}>Welcome to home page </h1>
    </div>
  </>
);

export default Home;
