/** MODELS */
import { type ILink } from "@src/models/common";

export const INITIAL_PAGE = 1;
export const MAX_CHARACTERS = 40;
export const TODO_WIDTH = 200;
export const TODO_TITLE_MAX_LENGTH = 100;

export const NAVIGATION_LINKS: ILink[] = [
  {
    label: "Home",
    to: "home",
  },
  {
    label: "Todos",
    to: "todos",
  },
];

const TRY_LATER = "Please try again later";

const PAGE_CONTENT = {
  APP_LAYOUT: {
    APP_TITLE: "Todos App",
  },
  CREATE: {
    FORM: {
      BUTTON_LABEL: "Create",
      FORM_TITLE: "Create New Todo",
      CHECKBOX_LABEL: "Completed",
      INPUT_LABEL: "Todo title",
    },
  },
  EDIT: {
    FORM: {
      BUTTON_LABEL: "Change",
      FORM_TITLE: "Change Todo",
      CHECKBOX_LABEL: "Completed",
      INPUT_LABEL: "Todo title",
    },
  },
  ERROR: {
    MESSAGE: {
      GENERIC: `An unknown error occurred: Unsuccessful request, ${TRY_LATER.toLowerCase()}`,
      NO_RESPONSE:
        "No response received: Error happened during the request sending",
      RESPONSE: {
        400: "Bad Request: Please check your request",
        401: "Unauthorized: Please log in",
        403: "Forbidden: You don't have permission to access this resource",
        404: "Not Found: The requested resource was not found",
        422: "Unprocessable Entity: There was an error with your input",
        500: `Internal Server Error: ${TRY_LATER}`,
        502: "Bad Gateway: The server is temporarily unavailable",
        503: "Service Unavailable: The server is under maintenance",
        504: `Gateway Timeout: ${TRY_LATER}`,
        DEFAULT: `An unknown error occurred: ${TRY_LATER}`,
      },
    },
  },
  HOME: {
    HEADING: "Become more productive with our Todos App",
    PARAGRAPH: "Track your goals and their progress",
  },
  SHARED: {
    MESSAGE: {
      TODO_SUCCESS_CREATE: "New Todo was successfully created. Good Luck",
      TODO_SUCCESS_DELETE: "Todo was removed successfully. Great job",
      TODO_SUCCESS_UPDATE: "Data successfully changed",
    },
  },
  TODO: {
    NON_EXISTING: "Non-existing todo in url. Choose a todo from list, or create a new one.",
  },
  TODOS: {
    NO_TODOS_FOUND:
      "Currently you don't have any Todos. Create some new, or just relax.",
  },
};

Object.freeze(PAGE_CONTENT);

export default PAGE_CONTENT;
