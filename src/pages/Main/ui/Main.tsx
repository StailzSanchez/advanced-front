import { BugButton } from 'app/providers/ErrorBoundary';
import { Counter } from 'entities/Counter';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from 'shared/ui/Input/Input';

const Main = () => {
  const { t } = useTranslation('main');
  const [value, setValue] = useState('');

  const onChange = (v: string) => {
    setValue(v);
  };

  return (
    <div>
      {t('Главная')}
      <Input value={value} onChange={onChange} />
      <Counter />
    </div>
  );
};

export default Main;
