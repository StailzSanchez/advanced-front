import { classNames } from 'shared/lib/classNames';
import { Loader } from 'shared/ui/Loader/Loader';
import cls from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = (props: PageLoaderProps) => {
  const { className } = props;
  return (
    <div className={classNames(cls.page__loader, {}, [className])}>
      <Loader />
    </div>
  );
};
