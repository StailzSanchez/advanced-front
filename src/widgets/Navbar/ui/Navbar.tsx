import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  return (
    <div className={classNames(cls.navbar)}>
      <div className={cls.links}>
        <AppLink className={cls.mainLink} to="/">
          {t('Главная')}
        </AppLink>
        <AppLink to="/about">{t('О сайте')}</AppLink>
      </div>
    </div>
  );
};
