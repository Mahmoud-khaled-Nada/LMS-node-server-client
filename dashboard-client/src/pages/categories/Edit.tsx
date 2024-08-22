import CategoryFormEdit from '@/components/categories/CategoryFormEdit';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CategoryEdit() {
  const { t } = useTranslation();
  const { errors, category } = usePage().props;
  return (
    <>
      <Toolbar currentPage={t('categories')} />
      <AlertError errors={errors} />
      <CategoryFormEdit categoryData={category} />
    </>
  );
}

export default CategoryEdit;
