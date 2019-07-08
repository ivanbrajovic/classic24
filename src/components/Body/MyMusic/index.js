import { Song } from "./Song";
import { Authors } from "./Authors";
import { Album } from "./Album";

const { Component } = hyperHTML;

export default class MyMusic extends Component {
  constructor() {
    super();
    this.songList = new Song();

    this.Autor = new Authors();

    this.whichInMenu = "Song";
    window.addEventListener("hashchange", this.onhrefcha, false);
    this.Album = new Album();
  }

  get defaultState() {
    return {
      whichInMenu: "Song",
      fontFamily___: true
    };
  }
  link_() {
    setTimeout(
      () => (
        this.dispatch("smallmenuchange"),
        this.setState({
          whichInMenu: location.href.slice(location.href.lastIndexOf("/") + 1)
        })
      ),
      100
    );
  }
  render() {
    return this.html`<div class="centarll-container___"  style=${{
      height: this.state.fontFamily___
        ? "calc(100% - 192px + 77px)"
        : "calc(100% - 192px + 88px)"
    }}>  
    
   <button id="body-links" onclick=${this.link_.bind(this)}></button>
        ${
          this.state.whichInMenu === "Song"
            ? this.songList
            : this.state.whichInMenu === "Artis"
            ? this.Autor
            : this.state.whichInMenu === "Album"
            ? this.Album
            : ""
        }</div>`;
  }
}
