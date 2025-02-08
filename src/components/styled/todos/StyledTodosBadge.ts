/** CUSTOM COMPONENTS */
import BadgeComp from "@src/components/UI/Badge";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledTodosBadge = styled(BadgeComp)(({ theme }) => ({
  display: "none",

  [theme.breakpoints.up("sm")]: {
    display: "flex",
    "&.MuiBadge-root": {
      marginLeft: "7em",
    },
  },

  [theme.breakpoints.up("md")]: {
    "&.MuiBadge-root": {
        marginLeft: 0,
    },
  },
}));

export default StyledTodosBadge;
