import React, { Suspense } from 'react';
import './styles/index.scss';

import { classNames } from 'shared/lib/classNames';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();

  return (
    <div
      className={classNames('app', { hovered: true, selected: true }, [theme])}
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
