import "./Main.css";

function Main() {
  return (
    <>
      <div className="player-list">
        <div className="list">
          {/* <div className="item">
                  <div className="thumbnail" amplitude->
                      <img src="./files/trixx1.jpg"  alt="">
                  </div>
                  <div className="details">
                      <h2>please select a song</h2>
                      <p>Artistname</p>
                  </div>
              </div>  */}
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="0"
            >
              <div className="song-number">
                <span>1</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx1.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">
                  Risin' High (feat Raashan Ahmad)
                </h2>
                <p className="playlist-artist-album">
                  Ancient Astronauts &bull; We Are to Answer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="1"
            >
              <div className="song-number">
                <span>2</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx2.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">The Gun</h2>
                <p className="playlist-artist-album">
                  Lorn &bull; Ask The Dust
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="2"
            >
              <div className="song-number">
                <span>3</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx3.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">The Gun</h2>
                <p className="playlist-artist-album">Lorn &bull; Anvil</p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="3"
            >
              <div className="song-number">
                <span>4</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx4.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">I Came Running</h2>
                <p className="playlist-artist-album">
                  Ancient Astronauts &bull; We Are to Answer
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="4"
            >
              <div className="song-number">
                <span>5</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx5.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">First Snow</h2>
                <p className="playlist-artist-album">
                  Emancipator &bull; Soon It Will Be Cold Enough
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="5"
            >
              <div className="song-number">
                <span>6</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx6.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">First Snow</h2>
                <p className="playlist-artist-album">
                  Emancipator &bull; Soon It Will Be Cold Enough
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="6"
            >
              <div className="song-number">
                <span>7</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx7.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">First Snow</h2>
                <p className="playlist-artist-album">
                  Emancipator &bull; Soon It Will Be Cold Enough
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="item white-player-playlist-song amplitude-song-container amplitude-play-pause"
              data-amplitude-song-index="7"
            >
              <div className="song-number">
                <span>8</span>
                <img
                  src="./website_assets/playing.gif"
                  className="gif"
                  alt=""
                />
              </div>
              <div className="thumbnail">
                <img src="./files/trixx8.jpg" />
              </div>
              <div className="playlist-song-meta details">
                <h2 className="playlist-song-name">First Snow</h2>
                <p className="playlist-artist-album">
                  Emancipator &bull; Soon It Will Be Cold Enough
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
