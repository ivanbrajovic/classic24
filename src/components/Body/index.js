import { Bodytitle } from "./Bodytitle";
import { Bodymensu } from "./Bodymensu";
import { BodySmallMenus } from "./BodySmallMenus";
import MyMusic from "./MyMusic";
import Nowplaying from "./Nowplaying";
import Menu from "../Menu";
import Settings from "./Settings";
import RecentPlay from "./RecentPlay";
import Playlist from "./Playlist";
import { Search } from "../Search";
const { Component } = hyperHTML;
class Body extends Component {
  constructor(props) {
    super(props);
    this.menu = new Menu();
    this.MyMusic = new MyMusic();
    this.Bodymensu = new Bodymensu();
    this.Nowplaying = new Nowplaying();
    this.RecentPlay = new RecentPlay();
    this.Settings = new Settings();
    this.Playlist = new Playlist();
    this.Search = new Search();
    this.recentITEM__ = [];
    this.setplayLIST____ = this.setplayLIST____.bind(this);
    this.setplayLIST________ = this.setplayLIST________.bind(this);
    window.addEventListener("hashchange", this.setplayLIST____, false);
  }
  setplayLIST____() {
    let which_ = this.Nowplaying.state.whichInMenu.map(currents____ =>
      (
        currents____.name +
        currents____.compos_ +
        currents____.title +
        currents____.period_ +
        currents____.duration
      ).replace(/\s/g, "")
    );
    let children___ = n => n.children[2].children[0];

    window.location.hash.includes("Song") &&
      setTimeout(
        () => (
          document.getElementById("sort___2") &&
            document.getElementById("sort___2").click(),
          document.querySelectorAll(".song---lists").forEach(function(n) {
            ~which_.indexOf(
              n.textContent
                .split(" ")
                .map(n => n.replace("\n", ""))
                .filter(n => n && n !== "\n" && n !== " ")
                .join("")
            )
              ? (children___(n).style.opacity = "1")
              : (children___(n).style.opacity = "0");
          })
        ),
        1000
      );
  }
  setplayLIST________() {
    let children___ = n => n.children[2].children[0];
    setTimeout(
      () => (
        document.getElementById("sort___2").click(),
        document.querySelectorAll(".song---lists").forEach(function(n) {
          children___(n).style.opacity = "0";
        }),
        document.getElementById("sort___1").click()
      ),
      1000
    );
  }
  get defaultState() {
    return {
      setWidth:
        window.innerWidth > 1025 ? "calc(100% - 300px)" : "calc(100% - 50px)",
      title: "Now playing",
      menuItems: [{ item: "" }],
      smallmenus: [{ item: "" }],
      currentelem: "Now playing",
      bodyHeight: "calc(100% - 88px)",
      background___: "#0c0c0c",
      left: window.innerWidth > 1025 ? "300px" : "50px"
    };
  }
  onupdatePlaylist(event) {
    this.Playlist.setState({
      n: JSON.parse(localStorage.getItem("playlist"))
    });
  }
  onsmallmenuchange() {
    this.setState({
      smallmenus: location.href.includes("/#Mymusic/Song")
        ? [{ item: "play by period" }, { item: "play by authors" }]
        : location.href.includes("Album")
        ? [
            { item: "sort albums by periods" },
            { item: "sort albums by authors" }
          ]
        : location.href.includes("/#Recentplays")
        ? [{ item: "Shuffle all" }]
        : [{ item: "" }]
    });
  }
  onplay_() {
    let N___, n;
    this.Nowplaying.setState({
      whichInMenu: now_play
    });
    this.Nowplaying.setState({
      whichInMenuTitles: now_play
    });
    window.location.hash.includes("Song") &&
      (this.MyMusic.songList.songList.state.sorted ===
        this.MyMusic.songList.songList.sort__By____PERIOD &&
        this.setplayLIST____());
    window.location.hash.includes("Song") &&
      !this.MyMusic.songList.songList.state.clickedby___ &&
      this.setplayLIST________();
    !window.location.hash.includes("Recentplays") &&
      (this.recentITEM__.push(now_play),
      (n = [
        ...new Set(
          this.recentITEM__.map(
            a => a[0].title + "|" + a[0].compos_ + "|" + a[0].image
          )
        )
      ]),
      (N___ = n.map(nPLAY => ({
        title: nPLAY.slice(0, nPLAY.indexOf("|")),
        compos_: nPLAY.slice(nPLAY.indexOf("|") + 1, nPLAY.lastIndexOf("|")),

        slika_3: nPLAY.slice(nPLAY.lastIndexOf("|") + 1)
      }))),
      this.RecentPlay.setState({
        album: N___
      }));
  }
  render() {
    return this.html`
        <div class="body-container"     
      
        style=${{
          width: this.state.setWidth,
          height: this.state.bodyHeight,
          backgroundColor:
            this.state.currentelem === "Now playing"
              ? "#0c0c0c"
              : this.state.background___,
          left: this.state.left
        }} onupdatePlaylist=${this} 
          onsmallmenuchange=${this} 
          onplay_=${this} >        
          ${Bodytitle(this.state)}

          <div class='bodymenus-containers'>        
     
         <ul class='body-menu' id="${`menu--------${this.state.currentelem.replace(
           " ",
           ""
         )}`}">
          ${this.Bodymensu}
          </ul>
        </div>
          ${BodySmallMenus(this.state.smallmenus)}
         
          ${
            this.state.currentelem === "My music"
              ? this.MyMusic
              : this.state.currentelem === "Now playing"
              ? this.Nowplaying
              : this.state.currentelem === "Settings"
              ? this.Settings
              : this.state.currentelem === "Recent plays"
              ? this.RecentPlay
              : this.state.currentelem === "Playlist"
              ? this.Playlist
              : this.Search
          }     
      </div>
      `;
  }
  //
}
export default Body;
