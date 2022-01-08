import React from "react";
import { AppBar, Typography } from "@material-ui/core";
import useStyles from "./styles";

export default function NavBar() {
  return (
    <AppBar className={classes.appBar} position="static" color="inherit">
      <Typography className={classes.heading} variant="h3" align="center">
        Memories
      </Typography>
      <img
        className={classes.toolbar}
        src={
          "https://raw.githubusercontent.com/adrianhajdin/project_mern_memories/PART_1_and_2/client/src/images/memories.png"
        }
        alt="icon"
        height="60"
      />
    </AppBar>
  );
}
