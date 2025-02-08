/** MODELS */
import { Mode } from "./common";

export interface IPaginationConfig {
  currentPage: number;
}

export interface ITodo {
  completed: boolean;
  id: string;
  title: string;
  userId: number;
}

export interface ITodoFormContent {
  BUTTON_LABEL: string;
  FORM_TITLE: string;
  CHECKBOX_LABEL: string;
  INPUT_LABEL: string;
}

export interface ITodosLoaderResponse {
  data: ITodo[];
}

export interface ITodosState {
  mode: Mode;
  pagination: IPaginationConfig;
  todos: ITodo[];
}

export type CreateTodoPayload = Omit<ITodo, RequiredTodoProperties> &
  Pick<ITodo, "userId">;

export type RequiredTodoProperties = "id" | "userId";

export type UpdateTodoPayload = Partial<Omit<ITodo, RequiredTodoProperties>> &
  Pick<ITodo, RequiredTodoProperties>;
