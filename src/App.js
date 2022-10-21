import { useContext } from "react";
import "./App.css";
import LoginForm from "./components/form/LoginForm";
import Background from "./components/UI/Background";
import AuthContext from "./store/auth-context";
import Welcome from "./components/UI/Welcome";

import { Grid } from "@mui/material";

function App() {
  const authCtx = useContext(AuthContext);

  return (
    <div>
      {!authCtx.isLoggedIn && (
        <Grid container component="main" sx={{ height: "100vh" }}>
          <LoginForm />
          <Background />
        </Grid>
      )}
      {authCtx.isLoggedIn && <Welcome />}
    </div>
  );
}

export default App;
