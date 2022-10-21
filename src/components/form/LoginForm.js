import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Grid, Container, Button, SvgIcon, FormControl } from "@mui/material";
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SignUp from "./SignUp";
import AuthContext from "../../store/auth-context";
import classes from "./LoginForm.module.css";

// http://192.168.29.10:8080/api/v1/astro-login
// http://192.168.29.10:8080/api/v1/astrologers/profile
// hardikpriyankar@gmail.com

const LoginForm = () => {
  const [signup, setSignup] = useState(false);
  const [pswdToggle, setPswdToggle] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailError, setIsEmailError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");

  const authCtx = useContext(AuthContext);

  const emailValue = (e) => {
    setEmail(e.target.value);
    setIsEmailError(false);
  };

  const passwordValue = (e) => {
    setPassword(e.target.value);
    setIsPasswordError(false);
  };

  const emailHandler = () => {
    if (!email.length) {
      setIsEmailError(true);
      setEmailErrorMessage("email is required");
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      setIsEmailError(true);
      setEmailErrorMessage("enter valid email");
    }
  };

  const passwordHandler = () => {
    if (!password) {
      setIsPasswordError(true);
    }
  };

  const openSignupPage = () => {
    setSignup((prev) => !prev);
  };

  const togglePassword = () => {
    setPswdToggle((prev) => !prev);
  };

  if (signup) {
    return <SignUp openLogin={openSignupPage} />;
  }

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!email) {
      setIsEmailError(true);
      setEmailErrorMessage("email is required");
    }

    if (!password) {
      setIsPasswordError(true);
    }

    if (email && password) {
      const response = await fetch(
        "http://192.168.29.11:8080/api/v1/astro-login",
        {
          method: "POST",
          body: JSON.stringify({
            user_email: email,
            user_password: password,
          }),
          headers: { "Content-Type": "application/json" },
        }
      );
      const data = await response.json();
      console.log(data);
      if (!response.ok) {
        throw new Error(data.message);
      }

      authCtx.login(data.data);
      // console.log(data);
    }
  };

  return (
    <Grid item xs={false} md={5} sx={{ borderRadius: "10px" }}>
      <form
        style={{ margin: "100px 0" }}
        onSubmit={submitHandler}
        method="post"
      >
        <Container maxWidth="sm">
          <Typography align="left" variant="h4" sx={{ fontWeight: 700 }}>
            Log in
          </Typography>
          <TextField
            margin="normal"
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            autoComplete="email"
            onBlur={emailHandler}
            onChange={emailValue}
            error={isEmailError}
            helperText={isEmailError && emailErrorMessage}
            value={email}
          />
          <FormControl fullWidth>
            <TextField
              margin="normal"
              fullWidth
              type={pswdToggle ? "text" : "password"}
              id="password"
              label="password"
              onBlur={passwordHandler}
              onChange={passwordValue}
              name="password"
              autoComplete="password"
              sx={{ position: "relative" }}
              value={password}
              error={isPasswordError}
              helperText={isPasswordError && "password is required"}
            />
            <SvgIcon
              component={pswdToggle ? VisibilityOffIcon : VisibilityIcon}
              inheritViewBox
              className={classes.svgStyle}
              onClick={togglePassword}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidth
            size="large"
            sx={{ marginTop: "10px" }}
            variant="contained"
          >
            Login
          </Button>
          <Typography textAlign="left" sx={{ padding: "10px 0" }}>
            Not registered yet?
            <Typography
              onClick={openSignupPage}
              component="span"
              sx={{ color: "#1976d2", paddingLeft: "5px", cursor: "pointer" }}
            >
              Create an account
            </Typography>
          </Typography>
        </Container>
      </form>
    </Grid>
  );
};

export default LoginForm;
