/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

/** STYLES */
import { styled } from "@mui/material/styles";

const StyledDiv = styled("div")(() => ({
  padding: "0 2em",
}));

const HomePage = () => (
  <StyledDiv>
    <h2>{PAGE_CONTENT.HOME.HEADING}</h2>
    <p>{PAGE_CONTENT.HOME.PARAGRAPH}</p>
  </StyledDiv>
);

export default HomePage;
