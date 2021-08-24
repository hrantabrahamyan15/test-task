import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory, Link } from "react-router-dom";

import styles from "./SignIn.module.scss";

import { Input, Button } from "../../components";
import { inputValidation } from "../../utils";

const SignIn = () => {
  const history = useHistory();
  const [errMessage, setErrMessage] = useState(null);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "all",
  });
  const { isValid } = formState;

  const onSubmitHandler = async (data) => {
    const { login, password } = data;

    await axios
      .post("http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/login", {
        login,
        password,
      })
      .then((response) => {
        history.push("/home");
      })
      .catch((error) => {
        const err = Object.values(error.response.data.errors);
        setErrMessage(err[0]);
        setTimeout(() => setErrMessage(null), 5000);
      });
  };

  return (
    <>
      <p className={styles.error}>{errMessage}</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          label="Login"
          name="login"
          refy={register(inputValidation.login)}
          error={errors["login"]?.message}
          placeholder="Enter your login"
        />
        <Input
          label="Password"
          type="password"
          name="password"
          refy={register(inputValidation.password)}
          error={errors["password"]?.message}
          placeholder="Enter your password"
        />
        <Button disabled={!isValid} className={styles.button} type="submit">
          Sign In
        </Button>
        <Link to="sign-up" className={styles.link}>
          New customer? <span>Sign Up</span>
        </Link>
      </form>
    </>
  );
};

export default SignIn;
