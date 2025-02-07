/** LIBRARIES */
import { useSelector } from "react-redux";
import { Navigate, Outlet, useLocation } from "react-router-dom";

/** OTHER */
import { type RootState } from "@src/store";

const RouteGuard = () => {
  const { pathname } = useLocation();
  const { todos } = useSelector(({ todos }: RootState) => todos);

  const todoId = pathname.split("/").find((segment) => Number(segment) > 0);
  const isExistingId = todos.some(({ id }) => id.toString() === todoId);

  if (!isExistingId) {
    return <Navigate to="/todos" replace />;
  } else {
    return <Outlet />;
  }
};

export default RouteGuard;
