/** LIBRARIES */
import { useCallback } from "react";

/** OTHER */
import { deleteTodo } from "@src/services/todosAPI";
import { useAppDispatch } from "@src/store";
import { commonActions } from "@src/store/common";
import { todosActions } from "@src/store/todos";
import PAGE_CONTENT from "@src/utils/constants";
import { processError } from "@src/utils/util";

const useDeleteHandler = () => {
  const appDispatch = useAppDispatch();

  const deleteTodoHandler = useCallback(
    (id: string) =>
      deleteTodo(id)
        .then(() => {
          appDispatch(todosActions.removeTodo(id));
          appDispatch(
            commonActions.setAlert({
              colorMode: "success",
              text: PAGE_CONTENT.SHARED.MESSAGE.TODO_SUCCESS_DELETE,
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
    deleteTodo: deleteTodoHandler,
  };
};

export default useDeleteHandler;
