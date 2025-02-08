/** COMPONENTS */
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

/** CUSTOM COMPONENTS */
import NonExistingTodo from "@src/components/widgets/NonExistingTodo";

/** HOOKS */
import useUpdateHandler from "@src/hooks/useUpdateHandler";

/** LIBRARIES */
import { useLoaderData } from "react-router-dom";

/** MODELS */
import { type ITodo } from "@src/models/todos";

/** STYLED COMPONENTS */
import StyledTodoPage from "@src/components/styled/todos/StyledTodoPage";

const TodoPage = () => {
  const { foundTodo: todo } = useLoaderData() as {
    foundTodo: ITodo | undefined;
  };
  const { changeTodo } = useUpdateHandler();

  return (
    <>
      {!todo && <NonExistingTodo />}
      {todo && (
        <StyledTodoPage completed={todo.completed ? 1 : 0}>
          <p>{todo.title}</p>
          <Box>
            <Checkbox
              checked={todo.completed}
              onChange={() =>
                changeTodo({
                  id: todo.id,
                  userId: import.meta.env.LOGGED_IN_USER_ID,
                  completed: !todo.completed,
                })
              }
            />
          </Box>
        </StyledTodoPage>
      )}
    </>
  );
};

export default TodoPage;
