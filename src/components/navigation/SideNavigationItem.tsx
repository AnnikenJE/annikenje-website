import type { FC } from "react";
import type { ISideNavItem } from "../../interfaces/ISideNavItem";
import "./SideNavigationItem.css";

const SideNavigationItem: FC<ISideNavItem> = ({ id, label }) => {
  return (
    <li>
      <a href={`#${id}`} className="item">
        {label}
      </a>
    </li>
  );
};

export default SideNavigationItem;
