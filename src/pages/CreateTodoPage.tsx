/** CUSTOM COMPONENTS */
import CreateTodoForm from "@src/components/widgets/todos/TodoForm";

/** HOOKS */
import useCreateHandler from "@src/hooks/useCreateHandler";

/** LIBRARIES */
import { type ChangeEvent, type FormEvent, useCallback, useState } from "react";

/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

const {
  CREATE: { FORM },
} = PAGE_CONTENT;

const CreateTodoPage = () => {
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
    },
    [completed, createTodo, title]
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
