/** COMPONENTS */
import Button from "@mui/material/Button";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledActionButton = styled(Button)(({ theme }) => ({
  height: "4rem",
  width: "4rem",

  [theme.breakpoints.down("xxs")]: {
    width: "100%",
  },
}));

export default StyledActionButton;
