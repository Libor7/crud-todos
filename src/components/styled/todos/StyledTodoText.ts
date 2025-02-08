/** COMPONENTS */
import ListItemText from "@mui/material/ListItemText";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledTodoText = styled(ListItemText)(() => ({
  alignItems: "center",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  margin: 0,
  padding: "1em 1.5em",
}));

export default StyledTodoText;
