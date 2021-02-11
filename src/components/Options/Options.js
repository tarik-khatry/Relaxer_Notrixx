import "./Options.css";

function Options() {
  return (
    <>
      <div id="menu">
        <div className="menu_options">
          <div className="options">
            <p>music visualiser</p>
            <label>
              <div className="con_wd">
                <input
                  className="switch visualization-toggle visualization-on"
                  type="checkbox"
                  id="checkbox"
                  name="check"
                  value="check"
                />
                <div className="toggle_wd"></div>
              </div>
            </label>
          </div>
          <div className="options_b" id="show_welcome_screen">
            <p>relaunch welcome screen</p>
          </div>
          <div className="logo">
            <img src="./web_app/full_logo_white-crp.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Options;
