/** CUSTOM COMPONENTS */
import Actions from "@src/components/layouts/Actions";
import AppLayout from "@src/components/layouts/AppLayout";
import Error from "@src/pages/ErrorPage";

/** LIBRARIES */
import { lazy } from "react";
import {
  createBrowserRouter,
  LoaderFunctionArgs,
  Navigate,
  redirect,
  RouterProvider,
} from "react-router-dom";

/** MODELS */
import { Path } from "@src/models/common";

/** STYLED COMPONENTS */
import LoadingSpinner from "@src/components/styled/StyledLoader";

const Home = lazy(() => import("@src/pages/HomePage"));
const Todos = lazy(() => import("@src/pages/TodosPage"));
const CreateTodo = lazy(() => import("@src/pages/CreateTodoPage"));
const Todo = lazy(() => import("@src/pages/TodoPage"));
const EditTodo = lazy(() => import("@src/pages/EditTodoPage"));

const router = createBrowserRouter(
  [
    {
      path: Path.BASE,
      element: <AppLayout />,
      hydrateFallbackElement: <LoadingSpinner size="5em" />,
      errorElement: <Error />,
      children: [
        { index: true, loader: async () => redirect(Path.HOME) },
        {
          path: Path.HOME,
          element: <Home />,
        },
        {
          path: Path.TODOS,
          element: <Actions />,
          children: [
            {
              index: true,
              element: <Todos />,
              loader: ({ request, params }: LoaderFunctionArgs) =>
                import("@src/routes/loaders/todosLoader").then((module) =>
                  module.loader({ request, params })
                ),
            },
            {
              path: Path.NEW,
              element: <CreateTodo />,
              loader: ({ request, params }: LoaderFunctionArgs) =>
                import("@src/routes/loaders/createTodoLoader").then((module) =>
                  module.loader({ request, params })
                ),
            },
            {
              path: Path.TODO_ID,
              children: [
                {
                  index: true,
                  element: <Todo />,
                  loader: ({ request, params }: LoaderFunctionArgs) =>
                    import("@src/routes/loaders/todoLoader").then((module) =>
                      module.loader({ request, params })
                    ),
                },
                {
                  path: Path.EDIT,
                  element: <EditTodo />,
                  loader: ({ request, params }: LoaderFunctionArgs) =>
                    import("@src/routes/loaders/editTodoLoader").then(
                      (module) => module.loader({ request, params })
                    ),
                },
              ],
            },
          ],
        },
      ],
    },
    {
      path: "*",
      element: <Navigate to={Path.BASE} />,
    },
  ],
  {
    future: {
      v7_partialHydration: true,
    },
  }
);

const Routes = () => <RouterProvider router={router} />;

export default Routes;
