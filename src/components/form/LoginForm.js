import { useState, useContext } from "react";
import { TextField } from "@mui/material";
import { Grid, Container, Button, SvgIcon, FormControl } from "@mui/material";
import { Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import SignUp from "./SignUp";
import AuthContext from "../../store/auth-context";
import classes from "./LoginForm.module.css";
import { useVerifyDataMutation } from "../../store/apiSlice";

const LoginForm = () => {
  const [signup, setSignup] = useState(false);
  const [pswdToggle, setPswdToggle] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isUsernameError, setIsUsernameError] = useState(false);
  const [isPasswordError, setIsPasswordError] = useState(false);
  const [usernameErrorMessage, setUsernameErrorMessage] = useState("");

  const authCtx = useContext(AuthContext);
  const [verifyData] = useVerifyDataMutation();

  const usernameValue = (e) => {
    setUsername(e.target.value);
    setIsUsernameError(false);
  };

  const passwordValue = (e) => {
    setPassword(e.target.value);
    setIsPasswordError(false);
  };

  const usernameHandler = () => {
    if (!username.length) {
      setIsUsernameError(true);
      setUsernameErrorMessage("Username is required");
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

  const loginData = { username, password };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (!username) {
      setIsUsernameError(true);
      setUsernameErrorMessage("Username is required");
    }

    if (!password) {
      setIsPasswordError(true);
    }

    if (username && password) {
      const { data } = await verifyData(loginData);

      console.log("data ", data);

      if (data?.status === "success") {
        authCtx.login(data?.data);
      }
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
            id="username"
            label="Username"
            name="username"
            type="text"
            autoComplete="username"
            onBlur={usernameHandler}
            onChange={usernameValue}
            error={isUsernameError}
            helperText={isUsernameError && usernameErrorMessage}
            value={username}
          />
          <FormControl fullWidth>
            <TextField
              margin="normal"
              fullWidth
              type={pswdToggle ? "text" : "password"}
              id="password"
              label="Password"
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
