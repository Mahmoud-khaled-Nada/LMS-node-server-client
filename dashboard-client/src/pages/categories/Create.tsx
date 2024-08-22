import CategoryFormCreate from '@/components/categories/CategoryFormCreate';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';

import { useTranslation } from 'react-i18next';

function CategoryCreate() {
  const { t } = useTranslation();
  const { props } = usePage();
  return (
    <>
      <Toolbar currentPage={t('category')} />
      <AlertError errors={props.errors} />
      <CategoryFormCreate />
    </>
  );
}

export default CategoryCreate;
