import type { FC } from "react";
import type { ISideNavItem } from "../../interfaces/ISideNavItem";

const SideNavigationItem: FC<ISideNavItem> = ({ id, label }) => {
  return (
    <li>
      <a href={`#${id}`}>{label}</a>
    </li>
  );
};

export default SideNavigationItem;
