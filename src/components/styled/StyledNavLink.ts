/** LIBRARIES */
import { NavLink } from "react-router-dom";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledNavLink = styled(NavLink)(({ theme }) => ({
  "&.active": {
    backgroundColor: theme.palette.primary.dark,
  },

  "& > .MuiButtonBase-root": {
    color: theme.palette.primary.contrastText,
    fontSize: "1em",
    margin: "1em 0.5em",
  },
}));

export default StyledNavLink;
