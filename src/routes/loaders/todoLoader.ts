/** LIBRARIES */
import { type LoaderFunction } from "react-router-dom";

/** MODELS */
import { Mode } from "@src/models/common";

/** OTHER */
import store from "@src/store";
import { todosActions } from "@src/store/todos";

export const loader: LoaderFunction = async ({ params }) => {
  const {
    todos: { todos },
  } = await store.getState();

  const foundTodo = todos.find(({ id }) => id == params.id);

  if (foundTodo) store.dispatch(todosActions.setMode(Mode.READ));

  return {
    foundTodo,
  };
};
