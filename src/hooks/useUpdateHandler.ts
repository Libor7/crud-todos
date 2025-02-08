/** LIBRARIES */
import { useCallback } from "react";

/** MODELS */
import { type UpdateTodoPayload } from "@src/models/todos";

/** OTHER */
import { updateTodo } from "@src/services/todosAPI";
import { useAppDispatch } from "@src/store";
import { commonActions } from "@src/store/common";
import { todosActions } from "@src/store/todos";
import PAGE_CONTENT from "@src/utils/constants";
import { processError } from "@src/utils/util";

const useUpdateHandler = () => {
  const appDispatch = useAppDispatch();

  const updateTodoHandler = useCallback(
    ({ id, userId, ...rest }: UpdateTodoPayload) =>
      updateTodo(id, rest)
        .then(() => {
          appDispatch(
            todosActions.updateTodo({
              id,
              userId,
              ...rest,
            })
          );
          appDispatch(
            commonActions.setAlert({
              colorMode: "success",
              text: PAGE_CONTENT.SHARED.MESSAGE.TODO_SUCCESS_UPDATE,
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
    changeTodo: updateTodoHandler,
  };
};

export default useUpdateHandler;
