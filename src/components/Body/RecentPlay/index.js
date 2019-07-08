const { wire, Component } = hyperHTML;
import Newplaylists from "../Newplaylists";
const setStyle = (style, element) => {
  return Object.assign(element.style, style);
};

export default class RecentPlay extends Component {
  get defaultState() {
    return {
      album: []
    };
  }

  click(event) {
    let elm = event.currentTarget.parentNode.parentNode;
    now_play = FUN_.filter(
      a =>
        a.title === elm.children[0].textContent &&
        a.compos_ === elm.children[1].textContent
    ).map(n =>
      n.duration.map((T_, T) => ({
        colorScheme: n.colorScheme,
        compos_: n.compos_,
        duration: T_,
        image: n.image__,
        name: n.name[T],
        period_: n.period_,
        src: n.src[T],
        title: n.title
      }))
    )[0];
    this.dispatch("play_");
    this.dispatch("playAudios_");
    songs_from_allmusic_ = false;
    now_play = [];
    now_play_play = [];

    document.getElementById("audio").play();
  }
  sortRecent(event) {
    const n = event.currentTarget.parentNode.children;

    const titles = Array.from(n)
      .slice(1, n.length - 1)
      .map(n => ({
        title: n.children[0].textContent,
        compos_: n.children[1].textContent
      }));
    titles.map(n =>
      FUN_.filter(a => a.title === n.title && a.compos_ === n.compos_)
        .map(n =>
          n.duration.map((T_, T) => ({
            colorScheme: n.colorScheme,

            compos_: n.compos_,

            duration: T_,

            image: n.image__,

            name: n.name[T],

            period_: n.period_,

            src: n.src[T],

            title: n.title
          }))
        )
        .map(n => n.map(n => now_play.push(n)))
    ) &&
      (now_play = now_play
        .map(a => ({ sort: Math.random(), value: a }))
        .sort((a, b) => a.sort - b.sort)
        .map(a => a.value));
    this.dispatch("play_");
    this.dispatch("playAudios_");
    songs_from_allmusic_ = false;
    now_play = [];
    now_play_play = [];
    document.getElementById("audio").play();
  }
  render() {
    return this.html`
 <div class="recent-play albums-mainCon">
   <button id="recentsort_" 
   onclick=${this.sortRecent.bind(this)}></button>
     ${
       this.state.album.length === 0
         ? wire()`         
    <h2 class="now----playing----now____T----">
              No recent plays
         </h2>`
         : ""
     }
${this.state.album.map(
  a => wire(a)`
  <div class="albumFrames">
       <h2 class="album-title-container1">${a.title}</h2>
       <h4 class="album-composer-cont1">${a.compos_}</h4>
       <div class='albumimages---cont'>
       <div class="album-brighntnessCovers"></div>
           <img src="${a.slika_3}" alt="albums-cover" 
           onload=${function() {
             setStyle(
               {
                 width: this.width > this.height ? "auto" : "100%",
                 height: this.width > this.height ? "100%" : "auto"
               },
               this
             );
           }}/>
            <div class="album-control___" 
           onclick=${this.click.bind(this)}>              
            <img src="./src/images/play_image.png" alt="play"/>             
          </div></div><p class="album----addToPlaylst" onclick=${(() => {
            const ___ = this;
            return function() {
              wire()`${new Newplaylists({
                this___: ___,
                parent____: this.parentNode.parentNode.lastElementChild,
                isByAUTHORS___: false,
                AmbumName:
                  event.currentTarget.previousElementSibling
                    .previousElementSibling.previousElementSibling.textContent,
                textContent__:
                  event.currentTarget.previousElementSibling
                    .previousElementSibling.textContent
              }).createList()}`;
            };
          })()}
          >add to playlist <span class='dodaj-u__listu'></span></p></div>`
)}<div class="O-------addtoplaylist"></div>`;
  }
}
