import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';

// Компонент для тестирования
export const BugButton = () => {
  const { t } = useTranslation();
  const [error, setError] = useState(false);

  const throwCLick = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <Button onClick={throwCLick}>{t('вызвать ошибку')}</Button>;
};
