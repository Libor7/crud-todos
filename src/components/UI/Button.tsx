/** COMPONENTS */
import Button, { type ButtonProps } from "@mui/material/Button";

/** LIBRARIES */
import { type FC } from "react";

const ButtonComp: FC<ButtonProps> = ({
  type = "submit",
  variant = "contained",
  ...otherProps
}) => {
  return (
    <Button disableElevation type={type} variant={variant} {...otherProps} />
  );
};

export default ButtonComp;
