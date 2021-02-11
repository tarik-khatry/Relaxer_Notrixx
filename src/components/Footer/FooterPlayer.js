import {
  faBackward,
  faDatabase,
  faDraftingCompass,
  faForward,
  faPause,
  faPlay,
  faRandom,
  faRedo,
  faVolumeMute,
  faVolumeUp,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./FooterPlayer.css";
function FooterPlayer() {
  return (
    <>
      <div className="player-card_body">
        <div className="playercard_section1">
          <div className="thumbnail ">
            <img
              src="./files/trixx1.jpg"
              data-amplitude-song-info="cover_art_url"
            />
          </div>
          <div className="details playerdetails">
            <div className=" text_title">
              <p className="haa" data-amplitude-song-info="name">
                Song name
              </p>
            </div>
            <div className="sub-text">
              <p className="hab" data-amplitude-song-info="artist">
                Band or singer name
              </p>
            </div>
          </div>
        </div>
        <div className="playercard_section2">
          <div className="controls player-controls">
            <div
              type="button"
              tabIndex="-1"
              title="previous song"
              className="prev-control amplitude-prev btn"
            >
              <i className="fas">
                <FontAwesomeIcon icon={faBackward} />
              </i>
            </div>
            <div
              type="button"
              className="amplitude-play-pause play-pause-control paused btn btn_primary"
            >
              <i className="fas fa-play" title="play">
                <FontAwesomeIcon icon={faPlay} />
              </i>
              <i className="fas fa-pause" title="pause">
                <FontAwesomeIcon icon={faPause} />
              </i>
            </div>
            <div
              type="button"
              tabIndex="-1"
              title="next song"
              className="amplitude-next next-control btn"
            >
              <i className="fas fa-forward">
                <FontAwesomeIcon icon={faForward} />
              </i>
            </div>
          </div>
          <div className="seekbar">
            <div className="music_time">
              <div>
                <span
                  id="music_current_time"
                  className="amplitude-current-time time-container"
                ></span>
              </div>
              <div id="progress-container">
                <div id="player-progress-bar-container">
                  <input
                    type="range"
                    className="amplitude-song-slider duration"
                  />
                  <progress
                    id="song-played-progress"
                    className="amplitude-song-played-progress"
                  ></progress>
                  <progress
                    id="song-buffered-progress"
                    className="amplitude-buffered-progress"
                    value="0"
                  ></progress>
                </div>
              </div>

              <div>
                <span
                  id="music_total_time"
                  className="amplitude-duration-time time-container"
                ></span>
              </div>
            </div>
          </div>
        </div>
        <div className="volume-container">
          <div className="volume-slider">
            <div className="mute-btn amplitude-mute amplitude-not-muted">
              <i className="fas fa-volume-up">
                <FontAwesomeIcon icon={faVolumeUp} />
              </i>
              <i className="fas fa-volume-mute">
                <FontAwesomeIcon icon={faVolumeMute} />
              </i>
            </div>
            <input
              type="range"
              className="amplitude-volume-slider"
              tabIndex="-1"
              id="volume-slider"
              step="0.1"
            />
          </div>
          <div className="amplitude-shuffle amplitude-shuffle-off" id="shuffle">
            <i className="fas fa-random">
              <FontAwesomeIcon icon={faRandom} />
            </i>
          </div>
          <div className="amplitude-repeat-song" id="repeat">
            <i className="fas fa-redo">
              <FontAwesomeIcon icon={faRedo} />
            </i>
          </div>
        </div>
      </div>
    </>
  );
}

export default FooterPlayer;
