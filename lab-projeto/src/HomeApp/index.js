import { AppBar, Toolbar } from "@mui/material";
import { RocketLaunch } from "@mui/icons-material";
import React from "react";

export class HomeApp extends React.Component {
  render() {
    return (
      <>
        <AppBar>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <h2>Loja Espacial</h2>
            <RocketLaunch />
          </Toolbar>{" "}
        </AppBar>
      </>
    );
  }
}
