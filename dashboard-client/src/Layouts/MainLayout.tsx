import { Suspense, useEffect } from "react";
import Header from "./@components/Header";
import Sidebar from "./@components/Sidebar";
import { useSidebarContext } from "@/utils/context/useSidebarContext";
import ThemedSuspense from "@/components/ThemedSuspense";
import { Outlet, useLocation } from "react-router-dom";

export function MainLayout() {
  const { isSidebarOpen, closeSidebar } = useSidebarContext();
  const {pathname} = useLocation();

  useEffect(() => {
    closeSidebar();
  }, [pathname]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <main className="h-full overflow-y-auto">
          <div className="container grid px-6 mx-auto">
            <Suspense fallback={<ThemedSuspense />}>
              <Outlet />
            </Suspense>
          </div>
        </main>
      </div>
    </div>
  );
}
