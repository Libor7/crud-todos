/** COMPONENTS */
import Badge, { BadgeProps } from "@mui/material/Badge";

/** LIBRARIES */
import { type ElementType, type FC } from "react";

interface BadgeCompProps {
  count: number;
  icon: ElementType;
}

const BadgeComp: FC<BadgeCompProps & BadgeProps> = ({
  count,
  icon: Icon,
  ...otherProps
}) => {
  return (
    <Badge
      badgeContent={count}
      showZero
      {...otherProps}
    >
      <Icon />
    </Badge>
  );
};

export default BadgeComp;
