/** LIBRARIES */
import { type FC } from "react";

/** MODELS */
import { type ActionButtonConfig } from "@src/models/common";

/** STYLED COMPONENTS */
import StyledActionButton from "@src/components/styled/StyledActionButton";

interface ActionButtonProps {
  actionButton: Omit<ActionButtonConfig, "displayed">;
}

const ActionButton: FC<ActionButtonProps> = ({
  actionButton: { icon: Icon, ...otherProps },
}) => {
  return (
    <StyledActionButton disableElevation variant="contained" {...otherProps}>
      <Icon fontSize="large" />
    </StyledActionButton>
  );
};

export default ActionButton;
