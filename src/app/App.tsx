import React, { Suspense, useEffect, useState } from 'react';
import './styles/index.scss';
// lib
import { classNames } from 'shared/lib/classNames/classNames';
// components
import { Modal } from 'shared/ui/Modal/Modal';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
// providers
import { AppRouter } from './providers/router';
import { useTheme } from './providers/ThemeProvider';

export const App = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={classNames('app', { hovered: true, selected: true }, [theme])}
    >
      <Suspense fallback="">
        <Navbar />
        <button type="submit" onClick={() => setIsOpen(true)}>
          toggle
        </button>
        <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
          quis earum dolorem tempora provident impedit officia cum, consectetur
          eligendi, cumque porro optio reiciendis voluptatum, eum ab laboriosam
          ullam consequatur?
        </Modal>
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};
