import React, { useState } from "react";
import { TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Box, Grid, Container, Button } from "@mui/material";
import { Typography } from "@mui/material";
import { useSignUpMutation } from "../../store/apiSlice";

const SignUp = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [refferalCode, setRefferalCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cnfPassword, setCnfPassword] = useState("");

  const [signUp] = useSignUpMutation();

  const fNameValue = (e) => {
    setFirstName(e.target.value);
  };

  const lNameValue = (e) => {
    setLastName(e.target.value);
  };

  const usernameValue = (e) => {
    setUsername(e.target.value);
  };

  const phoneValue = (e) => {
    setPhone(e);
  };

  const rCodeValue = (e) => {
    setRefferalCode(e.target.value);
  };

  const emailValue = (e) => {
    setEmail(e.target.value);
  };

  const pswdValue = (e) => {
    setPassword(e.target.value);
  };

  const cPswdValue = (e) => {
    setCnfPassword(e.target.value);
  };

  const signupData = {
    fname: firstName,
    lname: lastName,
    referred_code: refferalCode,
    cnfpassword: cnfPassword,
    email,
    phone,
    username,
    password,
  };

  const signUpHandler = async (e) => {
    e.preventDefault();

    if (password === cnfPassword) {
      // console.log("yes its same");
      // const { data } = await signUp(signupData);
    }
  };

  return (
    <Grid item xs={false} md={5} sx={{ borderRadius: "10px" }}>
      <Box
        onSubmit={signUpHandler}
        component="form"
        sx={{ margin: "50px 0 0" }}
      >
        <Container maxWidth="sm">
          <Typography align="left" variant="h4" sx={{ fontWeight: 700 }}>
            Sign up
          </Typography>
          <TextField
            margin="normal"
            required
            fullWidth
            id="fName"
            label="First Name"
            name="fName"
            value={firstName}
            onChange={fNameValue}
            autoComplete="firstName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="lName"
            label="Last Name"
            name="lName"
            value={lastName}
            onChange={lNameValue}
            autoComplete="lastName"
          />
          <PhoneInput
            country={"us"}
            value={phone}
            onChange={phoneValue}
            inputStyle={{ width: "100%" }}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="userName"
            label="User Name"
            name="uName"
            value={username}
            onChange={usernameValue}
            autoComplete="userName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="rCode"
            label="Referral Code"
            name="rCode"
            value={refferalCode}
            onChange={rCodeValue}
            autoComplete="referralCode"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            value={email}
            onChange={emailValue}
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="pswd"
            label="Set Password"
            name="password"
            value={password}
            onChange={pswdValue}
            autoComplete="password"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="cPswd"
            label="Confirm Password"
            name="password"
            value={cnfPassword}
            onChange={cPswdValue}
            autoComplete="password"
          />
          <Button
            type="submit"
            fullWidth
            size="large"
            sx={{ marginTop: "10px" }}
            variant="contained"
          >
            Sign up
          </Button>
          <Typography textAlign="left" sx={{ padding: "10px 0" }}>
            Already have an account?
            <Typography
              onClick={props.openLogin}
              component="span"
              sx={{ color: "#1976d2", paddingLeft: "5px", cursor: "pointer" }}
            >
              Sign In
            </Typography>
          </Typography>
        </Container>
      </Box>
    </Grid>
  );
};

export default SignUp;
