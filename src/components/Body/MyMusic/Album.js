import { ALbum_sort_, ALbum_sort_Name_ } from "../../global";
import Newplaylists from "../Newplaylists";
const { wire, Component } = hyperHTML;
function setStyle(style, element) {
  return Object.assign(element.style, style);
}
export class Album extends Component {
  constructor() {
    super();
    this.ALBUM_SORT_period_ = ALbum_sort_();

    this.ALbum_sort_Name_ = ALbum_sort_Name_();
  }

  get defaultState() {
    return {
      sorteds____: this.ALBUM_SORT_period_
    };
  }
  sort() {
    this.setState({
      sorteds____: this.ALBUM_SORT_period_
    });
  }

  sort2() {
    this.setState({
      sorteds____: this.ALbum_sort_Name_
    });
  }

  render() {
    return this.html`
     <button class="sort___LIST" id="sort___33" onclick=${this.sort.bind(this)}>
    </button>
    <button class="sort___LIST" id="sort___100" onclick=${this.sort2.bind(
      this
    )}></button>
  <div class="albums-mainCon">
  ${this.state.sorteds____.map(
    a => wire(a)`
   <div class="albumFrames">
       <h2 class="album-title-container1">${a.titl}</h2>
       <h4 class="album-composer-cont1">${a.compo}</h4>
       <div class='albumimages---cont'>
           
       <div class="album-brighntnessCovers"></div>
           <img src="${a.slika_1}" alt="albums-cover" onload=${function() {
      setStyle(
        {
          width: this.width > this.height ? "auto" : "100%",
          height: this.width > this.height ? "100%" : "auto"
        },
        this
      );
    }}/><div class="album-control___" onclick=${(() => {
      const _this = this;
      return function(event) {
        const element___ =
          event.currentTarget.parentNode.parentNode.firstElementChild
            .textContent;
        now_play = funfrom(element___)[0];
        _this.dispatch("play_");
        _this.dispatch("playAudios_");
        songs_from_allmusic_ = false;
        now_play = [];
        now_play_play = [];
        document.getElementById("audio").play();
      };
    })()}> <img src="./src/images/play_image.png" alt="play"/>             
       </div>
       </div>
       <p class="album----addToPlaylst" onclick=${(() => {
         const ___ = this;
         return function() {
           wire()`${new Newplaylists({
             this___: ___,
             parent____: this.parentNode.parentNode.lastElementChild,
             isByAUTHORS___: ___.state.sorteds____ === ___.ALbum_sort_Name_,
             AmbumName:
               event.currentTarget.previousElementSibling.previousElementSibling
                 .previousElementSibling.textContent,
             textContent__:
               event.currentTarget.previousElementSibling.previousElementSibling
                 .textContent
           }).createList()}`;
         };
       })()}>add to playlist 
     <span class='dodaj-u__listu'></span> </p>`
  )}<div class="O-------addtoplaylist"></div></div>`;
  }
}
