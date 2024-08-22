import { createBrowserRouter } from "react-router-dom";
import { MainLayout } from "@/Layouts/MainLayout";
import { AuthLayout } from "@/Layouts/AuthLayout";
// import AuthenticationRouter from "./guard/AuthenticationRouter";
import Login from "@/pages/auth/Login";
import Dashboard from "@/pages/Dashboard";
import AdminIndex from "@/pages/admin/Index";
import CategoryIndex from "@/pages/categories/Index";
import CourseIndex from "@/pages/courses/Index";
import Messages from "@/pages/Messages";
import Profile from "@/pages/Profile";
import AdminCreate from "@/pages/admin/Create";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
    //   <AuthenticationRouter>
        <MainLayout />
    //   </AuthenticationRouter>
    ),
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "admins",
        element: <AdminIndex />,
      },
      {
        path: "/admins/create",
        element: <AdminCreate />,
      },
      {
        path: "/categories",
        element: <CategoryIndex />,
      },
      {
        path: "/courses",
        element: <CourseIndex />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
  // {
  //   path: "*",
  //   element: <Home/>
  // }
]);

export default router;
