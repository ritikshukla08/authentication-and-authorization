import React from "react";
import { TextField } from "@mui/material";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Box, Grid, Container, Button } from "@mui/material";
import { Typography } from "@mui/material";

const SignUp = (props) => {
  return (
    <Grid item xs={false} md={5} sx={{ borderRadius: "10px" }}>
      <Box component="form" sx={{ margin: "100px 0" }}>
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
            autoComplete="firstName"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="sName"
            label="Second Name"
            name="sName"
            autoComplete="secondName"
          />
          {/* <TextField
            margin="normal"
            required
            fullWidth
            id="tel"
            label="Contact Number"
            name="tel"
            autoComplete="Contact No"
            type="tel"
          /> */}

          <PhoneInput country={"us"} inputStyle={{ width: "100%" }} />

          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="email"
            type="email"
          />
          <TextField
            margin="normal"
            required
            fullWidth
            type="password"
            id="password"
            label="Set Password"
            name="password"
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
