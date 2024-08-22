import { FC, ReactNode } from "react";
import { useAuth } from "@/utils/hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";

type Props = {
  children: ReactNode;
};

const AuthenticationRouter: FC<Props> = ({ children }) => {
  const location = useLocation();
  const { user, isLoading } = useAuth();

  if (isLoading) return "loading";

  if (user) return <>{children}</>;

  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AuthenticationRouter;
