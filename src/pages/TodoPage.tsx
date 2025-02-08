/** CUSTOM COMPONENTS */
import ExistingTodo from "@src/components/widgets/todos/ExistingTodo";
import NonExistingTodo from "@src/components/widgets/todos/NonExistingTodo";

/** LIBRARIES */
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

/** OTHER */
import { type RootState } from "@src/store";

const TodoPage = () => {
  const { id } = useParams() as { id: string };

  const todo = useSelector(({ todos }: RootState) =>
    todos.todos.find((todo) => todo.id.toString() === id)
  );

  if (!todo) return <NonExistingTodo />;

  return <ExistingTodo todo={todo} />;
};

export default TodoPage;
