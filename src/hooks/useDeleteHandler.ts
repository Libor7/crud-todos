/** LIBRARIES */
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

/** OTHER */
import { deleteTodo } from "@src/services/todosAPI";
import { useAppDispatch } from "@src/store";
import { commonActions } from "@src/store/common";
import { todosActions } from "@src/store/todos";
import PAGE_CONTENT from "@src/utils/constants";
import { processError } from "@src/utils/util";

const useDeleteHandler = (navigateAway = false) => {
  const appDispatch = useAppDispatch();
  const navigate = useNavigate();

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
          if (navigateAway) navigate(-1);
        })
        .catch((error) => {
          appDispatch(
            commonActions.setAlert({
              colorMode: "error",
              text: processError(error),
            })
          );
        }),
    [appDispatch, navigate, navigateAway]
  );

  return {
    deleteTodo: deleteTodoHandler,
  };
};

export default useDeleteHandler;
