/** OTHER */
import { TODO_WIDTH } from "@src/utils/constants";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledTodoActions = styled("div")(({ theme }) => ({
  "& > *": {
    height: TODO_WIDTH / 3,
    margin: 0,
    width: TODO_WIDTH / 3,
  },

  "& svg": {
    color: theme.palette.primary.contrastText,
  },
}));

export default StyledTodoActions;
