/** CUSTOM COMPONENTS */
import AppLayout from "@src/components/layouts/AppLayout";

/** LIBRARIES */
import { useRouteError } from "react-router-dom";

/** MODELS */
import { type ICustomError } from "@src/models/common";

/** STYLED COMPONENTS */
import StyledSection from "@src/components/styled/StyledSection";

const ErrorPage = () => {
  const { message } = useRouteError() as ICustomError;
  const [heading, text] = message.split(": ");

  return (
    <>
      <AppLayout />
      <StyledSection>
        <h2>{heading}</h2>
        <p>{text}</p>
      </StyledSection>
    </>
  );
};

export default ErrorPage;
