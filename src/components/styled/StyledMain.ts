/** STYLES */
import { styled } from "@mui/material/styles";

const StyledMain = styled("main")(({ theme }) => ({
  alignItems: "center",
  color: theme.palette.primary.main,
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  justifyContent: "center",
  order: 2,
}));

export default StyledMain;
