/** COMPONENTS */
import ListItem from "@mui/material/ListItem";

/** OTHER */
import { TODO_WIDTH } from "@src/utils/constants";

/** STYLES */
import { darken, styled } from "@mui/material/styles";

interface IStyledTodoProps {
  /**
   * Hack for library Bug - doesn't accept boolean
   * (Warning: Received false for a non-boolean attribute ... )
   */
  completed: number;
}

const StyledTodo = styled(ListItem)<IStyledTodoProps>(
  ({ completed, theme }) => {
    const color =
      completed > 0 ? theme.palette.primary.dark : theme.palette.secondary.dark;

    return {
      backgroundColor: color,
      color: theme.palette.primary.contrastText,
      display: "flex",
      flexDirection: "column",
      height: `${TODO_WIDTH}px`,
      padding: 0,
      width: `${TODO_WIDTH}px`,

      "& > .MuiListItemText-root": {
        width: "100%",
      },

      "&:hover": {
        backgroundColor: darken(color, 0.1),
      },
    };
  }
);

export default StyledTodo;
