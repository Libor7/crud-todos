/** COMPONENTS */
import IconButton from "@mui/material/IconButton";
import Snackbar, { type SnackbarProps } from "@mui/material/Snackbar";

/** ICONS */
import CloseIcon from "@mui/icons-material/Close";

/** LIBRARIES */
import { useCallback, type FC } from "react";

/** MODELS */
import { type ColorMode } from "@src/models/common";

/** STYLES */
import useTheme from "@mui/material/styles/useTheme";

interface IMessageProps {
  mode: ColorMode;
  onClose: () => void;
}

const Message: FC<SnackbarProps & IMessageProps> = ({
  autoHideDuration = 5000,
  message,
  mode,
  onClose,
  ...otherProps
}) => {
  const { palette } = useTheme();

  const action = (
    <IconButton
      aria-label="close alert"
      color="inherit"
      onClick={onClose}
      size="large"
    >
      <CloseIcon fontSize="medium" />
    </IconButton>
  );

  const setColorMode = useCallback(() => palette[mode].main, [mode, palette]);

  return (
    <Snackbar
      action={action}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      autoHideDuration={autoHideDuration}
      ContentProps={{
        sx: {
          backgroundColor: setColorMode(),
        },
      }}
      message={message}
      onClose={onClose}
      open={Boolean(message)}
      {...otherProps}
    />
  );
};

export default Message;
