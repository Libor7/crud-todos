/** COMPONENTS */
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

/** CUSTOM COMPONENTS */
import Button from "@src/components/UI/Button";

/** LIBRARIES */
import { type FormEvent, type FC, type ChangeEvent } from "react";

/** MODELS */
import { type ITodoFormContent } from "@src/models/todos";

/** OTHER */
import { TODO_TITLE_MAX_LENGTH } from "@src/utils/constants";

/** STYLED COMPONENTS */
import StyledTodoForm from "@src/components/styled/todos/StyledTodoForm";

interface TodoFormProps {
  completed: boolean;
  formContent: ITodoFormContent;
  onCheckboxChange: () => void;
  onInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (event: FormEvent) => void;
  title: string;
}

const TodoForm: FC<TodoFormProps> = ({
  completed,
  formContent: { BUTTON_LABEL, FORM_TITLE, CHECKBOX_LABEL, INPUT_LABEL },
  onCheckboxChange,
  onInputChange,
  onSubmit,
  title,
}) => {
  return (
    <StyledTodoForm completed={completed ? 1 : 0} onSubmit={onSubmit}>
      <Typography variant="h4" component="h2" gutterBottom>
        {FORM_TITLE}
      </Typography>
      <TextField
        label={INPUT_LABEL}
        fullWidth
        required
        value={title}
        onChange={onInputChange}
        slotProps={{
          htmlInput: {
            maxLength: TODO_TITLE_MAX_LENGTH,
          },
        }}
      />
      <FormControlLabel
        control={<Checkbox checked={completed} onChange={onCheckboxChange} />}
        label={CHECKBOX_LABEL}
      />
      <Button>{BUTTON_LABEL}</Button>
    </StyledTodoForm>
  );
};

export default TodoForm;
