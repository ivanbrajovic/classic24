const { wire, Component } = hyperHTML;
import NEWPlaylist from "./NEWPlaylist";
const setStyle = (style, element) => Object.assign(element.style, style);
export default class Playlist extends Component {
  constructor() {
    //
    super();
    this.sortedByuthorlastnames = false;
  }
  get defaultState() {
    return {
      playlist___: 0,

      playlistI: {
        image: "",
        title: ""
      },

      n: JSON.parse(localStorage.getItem("playlist")) || [
        { localST___: true, object: [] }
      ]
    };
  }
  link____(event) {
    this.sortedByuthorlastnames = true;
    const t = this.state.n.sort((a, b) =>
      a.localST___.localeCompare(b.localST___)
    );
    this.setState({ n: t });
  }
  render() {
    return this.html`
    <button id="body-links"
    onclick=${this.link____.bind(this)} ></button>
    <div class="Playlist-">
      <div class="playlis--wraps----"></div>
      ${(location.href.includes("Playlist") &&
        this.state.n &&
        this.state.n.length > 0 &&
        this.state.n.map(n____ =>
          n____.localST___ === true
            ? ""
            : wire()`${new NEWPlaylist({
                image: n____.object[n____.object.length - 1].image,
                title: n____.localST___
              })}`
        )) ||
        ""}
</div>
    `;
  }
}
