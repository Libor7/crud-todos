/** CUSTOM COMPONENTS */
import Header from "@src/components/widgets/Header";
import Message from "@src/components/UI/Message";

/** LIBRARIES */
import { useCallback } from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";

/** OTHER */
import { type RootState, useAppDispatch } from "@src/store";
import { commonActions } from "@src/store/common";

/** STYLED COMPONENTS */
import StyledMain from "@src/components/styled/StyledMain";

const AppLayout = () => {
  const appDispatch = useAppDispatch();
  const {
    alert: { colorMode, text },
  } = useSelector(({ common }: RootState) => common);

  const closeAlertHandler = useCallback(
    () =>
      appDispatch(
        commonActions.setAlert({
          colorMode: "success",
          text: null,
        })
      ),
    [appDispatch]
  );

  return (
    <>
      <Header />
      <StyledMain>
        <Outlet />
      </StyledMain>
      {text && (
        <Message message={text} mode={colorMode} onClose={closeAlertHandler} />
      )}
    </>
  );
};

export default AppLayout;
