
import { AlertError } from '@/components/ui/errors/AlertError';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function CourseEdit() {
  const { t } = useTranslation();
  const { courses,errors  } = usePage().props;
  return (
    <>
      <Toolbar currentPage={t('courses')} />
      <AlertError errors={errors} />
      {/* <CourseFormEdit CoursesData={courses} /> */}
    </>
  );
}

export default CourseEdit;
