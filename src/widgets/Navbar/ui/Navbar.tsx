import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames";
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";
import cls from "./Navbar.module.scss";

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to={"/"}>
          Главная
        </AppLink>
        <AppLink to={"/about"}>О сайте</AppLink>
      </div>
    </div>
  );
};
