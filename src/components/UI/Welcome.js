import React, { useContext, useEffect, useState } from "react";

import { Container, Button } from "@mui/material";
import img from "../../image/background.jpg";
import logo from "../../image/logo-tech.png";
import AuthContext from "../../store/auth-context";
import classes from "./Welcome.module.css";
import { useGetAllDataQuery } from "../../store/apiSlice";

const Welcome = () => {
  const authCtx = useContext(AuthContext);

  const [name, setName] = useState("");
  const { data } = useGetAllDataQuery();

  console.log("i want data", data);

  // const authorization = async () => {
  //   const response = await fetch(
  //     "http://192.168.29.11:8081/api/v1/astrologer/profile",
  //     {
  //       headers: { Authorization: "Bearer " + localStorage.getItem("token") },
  //     }
  //   );

  //   const data = await response.json();

  //   setName(data?.data?.username);

  //   console.log(data);
  // };

  // useEffect(() => {
  //   if (!authCtx.userName) authorization();
  // }, []); // eslint-disable-line

  return (
    <header>
      <Container sx={{ display: "flex", justifyContent: "space-between" }}>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.navbar}>
          <ul className={classes.nav}>
            <li className={classes.navItem}>home</li>
            <li className={classes.navItem}>shop</li>
            <li className={classes.navItem}>about us</li>
            <li className={classes.navItem}>contact us</li>
            <Button
              onClick={authCtx.logout}
              variant="contained"
              sx={{ fontSize: "15px", fontWeight: "500" }}
            >
              Log out
            </Button>
          </ul>
        </div>
      </Container>
      <div
        style={{
          backgroundImage: `url(${img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <h1>Hello, {data?.data?.username}</h1>
      </div>
    </header>
  );
};

export default Welcome;
