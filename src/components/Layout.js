import FooterPlayer from "./Footer/FooterPlayer";
import Main from "./Main-Body/Main";
import Options from "./Options/Options";
import Sidebar from "./Sidebar/Sidebar";
import "./Layout.css";
function Layout() {
  return (
    <div className="player themed__block">
      <div className="main-card">
        <Sidebar />
        <Main />
        {/* <Options /> */}
        <FooterPlayer />
      </div>
    </div>
  );
}

export default Layout;
