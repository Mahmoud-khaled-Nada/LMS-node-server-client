import { CategoryTableDetales } from '@/components/categories/CategoryTableDetales';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CategoryIndex() {
  const { t } = useTranslation();
  const { categories } = usePage<any>().props;
  return (
    <>
      <Toolbar routeCreate="categories/create" currentPage={t('categories')} />
      <CategoryTableDetales categories={categories} />
    </>
  );
}

export default CategoryIndex;
