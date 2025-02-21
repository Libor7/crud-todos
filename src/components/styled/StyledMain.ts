/** STYLES */
import { styled } from "@mui/material/styles";

interface StyledMainProps {
  todosCount: number;
}

const StyledMain = styled("main")<StyledMainProps>(({ todosCount, theme }) => ({
  alignItems: "center",
  color: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  padding: todosCount ? 0 : "2em",
  order: 2,
}));

export default StyledMain;
