/** CUSTOM COMPONENTS */
import NoTodosFound from "@src/components/widgets/NoTodosFound";
import Todo from "@src/components/widgets/Todo";

/** HOOKS */
import usePagination from "@src/hooks/usePagination";

/** LIBRARIES */
import { useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLoaderData, useNavigation } from "react-router-dom";

/** MODELS */
import { type ITodosLoaderResponse } from "@src/models/todos";

/** OTHER */
import { type RootState, useAppDispatch } from "@src/store";
import { todosActions } from "@src/store/todos";
import { TODO_WIDTH } from "@src/utils/constants";

/** STYLED COMPONENTS */
import StyledList from "@src/components/styled/StyledList";
import StyledPagination from "@src/components/styled/StyledPagination";

const TodosPage = () => {
  const appDispatch = useAppDispatch();
  const { state } = useNavigation();
  const { data: fetchedTodos } = useLoaderData() as ITodosLoaderResponse;
  const { itemsToDisplay, recordsPerPage, rows, ...other } = usePagination();
  const {
    todos,
    pagination: { currentPage },
  } = useSelector(({ todos }: RootState) => todos);

  const processingCompleted = state === "idle";

  const pageCount = useMemo(
    () => Math.ceil(todos.length / recordsPerPage),
    [recordsPerPage, todos.length]
  );

  useEffect(() => {
    if (fetchedTodos) appDispatch(todosActions.setTodos(fetchedTodos));
  }, [appDispatch, fetchedTodos]);

  useEffect(() => {
    if (itemsToDisplay.length === 0)
      appDispatch(todosActions.setCurrentPage(pageCount));
  }, [
    appDispatch,
    currentPage,
    itemsToDisplay.length,
    pageCount,
    recordsPerPage,
  ]);

  return (
    <>
      {processingCompleted && todos.length === 0 && <NoTodosFound />}
      {todos.length > 0 && (
        <>
          <StyledList gap={0.5} rows={rows} itemwidth={TODO_WIDTH}>
            {itemsToDisplay.map((todo) => (
              <Todo
                key={todo.id}
                todo={todo}
              />
            ))}
          </StyledList>
          <StyledPagination
            count={pageCount}
            showFirstButton
            showLastButton
            size="large"
            {...other}
          />
        </>
      )}
    </>
  );
};

export default TodosPage;
