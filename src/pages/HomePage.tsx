/** OTHER */
import PAGE_CONTENT from "@src/utils/constants";

/** STYLED COMPONENTS */
import StyledSection from "@src/components/styled/StyledSection";

const HomePage = () => (
  <StyledSection>
    <h2>{PAGE_CONTENT.HOME.HEADING}</h2>
    <p>{PAGE_CONTENT.HOME.PARAGRAPH}</p>
  </StyledSection>
);

export default HomePage;
