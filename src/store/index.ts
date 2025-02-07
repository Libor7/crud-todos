/** LIBRARIES */
import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";

/** OTHER */
import commonReducer from "./common";
import todosReducer from "./todos";

const store = configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: { warnAfter: 128 },
      serializableCheck: { warnAfter: 128 },
    }),
  reducer: {
    todos: todosReducer,
    common: commonReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();

export default store;
