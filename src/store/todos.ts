/** LIBRARIES */
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

/** MODELS */
import { Mode } from "@src/models/common";
import {
  type UpdateTodoPayload,
  type ITodo,
  type ITodosState,
} from "@src/models/todos";

/** OTHER */
import { INITIAL_PAGE } from "@src/utils/constants";

const initialTodosState: ITodosState = {
  mode: Mode.INITIAL,
  pagination: {
    currentPage: INITIAL_PAGE,
  },
  todos: [],
};

const todosSlice = createSlice({
  name: "todos",
  initialState: initialTodosState,
  reducers: {
    setMode: (state, { payload }: PayloadAction<Mode>) => ({
      ...state,
      mode: payload,
    }),
    setCurrentPage: (state, { payload }: PayloadAction<number>) => ({
      ...state,
      pagination: {
        ...state.pagination,
        currentPage: payload,
      },
    }),
    addTodo: (state, { payload }: PayloadAction<ITodo>) => ({
      ...state,
      todos: [...state.todos, payload],
    }),
    removeTodo: (state, { payload }: PayloadAction<string>) => ({
      ...state,
      todos: state.todos.filter(({ id }: ITodo) => id.toString() !== payload),
    }),
    updateTodo: (state, { payload }: PayloadAction<UpdateTodoPayload>) => {
      const todoIndex = state.todos.findIndex(({ id }) => id.toString() === payload.id);

      const updatedTodo = {
        ...state.todos[todoIndex],
        ...payload,
      };

      return {
        ...state,
        todos: state.todos.map((todo, index) =>
          index === todoIndex ? updatedTodo : todo
        ),
      };
    },
    setTodos: (state, { payload }: PayloadAction<ITodo[]>) => ({
      ...state,
      todos: payload,
    }),
  },
});

export const todosActions = todosSlice.actions;

export default todosSlice.reducer;
