/** COMPONENTS */
import Toolbar from "@mui/material/Toolbar";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  "& > .MuiTypography-root": {
    marginRight: "1em",
    letterSpacing: "0.2rem",
  },

  "& > .MuiBox-root": {
    display: "flex",
  },

  [theme.breakpoints.up("md")]: {
    justifyContent: "space-evenly",
  },
}));

export default StyledToolbar;
