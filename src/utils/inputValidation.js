const required = "This field is required*";

const inputValidation = {
  login: {
    required,
    minLength: {
      value: 4,
      message: "Name must have at least 4 characters",
    },
    pattern: {
      value: /^\w/i,
      message: "Please enter a valid name",
    },
  },
  email: {
    required,
    pattern: {
      value:
        /^(([^<>()[\]\\.,*/;:\s@"]+(\.[^<>()[\]\\.*,/;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
      message: "Please enter a valid e-mail address",
    },
  },
  password: {
    required,
    minLength: {
      value: 6,
      message: "Password must have at least 6 characters",
    },
  },
};

export default inputValidation;
