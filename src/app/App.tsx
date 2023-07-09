import React, { Suspense, useContext, useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./styles/index.scss";

import { classNames } from "shared/lib/classNames";
import { useTheme } from "./providers/ThemeProvider";
import { About } from "pages/About";
import { Main } from "pages/Main";
import { AppRouter } from "./providers/router";
import { Navbar } from "widgets/Navbar";
import { Sidebar } from "widgets/Sidebar";
import { useTranslation } from "react-i18next";
import { LangSwitcher } from "widgets/LangSwitcher";

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames("app", { hovered: true, selected: true }, [theme])}
    >
      <Suspense fallback="">
        <Navbar />
        {/* <LangSwitcher /> */}
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
