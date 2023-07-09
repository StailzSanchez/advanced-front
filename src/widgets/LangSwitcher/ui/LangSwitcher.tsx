import { Theme, useTheme } from "app/providers/ThemeProvider";
import { classNames } from "shared/lib/classNames";
import cls from "./LangSwitcher.module.scss";
import { Button } from "shared/ui/Button";
import { useTranslation } from "react-i18next";
import { ThemeButton } from "shared/ui/Button/ui/Button";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher = (props: LangSwitcherProps) => {
  const { className } = props;
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      className={classNames(cls.langSwitcher, {}, [className])}
      theme={ThemeButton.CLEAR}
      onClick={toggle}
    >
      {t("Язык")}{" "}
    </Button>
  );
};
