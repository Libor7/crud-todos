/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

/** STYLED COMPONENTS */
import StyledNonExistingTodo from "../styled/todos/StyledNonExistingTodo";

const NonExistingTodo = () => {
  return (
    <StyledNonExistingTodo>
      {PAGE_CONTENT.TODO.NON_EXISTING}
    </StyledNonExistingTodo>
  );
};

export default NonExistingTodo;
