/** LIBRARIES */
import { useMediaQuery, useTheme } from "@mui/material";
import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

/** MODELS */
import { RecordCount, RowsCount } from "@src/models/common";

/** OTHER */
import { useAppDispatch, type RootState } from "@src/store";
import { todosActions } from "@src/store/todos";
import { getItemsForPage } from "@src/utils/util";

const usePagination = () => {
  const appDispatch = useAppDispatch();
  const { breakpoints } = useTheme();
  const {
    pagination: { currentPage },
    todos,
  } = useSelector(({ todos }: RootState) => todos);

  const isMobileSize = useMediaQuery(breakpoints.down("xs"));
  const isTabletSize = useMediaQuery(breakpoints.between("xs", "md"));
  const isNotebookSize = useMediaQuery(breakpoints.between("md", "lg"));

  const recordsPerPage = useMemo(
    () =>
      isMobileSize
        ? RecordCount.MOBILE
        : isTabletSize || isNotebookSize
        ? RecordCount.TABLET
        : RecordCount.DESKTOP,
    [isMobileSize, isNotebookSize, isTabletSize]
  );

  const rowsCount = useMemo(
    () =>
      isMobileSize
        ? RowsCount.MOBILE
        : isTabletSize
        ? RowsCount.TABLET
        : isNotebookSize
        ? RowsCount.NOTEBOOK
        : RowsCount.DESKTOP,
    [isMobileSize, isNotebookSize, isTabletSize]
  );

  const fromIndex = useMemo(
    () => recordsPerPage * currentPage - recordsPerPage,
    [currentPage, recordsPerPage]
  );

  const itemsOnPage = useMemo(
    () =>
      todos.length > recordsPerPage
        ? getItemsForPage(todos, fromIndex, recordsPerPage + fromIndex)
        : todos,
    [fromIndex, recordsPerPage, todos]
  );

  const pageChangeHandler = useCallback(
    (_event: React.ChangeEvent<unknown>, value: number) =>
      appDispatch(todosActions.setCurrentPage(value)),
    [appDispatch]
  );

  return {
    itemsToDisplay: itemsOnPage,
    onChange: pageChangeHandler,
    page: currentPage,
    recordsPerPage,
    rows: rowsCount,
    siblingCount: isMobileSize ? 0 : isTabletSize ? 2 : 3,
  };
};

export default usePagination;
