/** CUSTOM COMPONENTS */
import CreateTodoForm from "@src/components/widgets/TodoForm";

/** HOOKS */
import useCreateHandler from "@src/hooks/useCreateHandler";

/** LIBRARIES */
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

const {
  CREATE: { FORM },
} = PAGE_CONTENT;

const CreateTodoPage = () => {
  const navigate = useNavigate();
  const { createTodo } = useCreateHandler();
  const [title, setTitle] = useState("");
  const [completed, setCompleted] = useState(false);

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

      createTodo({ completed, title });
      navigate("..");
    },
    [completed, createTodo, navigate, title]
  );

  return (
    <CreateTodoForm
      completed={completed}
      formContent={FORM}
      title={title}
      onCheckboxChange={toggleCheckboxHandler}
      onInputChange={changeInputHandler}
      onSubmit={handleSubmit}
    />
  );
};

export default CreateTodoPage;
