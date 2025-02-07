/** COMPONENTS */
import List from "@mui/material/List";

/** STYLES */
import { styled } from "@mui/material/styles";

interface IStyledListProps {
  gap: number;
  itemwidth: number;
  rows: number;
}

const StyledList = styled(List)<IStyledListProps>(
  ({ gap, rows, itemwidth }) => ({
    display: "flex",
    flexWrap: "wrap",
    gap: `${gap}em`,
    margin: "0 auto",
    maxWidth: `calc(${rows * itemwidth}px + ${(rows - 1) * gap}em)`,
  })
);

export default StyledList;
