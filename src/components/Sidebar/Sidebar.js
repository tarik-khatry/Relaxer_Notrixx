import { faHome, faInfo, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
function Sidebar() {
  return (
    <>
      <div className="sidebar__main">
        <div className="sidebar__mainWrapper">
          <div className="sidebar__head">
            <p>Library</p>
          </div>
          {/* <div className="sidebar__option">
            <FontAwesomeIcon icon={faHome} size="lg" />
            <p>Home</p>
          </div>
          <div className="sidebar__option">
            <FontAwesomeIcon icon={faInfo} size="lg" />
            <p>About</p>
          </div>
          <div className="sidebar__option">
            <FontAwesomeIcon icon={fa} size="lg" />
            <p>Home</p>
          </div> */}
          <SidebarOption icon={faHome} title="Home" />
          <SidebarOption icon={faInfo} title="About" />
          <SidebarOption icon={faMusic} title="Library" />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
