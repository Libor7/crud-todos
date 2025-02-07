/** COMPONENTS */
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

/** HOOKS */
import useUpdateHandler from "@src/hooks/useUpdateHandler";

/** LIBRARIES */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { useLoaderData } from "react-router-dom";

/** MODELS */
import { type ITodoId, type ITodo } from "@src/models/todos";

/** OTHER */
import { type RootState } from "@src/store";

/** STYLED COMPONENTS */
import StyledTodoPage from "@src/components/styled/StyledTodoPage";

const TodoPage = () => {
  const { todoId } = useLoaderData() as ITodoId;
  const { changeTodo } = useUpdateHandler();
  const { todos } = useSelector(({ todos }: RootState) => todos);

  const { completed, title }: ITodo = useMemo(
    () => todos.find(({ id }) => id.toString() === todoId),
    [todoId, todos]
  )!;

  return (
    <StyledTodoPage completed={completed ? 1 : 0}>
      <p>{title}</p>
      <Box>
        <Checkbox
          checked={completed}
          onChange={() =>
            changeTodo({
              id: todoId,
              userId: import.meta.env.LOGGED_IN_USER_ID,
              completed: !completed,
            })
          }
        />
      </Box>
    </StyledTodoPage>
  );
};

export default TodoPage;
