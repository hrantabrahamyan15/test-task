import React, { useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import styles from "./SignUp.module.scss";

import { Input, Button } from "../../components";
import { inputValidation } from "../../utils";

const SignUp = () => {
  const history = useHistory();
  const [errMessage, setErrMessage] = useState(null);
  const { register, handleSubmit, errors, formState } = useForm({
    mode: "all",
  });
  const { isValid } = formState;

  const onSubmitHandler = async (data) => {
    const { login, email, password } = data;

    await axios
      .post(
        "http://ec2-18-117-84-227.us-east-2.compute.amazonaws.com/register",
        {
          login,
          email,
          password,
        }
      )
      .then(() => {
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
      <p>{errMessage}</p>
      <form onSubmit={handleSubmit(onSubmitHandler)}>
        <Input
          label="Login"
          name="login"
          refy={register(inputValidation.login)}
          error={errors["login"]?.message}
          placeholder="Enter your login"
        />
        <Input
          label="Email"
          name="email"
          refy={register(inputValidation.email)}
          error={errors["email"]?.message}
          placeholder="Enter your email"
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
          login
        </Button>
      </form>
    </>
  );
};

export default SignUp;
