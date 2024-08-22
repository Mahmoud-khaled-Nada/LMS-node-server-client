import AdminFormCreate from "@/components/admin/AdminFormCreate";
import { AlertError } from "@/components/ui/errors/AlertError";
import Toolbar from "@/components/ui/toolbar/Toolbar";
import { useTranslation } from "react-i18next";

function AdminCreate() {
  const { t } = useTranslation();
  return (
    <>
      <Toolbar currentPage={t("admins")} />
      {/* <AlertError errors={errors} /> */}
      <AdminFormCreate />
    </>
  );
}

export default AdminCreate;
