/** CUSTOM COMPONENTS */
import ActionButton from "@src/components/UI/ActionButton";

/** HOOKS */
import useDeleteHandler from "@src/hooks/useDeleteHandler";

/** ICONS */
import AddIcon from "@mui/icons-material/Add";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

/** LIBRARIES */
import { useMemo } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate, useParams } from "react-router-dom";

/** MODELS */
import { type ActionButtonConfig, Mode, Path } from "@src/models/common";

/** OTHER */
import { useAppDispatch, type RootState } from "@src/store";
import { todosActions } from "@src/store/todos";

/** STYLED COMPONENTS */
import StyledActionBar from "@src/components/styled/StyledActionBar";
import StyledContentContainer from "@src/components/styled/StyledContentContainer";

const Actions = () => {
  const navigate = useNavigate();
  const appDispatch = useAppDispatch();
  const { id } = useParams();
  const { deleteTodo } = useDeleteHandler();
  const { mode } = useSelector(({ todos }: RootState) => todos);

  const actionButtonsConfig: ActionButtonConfig[] = useMemo(
    () => [
      {
        color: "secondary",
        displayed: [Mode.CREATE, Mode.EDIT, Mode.READ].indexOf(mode) >= 0,
        icon: ArrowBackIcon,
        onClick: () => navigate(-1),
      },
      {
        color: "primary",
        displayed: [Mode.READ, Mode.READ_ALL].indexOf(mode) >= 0,
        icon: AddIcon,
        onClick: () => navigate(`${Path.BASE}${Path.TODOS}/${Path.NEW}`),
      },
      {
        color: "info",
        displayed: [Mode.READ].indexOf(mode) >= 0,
        icon: EditIcon,
        onClick: () => navigate(`${Path.BASE}${Path.TODOS}/${id}/${Path.EDIT}`),
      },
      {
        color: "warning",
        displayed: [Mode.READ, Mode.READ_ALL].indexOf(mode) >= 0,
        icon: DeleteIcon,
        onClick: () => {
          if (mode === Mode.READ) deleteTodo(id!);

          if (mode === Mode.READ_ALL) appDispatch(todosActions.setTodos([]));
        },
      },
    ],
    [appDispatch, deleteTodo, id, mode, navigate]
  );

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
