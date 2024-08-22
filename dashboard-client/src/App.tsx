import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { SidebarProvider } from "./utils/context/SidebarContext";
import { Windmill } from "@windmill/react-ui";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const App = () => {
  const queryClient = new QueryClient();

  return (
    <>
      <SidebarProvider>
        <QueryClientProvider client={queryClient}>
          <Windmill usePreferences>
            <RouterProvider router={router} />
          </Windmill>
        </QueryClientProvider>
      </SidebarProvider>
      <ToastContainer position="bottom-left" theme="dark" />
    </>
  );
};

export default App;
