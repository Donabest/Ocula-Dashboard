import { useNavigate } from "react-router-dom";
import { useUser } from "../Features/Authentication/useUser";
import { useEffect, type ReactNode } from "react";
import Spinner from "../ui/Spinner";

function ProtectedRouteLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  //   if not authenticated redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) navigate("/login");
    },
    [isAuthenticated, isLoading, navigate],
  );
  //   Loading User Account
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen ">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRouteLayout;
