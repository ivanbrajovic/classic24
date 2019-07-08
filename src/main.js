import Menu from "./components/Menu";
import Body from "./components/Body";
import Player from "./components/Player";
import { songList } from "./components/Body/BodyCentral";
import { regulate__ } from "./components/global";
import { Volume, Playermain } from "./components/Players";
const { Component } = hyperHTML;
const $f = a => Math.floor(a / 60);
const regulateCurrentDuration = A =>
  ($f(A) < 10 ? "0" + $f(A) : $f(A)) +
  " : " +
  (A < 10 ? "0" + A : A >= 60 ? (A % 60 < 10 ? "0" + (A % 60) : A % 60) : A);
const rehulation3 = a => ((a - 15) * 100) / a / 100;
class Main extends Component {
  constructor() {
    super();
    this.menu = new Menu();
    this.Volume = new Volume();
    this.Playermain = new Playermain();
    this.body = new Body();
    this.player = new Player();
    this.audioplayer_ = document.getElementById("audio");
    this.songList = new songList();
    this.audioi = 0;
    window.addEventListener("load", () => {
      const n = document.querySelector(".now-progress-overflow___hidden-")
        .offsetWidth;
      const n3 = document.querySelectorAll(
        ".now-progress-overflow___hidden-"
      )[1].offsetWidth;
      const i = document.querySelector(".volume___").offsetWidth;
      const iv = document.querySelectorAll(".volume___")[1].offsetWidth;
      this.body.Nowplaying.ProgressNowplay.setState({
        progres_width: rehulation3(n),
        progres_width_volume: rehulation3(i)
      });
      this.body.Nowplaying.ProgressNowplay.Volume.setState({
        progres_width_volume: rehulation3(i)
      });
      this.player.Playermain.setState({
        progres_width: rehulation3(n3)
      });
      this.player.Volume.setState({
        progres_width: rehulation3(n),
        progres_width_volume: rehulation3(iv)
      });
      window.innerWidth < 1025 &&
        (!this.menu.state.clcikedMenu &&
          document.querySelector(".menu-button").click(),
        (document.querySelector(".body-container").style.cssText = `
        width: calc(100% - 50px);         
        left: 50px;
      `));
      window.innerWidth > 1025 &&
        (document.querySelector(".body-container").style.cssText = `
          width: ${
            this.menu.state.clcikedMenu
              ? `calc(100% - 50px)`
              : `calc(100% - 300px)`
          };left: ${this.menu.state.clcikedMenu ? `50px` : `300px`}
      `);
    });
    window.addEventListener("resize", () => {
      let n, i;
      location.hash.includes("#Nowplaying")
        ? ((n = document.querySelector(".now-progress-overflow___hidden-")
            .offsetWidth),
          (i = document.querySelector(".volume___").offsetWidth),
          this.Volume.setState({
            progres_width: ((n - 15) * 100) / n / 100,
            progres_width_volume: ((i - 15) * 100) / i / 100
          }))
        : (i = document.querySelector(".volume___").offsetWidth),
        this.Volume.setState({
          progres_width: ((n - 15) * 100) / n / 100,
          progres_width_volume: ((i - 15) * 100) / i / 100
        });
      this.body.MyMusic.songList.songList.setState({
        resizeValue: window.innerWidth < 1277
      });
      this.body.setState(n => ({
        background___: n.background___,
        setWidth:
          window.innerWidth < 1025
            ? "calc(100% - 50px)"
            : !this.menu.state.clcikedMenu
            ? "calc(100% - 300px)"
            : "calc(100% - 50px)",
        left:
          window.innerWidth < 1025
            ? "50px"
            : !this.menu.state.clcikedMenu
            ? "300px"
            : "50px"
      }));
    });
    window.addEventListener("mouseup", () => {
      this.body.Nowplaying.ProgressNowplay.setState({
        removeMousemove__: false
      });
      this.player.Playermain.setState({
        removeMousemove__: false
      });
      this.body.Nowplaying.ProgressNowplay.Volume.setState({
        removeMousemove____: false
      });
      this.player.Volume.setState({
        removeMousemove____: false
      });
      this.player.Playermain.setState({
        removeMousemove__: false
      });
      setTimeout(() => this.setState({ listenfor____: false }), 2000);
    });
    timelinePlay = this.body.Nowplaying.ProgressNowplay.state.progress_;
  }
  click(event) {
    let elm = event.target;
    try {
      !elm.parentNode.classList.contains("searchfiled") &&
        !elm.parentNode.parentNode.classList.contains("searchfiled") &&
        this.menu.menuSeach.setState({ focus: 1 });
    } catch (e) {}
  }
  get defaultState() {
    return {
      audio: "",
      audioall_: [],
      audio_i: 0,
      loop: false,
      play: true,
      songDuratio__: 0,
      listenChange: false,
      listenfor____: false,
      setcurrentfrom_: null,
      oldState: null,
      volume___: 100,
      listALLurl____: true,
      repeat_e: false
    };
  }
  onmenuhide() {
    window.innerWidth > 1025 &&
      this.body.setState({
        setWidth: this.menu.state.clcikedMenu
          ? "calc(100% - 50px)"
          : "calc(100% - 300px)",
        left: this.menu.state.clcikedMenu ? "50px" : "300px"
      });
  }
  onshows() {
    this.audioplayer_ = document.getElementById("audio");
    const { title } = this.menu.menuContent.menuitems;
    this.body.setState({
      title: title,
      smallmenus: location.href.includes("/#Mymusic/Song")
        ? [{ item: "play by period" }, { item: "play by authors" }]
        : location.href.includes("/#Mymusic/Artis")
        ? [{ item: "" }]
        : location.href.includes("/#Recentplays")
        ? [{ item: "Shuffle" }]
        : [{ item: "" }],
      currentelem: title,
      bodyHeight: location.hash.includes("#Nowplaying")
        ? "100%"
        : "calc(100% - 88px)"
    });
    this.menu.setState({
      mHeight__: location.hash.includes("#Nowplaying")
        ? "100%"
        : "calc(100% - 88px)",
      menuImageOpacit____: location.hash.includes("#Nowplaying") ? "0" : "1"
    });
    this.body.Bodymensu.setState({
      lst:
        title === "My music"
          ? [{ item: "Songs" }, { item: "Artist" }, { item: "Albums" }]
          : title === "Playlist"
          ? [{ item: "Sort by" }]
          : [{ item: "" }]
    });
    this.body.MyMusic.setState({ whichInMenu: "Song" });
    this.player.setState({
      displays__: location.hash.includes("#Nowplaying") ? "none" : "flex"
    });
    location.hash.includes("#Nowplaying") &&
      !this.menu.state.clcikedMenu &&
      document.getElementById("check-menu-button").click();
    location.hash.includes("#Nowplaying") &&
      this.state.audio &&
      (this.audioplayer_.play(),
      this.body.Nowplaying.ProgressNowplay.setState({
        play: { icon: "./src/images/pause_image.png", name: "pause" }
      }),
      this.player.Playermain.setState({
        play: { icon: "./src/images/pause_image.png", name: "pause" }
      }),
      this.body.Nowplaying.ProgressNowplay.Volume.setState({
        volumes_: this.state.volume___,
        volumeicons: this.Volume.setVolumeIcons(this.state.volume___)
      }));
    this.player.Volume.setState({
      volumes_: this.state.volume___,

      volumeicons: this.Volume.setVolumeIcons(this.state.volume___)
    });
  }
  compareForAllPlayNext(n) {
    return n && `${n.name} ${n.compos_} ${n.title} ${n.period_} ${n.duration}`;
  }
  onplayAudios_() {
    const { audioall_, audio_i } = this.state;
    this.setState({
      audio_i: 0,
      audio: now_play[0].src,
      audioall_: now_play,
      oldState: now_play,
      listALLurl____: location.hash.includes("Song")
    });
    this.audioi;
    this.audioplayer_ = document.getElementById("audio");
    this.body.Nowplaying.setState({
      nowPlay: "",
      setFIRSonLOAD: true,
      background____: this.state.audioall_[this.state.audio_i].image
    });
    this.body.Nowplaying.ProgressNowplay.setState({
      z___index: 3,
      background____: ""
    });
    this.body.Nowplaying.ProgressNowplay.setState({
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
    this.player.Playermain.setState({
      z___index: 3,
      background____: "",
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
    this.player.setState({
      composition: this.state.audioall_[this.state.audio_i].name,
      backgroundColor: `linear-gradient(to right,${
        this.state.audioall_[this.state.audio_i].colorScheme
      })`,
      title: this.state.audioall_[this.state.audio_i].title,
      cover: this.state.audioall_[this.state.audio_i].image,
      composers__: this.state.audioall_[this.state.audio_i].compos_
    });
    this.player.setState({
      zIndexvolumes__: true
    });
    this.body.MyMusic.songList.songList.setState({
      pointerEvents: "YES",
      nowPlay: this.compareForAllPlayNext(audioall_[audio_i])
    });
  }
  onplaynowplay(event) {
    const { audioall_, audio_i } = this.state;
    this.setState(a1 => ({
      audioall_: this.state.oldState,
      audio_i: event.detail.___ * 1,
      audio: a1.audioall_[a1.audio_i].src
    }));
    this.body.MyMusic.songList.songList.setState({
      nowPlay: this.compareForAllPlayNext(audioall_[audio_i])
    });
    this.body.Nowplaying.setState({
      whichInMenuTitles: [
        {
          compos_: audioall_[audio_i].compos_,
          name: audioall_[audio_i].name,
          title: audioall_[audio_i].title
        }
      ],
      nowPlay: this.compareForAllPlayNext(audioall_[audio_i]),
      background____: this.state.audioall_[this.state.audio_i].image,
      setFIRSonLOAD: false
    });
    this.body.Nowplaying.ProgressNowplay.setState({
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
    this.player.Playermain.setState({
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
    this.player.setState({
      composition: this.state.audioall_[this.state.audio_i].name,
      backgroundColor: `linear-gradient(to right,${
        this.state.audioall_[this.state.audio_i].colorScheme
      })`,
      title: this.state.audioall_[this.state.audio_i].title,
      cover: this.state.audioall_[this.state.audio_i].image,
      composers__: this.state.audioall_[this.state.audio_i].compos_
    });
  }
  onrandomiseAndShuff(event) {
    event.detail
      ? this.setState(i_ => ({
          audioall_: i_.audioall_
            .map(a => ({ sort: Math.random(), value: a }))
            .sort((a, b) => a.sort - b.sort)
            .map(a => a.value)
        }))
      : this.setState(e => ({
          audioall_: e.oldState
        }));
  }
  regulateAudio(event) {
    this.body.Nowplaying.ProgressNowplay.setState({
      length_ofsong_: regulateCurrentDuration(
        Math.floor(event.currentTarget.duration)
      )
    });
    this.player.Playermain.setState({
      length_ofsong_: regulateCurrentDuration(
        Math.floor(event.currentTarget.duration)
      )
    });
    this.setState({
      songDuratio__: Math.floor(event.currentTarget.duration)
    });
  }
  playingTimeupdate_(event) {
    const { audioall_, audio_i } = this.state;
    this.state.audio === null &&
      !this.state.loop &&
      (this.body.Nowplaying.ProgressNowplay.setState({
        z___index: -1
      }),
      this.player.Playermain.setState({
        z___index: -1
      }),
      this.body.Nowplaying.setState({
        whichInMenu: [
          {
            duration: "",
            compos_: "",
            name: "",
            src: "",
            title: "no current plays",
            image: ""
          }
        ],
        whichInMenuTitles: [
          {
            compos_: "",
            name: "",
            title: "no current plays"
          }
        ]
      }));
    event.currentTarget.currentTime + 1 > event.currentTarget.duration &&
      !this.state.loop &&
      audioall_[audio_i] &&
      !this.player.Playermain.removeMousemove__ &&
      (this.setState(a__ => ({
        audio_i: a__.audio_i + 1,
        audio: audioall_[audio_i] ? audioall_[audio_i].src : null
      })),
      this.body.MyMusic.songList.songList.setState({
        nowPlay: this.compareForAllPlayNext(audioall_[audio_i])
      }),
      this.body.Nowplaying.setState(
        this.state.audioall_[audio_i] && {
          whichInMenuTitles: [
            {
              compos_: audioall_[audio_i].compos_,
              name: audioall_[audio_i].name,
              title: audioall_[audio_i].title
            }
          ],
          nowPlay: this.compareForAllPlayNext(audioall_[audio_i]),
          setFIRSonLOAD: false,
          background____: audioall_[audio_i].image
        }
      ),
      this.player.setState({
        composition: audioall_[audio_i].name,
        backgroundColor: `linear-gradient(to right,${
          audioall_[audio_i].colorScheme
        })`,
        title: audioall_[audio_i].title,
        cover: audioall_[audio_i].image,
        composers__: audioall_[audio_i].compos_
      }));
    !this.state.listenfor____ &&
      (this.body.Nowplaying.ProgressNowplay.setState({
        currentTime: regulateCurrentDuration(
          Math.floor(event.target.currentTime)
        ),
        progress_:
          (Math.floor(event.target.currentTime) * 100) /
          this.state.songDuratio__
      }),
      this.player.Playermain.setState({
        currentTime: regulateCurrentDuration(
          Math.floor(event.target.currentTime)
        ),
        progress_:
          (Math.floor(event.target.currentTime) * 100) /
          this.state.songDuratio__
      }));
    this.state.listenfor____ &&
      ((event.currentTarget.currentTime =
        (this.state.setcurrentfrom_ * this.state.songDuratio__) / 100),
      this.body.Nowplaying.ProgressNowplay.setState({
        duration: event.currentTarget.duration,
        settimer___: n => regulateCurrentDuration(n)
      }),
      this.player.Playermain.setState({
        duration: event.currentTarget.duration,
        settimer___: n => regulateCurrentDuration(n)
      }));
    !audioall_[audio_i] &&
      event.currentTarget.currentTime + 1 > event.currentTarget.duration &&
      (!this.state.repeat_e
        ? (this.setState({
            audio_i: 0
          }),
          audioall_.length === 1 && (event.currentTarget.currentTime = 0))
        : (this.player.setState({
            title: "",
            cover: "",
            composers__: "",
            composition: "",
            zIndexvolumes__: false
          }),
          this.player.Playermain.setState({
            currentTime: "",
            play: { icon: "./src/images/play_image.png", name: "play" },
            length_ofsong_: ""
          }),
          this.setState({
            audio: null
          })),
      this.body.MyMusic.songList.songList.setState({
        pointerEvents: "",
        nowPlay: ""
      }));
    this.body.Nowplaying.ProgressNowplay.setState({
      pointerEVENT: event.currentTarget.currentTime < 1
    }),
      this.player.Playermain.setState({
        pointerEVENT: event.currentTarget.currentTime < 1
      });
  }
  nextPrev(a___z) {
    const { audioall_, audio_i } = this.state;
    this.setState(a__ => ({
      audio_i: this.state.audio_i + a___z,
      audio: audioall_[audio_i + a___z] ? audioall_[audio_i + a___z].src : null
    })),
      this.body.MyMusic.songList.songList.setState({
        nowPlay: this.compareForAllPlayNext(audioall_[audio_i + a___z])
      }),
      this.body.Nowplaying.setState({
        whichInMenuTitles: [
          {
            compos_: audioall_[audio_i + a___z].compos_,
            name: audioall_[audio_i + a___z].name,
            title: audioall_[audio_i + a___z].title
          }
        ],
        nowPlay: this.compareForAllPlayNext(audioall_[audio_i + a___z]),
        setFIRSonLOAD: false,
        background____: audioall_[audio_i + a___z].image
      });
    this.body.Nowplaying.ProgressNowplay.setState({
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
    this.player.Playermain.setState({
      play: { icon: "./src/images/pause_image.png", name: "pause" }
    });
  }
  onnowplayControlPressed(event) {
    const { audioall_, audio_i } = this.state;
    event.detail._ === "play" &&
      (this.setState({
        play: true
      }),
      this.player.Playermain.setState({
        play: { icon: "./src/images/pause_image.png", name: "pause" }
      }));
    event.detail._ === "pause" &&
      (this.setState({
        play: false
      }),
      this.player.Playermain.setState({
        play: { icon: "./src/images/play_image.png", name: "play" }
      }));
    this.state.play ? this.audioplayer_.play() : this.audioplayer_.pause();
    event.detail._ === "repeat" &&
      (this.player.Playermain.setState(I_ => ({
        repeat: !I_.repeat
      })),
      (this.body.Nowplaying.ProgressNowplay.setState(I_ => ({
        repeat: !I_.repeat
      })),
      this.setState(n3 => ({
        loop: !n3.loop
      }))));
    event.detail._ === "random" &&
      (this.player.Playermain.setState(i_ => ({
        shuffl: !i_.shuffl
      })),
      this.body.Nowplaying.ProgressNowplay.setState(i_ => ({
        shuffl: !i_.shuffl
      })));
    event.detail._ === "next" &&
      this.state.audio_i < this.state.audioall_.length - 1 &&
      this.nextPrev(1);
    event.detail._ === "prev" && this.state.audio_i > 0 && this.nextPrev(-1);
    ~["next", "prev"].indexOf(event.detail._) &&
      this.player.setState({
        composition: audioall_[this.state.audio_i].name,
        backgroundColor: `linear-gradient(to right,${
          audioall_[this.state.audio_i].colorScheme
        })`,
        title: audioall_[this.state.audio_i].title,
        cover: audioall_[this.state.audio_i].image,
        composers__: audioall_[this.state.audio_i].compos_
      });
  }
  onclickprogre(event) {
    this.setState({
      listenfor____: true,
      setcurrentfrom_: event.detail.s
    });
    event.currentTarget.currentTime =
      (this.state.setcurrentfrom_ * this.state.songDuratio__) / 100;
  }
  onnowKeyUp___() {
    this.setState({
      listenfor____: false,
      listenChange: true
    });
  }
  onkliknutoizNowanana(event) {
    this.audioplayer_.currentTime =
      (event.detail._ * this.state.songDuratio__) / 100;
  }
  ondownfromnownanaen() {
    this.audioplayer_.currentTime =
      (event.detail._ * this.state.songDuratio__) / 100;
  }
  onvolumedowns(event) {
    this.audioplayer_.volume = event.detail._ / 100;
    this.setState({
      volume___: event.detail._
    });
  }
  onvolumedownsklik__(event) {
    this.audioplayer_.volume = regulate__(event.detail._ / 100);
    this.setState({
      volume___: event.detail._
    });
  }
  onvolumesmute____() {
    this.audioplayer_.volume = regulate__(event.detail._ / 100);
    this.setState({
      volume___: event.detail._
    });
  }
  onrepeat(event) {
    this.setState({
      repeat_e: event.detail
    });
  }
  onpromeniback__() {
    this.body.setState({
      background___: event.detail ? "white" : "#0c0c0c",
      titleColor: event.detail ? "#0c0c0c" : "white"
    });
    this.body.MyMusic.songList.setState({
      background__: event.detail
        ? "linear-gradient(to right, rgb(200, 184, 184), hsl(25, 48%, 64%), rgb(206, 192, 193))"
        : "linear-gradient(to right, #111111, transparent, #000000)",
      inverts_: event.detail ? "invert(1)" : "invert(0)"
    });
    this.menu.setState({
      invert__colors_: event.detail ? "invert(1)" : "invert(0)"
    });
    this.menu.menuContent.menuitems.setState({
      anotherc_: event.detail
    });
  }
  onserach___(event) {
    const regulateWhiteSpaces___ = n => n.replace(/\s/g, "");
    const setToloverCase = n => n.map(n => n.toLowerCase()).join("");
    let _ = event.detail;
    _.replace(/\s/g, "").length > 0 &&
      this.menu.setState({
        searchDisplay___: true,
        searchedValue: _
      });
    this.body.Search.setState({
      filter____: _.split(" "),
      songs: this.body.Search.elements.filter(n =>
        _.split(" ").some(
          t____ =>
            t____.length > 2 &&
            regulateWhiteSpaces___(
              setToloverCase([n.name, n.name, n.title])
            ).includes(regulateWhiteSpaces___(t____.toLowerCase()))
        )
      ),
      composers: this.body.Search.sortByComposers____.filter(n =>
        _.split(" ").some(
          T_ =>
            T_.length > 1 &&
            regulateWhiteSpaces___(n.compos_.toLowerCase()).includes(
              regulateWhiteSpaces___(T_.toLowerCase())
            )
        )
      ),
      albums: this.body.Search.sortMaserpieces.filter(n =>
        _.split(" ").some(
          T_ =>
            T_.length > 1 &&
            regulateWhiteSpaces___(n.title.toLowerCase()).includes(
              regulateWhiteSpaces___(T_.toLowerCase())
            )
        )
      )
    });
  }
  onchangeFont(event) {
    this.body.MyMusic.setState({
      fontFamily___: event.detail === "segoeui"
    });
  }
  render() {
    return this.html` 
       <div class='main' 
       onshows=${this} 
       onmenuhide=${this} 
       onclick=${this.click.bind(this)}
       onplayAudios_=${this} 
       onplaynowplay=${this}
       onnowplayControlPressed=${this} 
       onclickprogre=${this}       
       onnowKeyUp___=${this}
       onkliknutoizNowanana=${this}
       ondownfromnownanaen=${this}     
       onrandomiseAndShuff=${this} 
       onvolumedowns=${this}       
       onvolumedownsklik__=${this}  
       onvolumesmute____=${this}
       onrepeat=${this}
       onpromeniback__=${this}
       onrecentplay_=${this}
       onserach___=${this}
       onchangeFont=${this}
       onplay_=${this}>  
          ${this.menu}
          ${this.body}    
          ${this.player}</div>
          <audio id="audio" src="${this.state.audio}"
                onloadedmetadata=${this.regulateAudio.bind(this)}   
                ontimeupdate=${this.playingTimeupdate_.bind(this)} 
                autoplay  loop=${this.state.loop}></audio>
     `;
  }
}
export default Main;
