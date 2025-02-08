/** LIBRARIES */
import { type LoaderFunction } from "react-router-dom";

/** MODELS */
import { Mode } from "@src/models/common";

/** OTHER */
import store from "@src/store";
import { todosActions } from "@src/store/todos";

export const loader: LoaderFunction = () => {
  store.dispatch(todosActions.setMode(Mode.EDIT));
  return {};
};
