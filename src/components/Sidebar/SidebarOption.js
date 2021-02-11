import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

function SidebarOption({ icon, title }) {
  return (
    <div className="sidebar__option">
      <div>
        <FontAwesomeIcon icon={icon} color={"var(--text-color)"} />
      </div>
      <h4>{title}</h4>
    </div>
  );
}

export default SidebarOption;
