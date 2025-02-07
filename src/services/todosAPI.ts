/** LIBRARIES */
import axios from "axios";

/** MODELS */
import { Path } from "@src/models/common";
import { type ITodo, type RequiredTodoProperties } from "@src/models/todos";

const axiosCreateTodoInstance = axios.create({
    baseURL: import.meta.env.VITE_DOMAIN,
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
  
  export const createTodo = async (
    data: Partial<Omit<ITodo, RequiredTodoProperties>>
  ) =>
    await axiosCreateTodoInstance.post(
      `${Path.TODOS}`,
      JSON.stringify({
        ...data,
      })
    );

const axiosUpdateTodoInstance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
});

export const updateTodo = async (
  id: string,
  data: Partial<Omit<ITodo, RequiredTodoProperties>>
) =>
  await axiosUpdateTodoInstance.patch(
    `${Path.TODOS}/${id}`,
    JSON.stringify({
      ...data,
    })
  );

const axiosDeleteTodoInstance = axios.create({
  baseURL: import.meta.env.VITE_DOMAIN,
  headers: {
    "Content-Type": "application/json",
  },
});

export const deleteTodo = async (id: string) =>
  await axiosDeleteTodoInstance.delete(`${Path.TODOS}/${id}`);
