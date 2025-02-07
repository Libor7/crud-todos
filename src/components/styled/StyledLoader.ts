/** COMPONENTS */
import CircularProgress from "@mui/material/CircularProgress";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledLoader = styled(CircularProgress)(({ theme }) => ({
  color: theme.palette.primary.main,
  position: "absolute",
  top: "calc(50% - 2.5em)",
  left: "calc(50% - 2.5em)",
}));

export default StyledLoader;
