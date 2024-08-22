
import AdminTableDetails from '@/components/admin/AdminTableDetales';
import Toolbar from '@/components/ui/toolbar/Toolbar';
import { usePage } from '@inertiajs/react';
import { useTranslation } from 'react-i18next';

function AdminIndex() {
  const { t } = useTranslation();

  // get admin use react query

  return (
    <>
      <Toolbar routeCreate="/admins/create" currentPage={t('admins')} />
      {/* <AdminTableDetails admins={admins} /> */}
    </>
  );
}

export default AdminIndex;
