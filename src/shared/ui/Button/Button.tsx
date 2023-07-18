import { ButtonHTMLAttributes, FC, ReactNode } from 'react';
import { classNames } from 'shared/lib/classNames';
import cls from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ThemeButton;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  // eslint-disable-next-line object-curly-newline
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(cls.button, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
