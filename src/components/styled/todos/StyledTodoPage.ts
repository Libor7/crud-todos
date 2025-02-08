/** STYLES */
import { styled } from "@mui/material/styles";

interface StyledTodoPageProps {
  completed: number;
}

const StyledTodoPage = styled("div")<StyledTodoPageProps>(
  ({ completed, theme }) => {
    const color =
      completed > 0 ? theme.palette.primary.main : theme.palette.secondary.main;

    return {
      color,
      fontSize: "1.75em",
      margin: "4em",
      maxWidth: "500px",
      padding: "2em 3em",
      textAlign: "center",

      "& .MuiBox-root": {
        display: "flex",
        justifyContent: "end",
      },

      "& svg": {
        color,
        height: "2em",
        width: "2em",
      },

      [theme.breakpoints.up("xs")]: {
        border: `2px solid ${color}`,
        borderRadius: "0.5em",
      },
    };
  }
);

export default StyledTodoPage;
