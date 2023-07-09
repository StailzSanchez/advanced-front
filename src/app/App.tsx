import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { About } from "pages/About";
import { Main } from "pages/Main";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: true }, [theme])}
    >
      <Navbar />
      <button onClick={toggleTheme}>Toggle</button>
      <AppRouter />
    </div>
  );
};
