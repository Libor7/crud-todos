/** STYLES */
import { styled } from "@mui/material/styles";

interface StyledTodoFormProps {
  completed: number;
}

const StyledTodoForm = styled("form")<StyledTodoFormProps>(
  ({ completed, theme }) => {
    const color =
      completed > 0 ? theme.palette.primary.main : theme.palette.secondary.main;

    return {
      color,
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
      padding: "3em",

      "& .MuiFormControlLabel-root > .MuiTypography-root": {
        fontSize: "1.25em",
      },

      "& .MuiOutlinedInput-root.Mui-focused fieldset": {
        border: `2px solid ${color}`,
        outline: "none",
      },

      "& .MuiInputLabel-root.Mui-focused": {
        color,
      },

      "& > .MuiButtonBase-root": {
        backgroundColor: color,
        border: `2px solid ${color}`,
        color: theme.palette.primary.contrastText,
        fontSize: "2em",
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

export default StyledTodoForm;
