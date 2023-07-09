import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { About } from "pages/About";
import { Main } from "pages/Main";
import { AppRouter } from "./providers/router";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: true }, [theme])}
    >
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <AppRouter />
    </div>
  );
};
