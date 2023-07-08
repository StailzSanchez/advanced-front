import React, { Suspense, useContext, useState } from "react";
import "./styles/index.scss";
import { Route, Routes, Link } from "react-router-dom";
import { AboutAsync } from "./pages/About/About.async";
import { MainAsync } from "./pages/Main/Main.async";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"about"} element={<AboutAsync />} />
          <Route path={"/"} element={<MainAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
