import CourseFormCreate from '@/components/courses/CourseFormCreate';
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';

import { useTranslation } from 'react-i18next';

function CourseCreate() {
  const { t } = useTranslation();
  const { props } = usePage();
  return (
    <>
      <Toolbar currentPage={t('courses')} />
      <AlertError errors={props.errors} />
      <CourseFormCreate />
    </>
  );
}

export default CourseCreate;
