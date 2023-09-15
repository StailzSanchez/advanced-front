import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { Modal } from 'shared/ui/Modal/Modal';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useCallback, useState } from 'react';
import { LoginModal } from 'feautures/AuthByUserName';
import cls from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = (props: NavbarProps) => {
  const { className } = props;
  const { t } = useTranslation('translation');

  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  return (
    <div className={classNames(cls.navbar)}>
      <Button
        theme={ButtonTheme.CLEAR_INVERTED}
        className={cls.links}
        onClick={onShowModal}
      >
        {t('Войти')}
      </Button>
      {/* <Modal isOpen={isAuthModal} onClose={onToggleModal}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam aliquam
        quis earum dolorem tempora provident impedit officia cum, consectetur
        eligendi, cumque porro optio reiciendis voluptatum, eum ab laboriosam
        ullam consequatur?
      </Modal> */}
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
