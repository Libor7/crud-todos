/** COMPONENTS */
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";

/** HOOKS */
import useUpdateHandler from "@src/hooks/useUpdateHandler";
import useDeleteHandler from "@src/hooks/useDeleteHandler";

/** ICONS */
import Delete from "@mui/icons-material/Delete";
import Edit from "@mui/icons-material/Edit";

/** LIBRARIES */
import { type FC } from "react";
import { useNavigate } from "react-router-dom";

/** MODELS */
import { Path } from "@src/models/common";
import { type ITodo } from "@src/models/todos";

/** OTHER */
import { MAX_CHARACTERS } from "@src/utils/constants";
import { getShortenedText } from "@src/utils/util";

/** STYLED COMPONENTS */
import StyledTodo from "@src/components/styled/todos/StyledTodo";
import StyledTodoText from "@src/components/styled/todos/StyledTodoText";
import StyledTodoActions from "@src/components/styled/todos/StyledTodoActions";

interface ITodoProps {
  todo: ITodo;
}

const Todo: FC<ITodoProps> = ({ todo: { completed, id, title } }) => {
  const navigate = useNavigate();
  const { changeTodo } = useUpdateHandler();
  const { deleteTodo } = useDeleteHandler();

  return (
    <StyledTodo
      completed={completed ? 1 : 0}
      onKeyDown={({ key }) => key === "Enter" && navigate(id.toString())}
      tabIndex={0}
    >
      <StyledTodoText
        primary={getShortenedText(title, MAX_CHARACTERS)}
        onClick={() => navigate(id.toString())}
      />
      <StyledTodoActions>
        <Checkbox
          checked={completed}
          onChange={() =>
            changeTodo({
              id: id.toString(),
              userId: import.meta.env.LOGGED_IN_USER_ID,
              completed: !completed,
            })
          }
          color="default"
        />
        <IconButton edge="end" onClick={() => navigate(`${id}/${Path.EDIT}`)}>
          <Edit />
        </IconButton>
        <IconButton edge="end" onClick={() => deleteTodo(id.toString())}>
          <Delete />
        </IconButton>
      </StyledTodoActions>
    </StyledTodo>
  );
};

export default Todo;
