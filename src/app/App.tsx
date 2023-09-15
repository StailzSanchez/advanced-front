import React, { Suspense, useEffect, useState } from 'react';
// lib
import { classNames } from 'shared/lib/classNames/classNames';
// components
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
// providers
import { AppRouter } from './providers/router';

export const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={classNames('app', { hovered: true, selected: true }, [])}>
      <Suspense fallback="">
        <Navbar />
        {/* <button type="submit" onClick={() => setIsOpen(true)}>
          toggle
        </button> */}

        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
