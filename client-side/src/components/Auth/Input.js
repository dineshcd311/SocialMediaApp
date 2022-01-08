import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

export default function Input({
  handleChange,
  half,
  name,
  label,
  autoFocus,
  handleShowPassword,
  type,
}) {
  return (
    <Grid item xs={6} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        required
        fullWidth
        label={label}
        autoFocus
        type={type}
        InputProps={
          name === "password"
            ? {
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : null
        }
      />
    </Grid>
  );
}
