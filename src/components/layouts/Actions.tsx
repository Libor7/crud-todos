/** CUSTOM COMPONENTS */
import ActionButton from "@src/components/UI/ActionButton";

/** HOOKS */
import useActions from "@src/hooks/useActions";

/** LIBRARIES */
import { Outlet, useParams } from "react-router-dom";

/** STYLED COMPONENTS */
import StyledActionBar from "@src/components/styled/actions/StyledActionBar";
import StyledContentContainer from "@src/components/styled/StyledContentContainer";

const Actions = () => {
  const { id } = useParams();
  const actionButtonsConfig = useActions(id!);

  return (
    <>
      <StyledActionBar>
        {actionButtonsConfig.map(
          ({ displayed, ...otherProps }, index) =>
            displayed && <ActionButton key={index} actionButton={otherProps} />
        )}
      </StyledActionBar>
      <StyledContentContainer>
        <Outlet />
      </StyledContentContainer>
    </>
  );
};

export default Actions;
