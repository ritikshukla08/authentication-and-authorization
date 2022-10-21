import React from "react";
import image from "../../image/background3.jpg";
import { Grid } from "@mui/material";

const Background = () => {
  return (
    <Grid
      item
      xs={false}
      md={7}
      sx={{
        backgroundImage: `url(${image})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
  );
};

export default Background;
