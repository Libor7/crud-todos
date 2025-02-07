/** COMPONENTS */
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

/** ICONS */
import ListAltIcon from "@mui/icons-material/ListAlt";

/** LIBRARIES */
import { useSelector } from "react-redux";

/** OTHER */
import { type RootState } from "@src/store";
import PAGE_CONTENT, { NAVIGATION_LINKS } from "@src/utils/constants";

/** STYLED COMPONENTS */
import StyledNavLink from "@src/components/styled/StyledNavLink";
import StyledTodosBadge from "@src/components/styled/StyledTodosBadge";
import StyledToolbar from "@src/components/styled/StyledToolbar";

const Header = () => {
  const { todos } = useSelector(({ todos }: RootState) => todos);

  return (
    <AppBar position="static">
      <StyledToolbar>
        <Typography variant="h4" noWrap>
          {PAGE_CONTENT.APP_LAYOUT.APP_TITLE}
        </Typography>
        <Box>
          {NAVIGATION_LINKS.map(({ label, to }) => (
            <StyledNavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "active" : undefined)}
              tabIndex={-1}
            >
              <Button>{label}</Button>
            </StyledNavLink>
          ))}
        </Box>
          <StyledTodosBadge
            aria-label="Todos count"
            color="warning"
            count={todos.length}
            icon={ListAltIcon}
            max={todos.length + 1}
          />
      </StyledToolbar>
    </AppBar>
  );
};

export default Header;
