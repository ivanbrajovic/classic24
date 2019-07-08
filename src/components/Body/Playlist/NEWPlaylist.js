const { wire, Component } = hyperHTML;
// import { coordinates__, regulate__ } from "../global";
const setStyle = (style, element) => Object.assign(element.style, style);
export default class NEWPlaylist extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  clicks(event) {
    const lists___ =
      event.currentTarget.parentNode.parentNode.parentNode.nextElementSibling
        .textContent;
    let c____ = JSON.parse(localStorage.playlist)
      .filter(n___ => n___.localST___ === lists___)
      .map(x => x["object"])[0];
    now_play = c____;
    (this.dispatch("play_"),
    this.dispatch("playAudios_"),
    (songs_from_allmusic_ = false)),
      (now_play = []),
      (now_play_play = []);
  }
  removefromplaylist___(event) {
    const elem_ =
      event.currentTarget.parentNode.parentNode.parentNode.nextElementSibling;
    (localStorage.playlist =
      JSON.parse(localStorage.playlist).length > 0
        ? JSON.stringify(
            JSON.parse(localStorage.playlist).filter(
              n => n.localST___ !== elem_.textContent
            )
          )
        : JSON.stringify([{ localST___: true, object: [] }])),
      this.dispatch("updatePlaylist");
    try {
      document.querySelector(".Playlist-").removeChild(elem_.parentNode);
    } catch (e) {}
  }
  render() {
    return this.html`
        <div class="playlistWIN">
            
            <div class="playlistWINDow---IMAGE---">
            <div class="album---Imagepaly---lists-">
            ${this.props.image &&
              wire()`<img src="${this.props.image}" alt="cover" 
          onload=${function() {
            setStyle(
              {
                width: this.width > this.height ? "auto" : "100%",
                height: this.width > this.height ? "100%" : "auto",
                display: "block",
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)"
              },
              this
            );
          }}/>`}                         
               <div class="playlist-controls"><div class="album-control___playlist---------" onclick=${this.clicks.bind(
                 this
               )}>
            <img src="./src/images/play_image.png" alt="play"/> 
            </div><div class="album-control___playlist---------" 
            onclick=${this.removefromplaylist___.bind(this)}>
            <img src="./src/images/removefromplaylist_.png" alt="play"/> 
            </div></div></div></div><h2 class="playlist---title">${
              this.props.title
            }
            </h2></div>
            `;
  }
}
