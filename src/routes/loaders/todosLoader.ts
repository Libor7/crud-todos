/** LIBRARIES */
import axios from "axios";
import { type LoaderFunction } from "react-router-dom";

/** MODELS */
import { Mode, Path } from "@src/models/common";

/** OTHER */
import store from "@src/store";
import { todosActions } from "@src/store/todos";
import { processError } from "@src/utils/util";

const axiosGetTodosInstance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

axiosGetTodosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(processError(error))
);

export const loader: LoaderFunction = () => {
  const {
    todos: { todos },
  } = store.getState();

  if (todos.length === 0) {
    return axiosGetTodosInstance
      .get(Path.TODOS)
      .then(({ data }) => {
        store.dispatch(todosActions.setMode(Mode.READ_ALL));
        return {
          data,
        };
      })
      .catch((error) => {
        throw new Error(processError(error));
      });
  } else {
    store.dispatch(todosActions.setMode(Mode.READ_ALL));
    return {};
  }
};
