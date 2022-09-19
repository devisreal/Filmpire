import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route, Link } from "react-router-dom";

import useStyles from './styles'

import { Actors, Movies, MovieInformation, Navbar, Profile } from "./index";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Navbar />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Routes>
          <Route
            index
            path="/"
            element={<Movies />}
          />
          <Route
            path="/movie/:id"
            element={<MovieInformation />}
          />
          <Route
            path="/actor/:id"
            element={<Actors />}
          />
          <Route
            path="/profile/:id"
            element={<Profile />}
          />
        </Routes>
      </main>
    </div>
  );
};

export default App;
