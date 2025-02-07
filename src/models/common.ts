/** COMPONENTS */
import { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type ElementType } from "react";

export enum Mode {
  INITIAL,
  CREATE,
  EDIT,
  READ,
  READ_ALL,
}

export enum Path {
  BASE = "/",
  EDIT = "edit",
  HOME = "home",
  TODO_ID = ":id",
  NEW = "new",
  TODOS = "todos",
}

export enum RecordCount {
  MOBILE = 3,
  TABLET = 5,
  DESKTOP = 10,
}

export enum RowsCount {
  MOBILE = 1,
  TABLET,
  NOTEBOOK,
  DESKTOP,
}

export interface IAlertState {
  colorMode: ColorMode;
  text: string | null;
}

export interface ICommonState {
  alert: IAlertState;
}

export interface ICustomError {
  message: string;
}

export interface ILink {
  label: string;
  to: string;
}

export type ActionButtonConfig = ButtonProps & {
  displayed: boolean;
  icon: ElementType;
};

export type ColorMode =
  | "error"
  | "info"
  | "primary"
  | "secondary"
  | "success"
  | "warning";
