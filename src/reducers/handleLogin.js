const initialValues = {
  email: "",
  loggedIn: false,
  error: null,
};

export const handleLogin = (state = initialValues, action) => {
  switch (action.type) {
    case "USER_LOGIN":
      return (() => {
        const { email, password } = action.payload;

        if (email === "admin@todo.com" && password === "admin") {
          return {
            email,
            loggedIn: true,
            error: null,
          };
        } else {
          return {
            email: "",
            loggedIn: false,
            error: "Invalid email or password, try again.",
          };
        }
      })();

    case "USER_LOGOUT":
      return {
        email: "",
        loggedIn: false,
      };

    default:
      return state;
  }
};
