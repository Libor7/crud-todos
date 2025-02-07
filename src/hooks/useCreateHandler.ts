/** LIBRARIES */
import { useCallback } from "react";

/** MODELS */
import { type RequiredTodoProperties, type ITodo } from "@src/models/todos";

/** OTHER */
import { createTodo } from "@src/services/todosAPI";
import { useAppDispatch } from "@src/store";
import { commonActions } from "@src/store/common";
import { todosActions } from "@src/store/todos";
import PAGE_CONTENT from "@src/utils/constants";
import { processError } from "@src/utils/util";

const useCreateHandler = () => {
  const appDispatch = useAppDispatch();

  const createTodoHandler = useCallback(
    ({ completed, title }: Omit<ITodo, RequiredTodoProperties>) =>
      createTodo({ completed, title })
        .then(({ data }) => {
          const uniqueId = (
            Date.now() + Math.floor(Math.random() * 1000)
          ).toString();
          appDispatch(
            todosActions.addTodo({
              ...(data as ITodo),
              id: uniqueId,
              userId: import.meta.env.LOGGED_IN_USER_ID,
            })
          );
          appDispatch(
            commonActions.setAlert({
              colorMode: "success",
              text: PAGE_CONTENT.SHARED.MESSAGE.TODO_SUCCESS_CREATE,
            })
          );
        })
        .catch((error) => {
          appDispatch(
            commonActions.setAlert({
              colorMode: "error",
              text: processError(error),
            })
          );
        }),
    [appDispatch]
  );

  return {
    createTodo: createTodoHandler,
  };
};

export default useCreateHandler;
