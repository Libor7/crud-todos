/** COMPONENTS */
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";

/** HOOKS */
import useUpdateHandler from "@src/hooks/useUpdateHandler";

/** LIBRARIES */
import { type FC } from "react";

/** MODELS */
import { type ITodo } from "@src/models/todos";

/** STYLED COMPONENTS */
import StyledTodoPage from "@src/components/styled/todos/StyledTodoPage";

interface ExistingTodoProps {
  todo: ITodo;
}

const ExistingTodo: FC<ExistingTodoProps> = ({ todo: { completed, id, title} }) => {
  const { changeTodo } = useUpdateHandler();
  
  return (
    <StyledTodoPage completed={completed ? 1 : 0}>
      <p>{title}</p>
      <Box>
        <Checkbox
          checked={completed}
          onChange={() =>
            changeTodo({
              id: id.toString(),
              userId: import.meta.env.VITE_LOGGED_IN_USER_ID,
              completed: !completed,
            })
          }
        />
      </Box>
    </StyledTodoPage>
  );
};

export default ExistingTodo;
