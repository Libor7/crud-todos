/** COMPONENTS */
import Pagination from "@mui/material/Pagination";

/** LIBRARIES */
import { styled } from "@mui/system";

const StyledPagination = styled(Pagination)(() => ({
  display: "flex",
  justifyContent: "center",
  margin: "0.75em",

  "& > .MuiPagination-ul": {
    justifyContent: "center",
  },
}));

export default StyledPagination;
