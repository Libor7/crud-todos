/** CUSTOM COMPONENTS */
import EditTodoForm from "@src/components/widgets/todos/TodoForm";

/** HOOKS */
import useUpdateHandler from "@src/hooks/useUpdateHandler";

/** LIBRARIES */
import {
  type ChangeEvent,
  type FormEvent,
  useCallback,
  useMemo,
  useState,
} from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

/** OTHER */
import { type RootState } from "@src/store";
import PAGE_CONTENT from "@src/utils/constants";

const {
  EDIT: { FORM },
} = PAGE_CONTENT;

const EditTodoPage = () => {
  const navigate = useNavigate();
  const { changeTodo } = useUpdateHandler();
  const { id } = useParams();
  const { todos } = useSelector(({ todos }: RootState) => todos);

  const editedTodo = useMemo(
    () => todos.find((todo) => todo.id.toString() === id),
    [id, todos]
  );

  const [title, setTitle] = useState(editedTodo?.title);
  const [completed, setCompleted] = useState(editedTodo?.completed);

  const changeInputHandler = useCallback(
    ({ currentTarget }: ChangeEvent<HTMLInputElement>) =>
      setTitle(currentTarget.value),
    []
  );

  const toggleCheckboxHandler = useCallback(
    () => setCompleted((prevState) => !prevState),
    []
  );

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();

      changeTodo({
        id: id!.toString(),
        userId: import.meta.env.VITE_LOGGED_IN_USER_ID,
        completed,
        title,
      });
      navigate("..");
    },
    [changeTodo, completed, id, navigate, title]
  );

  return (
    <EditTodoForm
      completed={completed!}
      formContent={FORM}
      title={title!}
      onCheckboxChange={toggleCheckboxHandler}
      onInputChange={changeInputHandler}
      onSubmit={handleSubmit}
    />
  );
};

export default EditTodoPage;
