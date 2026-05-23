import { useNavigate } from "react-router-dom";
import { useUser } from "../Features/Authentication/useUser";
import { type ReactNode } from "react";
import Spinner from "../ui/Spinner";

function ProtectedRouteLayout({ children }: { children: ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  //   if not authenticated redirect to login page
  if (!isAuthenticated && !isLoading) navigate("/Login");

  //   Loading User Account
  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-200">
        <Spinner />
      </div>
    );

  if (isAuthenticated) return children;
}

export default ProtectedRouteLayout;
