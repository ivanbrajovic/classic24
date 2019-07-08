import Newplaylists from "../Body/Newplaylists";

const { Component, wire } = hyperHTML;
const setStyle = (style, element) => Object.assign(element.style, style);

export class Search extends Component {
  constructor() {
    super();
    this.elements = [];
    this.sortByComposers____ = [];
    this.sortMaserpieces = [];
    fetch("../MUSIC_DATA_BASE.json")
      .then(response => response.json())
      .then(item_ =>
        item_.map(A =>
          A.composers.map(
            i => (
              this.sortByComposers____.push({
                compos_: [Object.keys(i)][0][0],
                composerImage: i[Object.keys(i)].image
              }),
              i[Object.keys(i)].album.map(
                x => (
                  this.sortMaserpieces.push({
                    title: x.title,
                    image: x.image,
                    compos_: [Object.keys(i)][0][0],
                    colorScheme: A.colorScheme,
                    duration: x.tracks_.map(V => V.duration),
                    period_: A.genre,
                    name: x.tracks_.map(V => V.name),
                    src: x.tracks_.map(V => V.src)
                  }),
                  x.tracks_.map(V =>
                    this.elements.push({
                      colorScheme: A.colorScheme,

                      compos_: [Object.keys(i)][0][0],
                      duration: V.duration,

                      image: x.image,

                      name: V.name,

                      period_: A.genre,

                      src: V.src,
                      title: x.title
                    })
                  )
                )
              )
            )
          )
        )
      );
  }
  get defaultState() {
    return {
      filter____: [],
      songs: [],
      composers: [],
      albums: []
    };
  }

  render() {
    return this.html`
    <div class="SearchContainer-">
  <div class="composersSearch--" style=${{
    display: this.state.composers.length === 0 ? "none" : "flex"
  }}><h1 class="searched-results">Composers</h1>
  ${this.state.composers.map(
    n =>
      wire(n)`
<div class="composers1">
    <div class="composerIMG">
                <img src="${n.composerImage}" alt="composer image" 
                onload=${function() {
                  setStyle(
                    {
                      width: this.width > this.height ? "auto" : "100%",
                      height: this.width > this.height ? "100%" : "auto"
                    },
                    this
                  );
                }}/>         
                <div class="composersPlays__plsts"        >
                    <svg class="play-aut__image_" 
                        xmlns="http://www.w3.org/2000/svg"
                        fill="#fff"                           
                        viewBox="-5 2 24 12"
                        width="50px"
                        height="50px" 
                        onclick=${(() => {
                          const ___ = this;
                          return function() {
                            ___.elements
                              .filter(
                                n =>
                                  n.compos_ ===
                                  this.parentNode.parentNode.nextElementSibling
                                    .textContent
                              )
                              .map(i________ => now_play.push(i________));

                            ___.dispatch("play_");
                            ___.dispatch("playAudios_");
                            songs_from_allmusic_ = false;
                            now_play = [];
                            now_play_play = [];
                          };
                        })()}> 
                    <path d="M 3 0.87304688 L 3 14.203125 L 3.7695312 13.712891 L 13.427734 7.5371094 L 3 0.87304688 z M 4 2.6992188 L 11.572277 7.5390625 L 4 12.377752 L 4 2.6772188 z"/>
                    </svg><svg class="addToPlays-aut__image_"
                    xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            x="0px" y="0px"
                            width="40px"
                            height="40px"
                            viewBox="0 0 612 612"                      
                            style="enable-background:new 0 0 612 612;"
                            xml:space="preserve" 
                            onclick=${(() => {
                              const ___ = this;
                              return function() {
                                wire()`${new Newplaylists({
                                  this___: ___,
                                  parent____: this.parentNode.parentNode
                                    .parentNode.parentNode.lastElementChild,
                                  isByAUTHORS___: false,
                                  textContent__:
                                    event.currentTarget.parentNode.parentNode
                                      .parentNode.lastElementChild.textContent
                                }).createList()}`;
                              };
                            })()}
                            ><polygon fill="#fff"                          
                            points="612,286.893 325.116,286.893 325.116,0.296 286.903,0.296 286.903,286.893 0,286.893 0,325.107 286.903,325.107 
                            286.903,611.704 325.116,611.704 325.116,325.107 612,325.107 			"/>
                </svg> </div></div>                      
            <div class='composerName'>${n.compos_}</div></div> `
  )}<div class="O-------addtoplaylist"></div>
   </div>
   <div class="albumsearch-" 
  style=${{
    display: this.state.albums.length === 0 ? "none" : "flex"
  }}>
  <h1 class="searched-results">Albums</h1>
  ${this.state.albums.map(
    (a, i) => wire()`<div class="albumFrames">
       <h2 class="album-title-container1">${a.title}</h2>
       <h4 class="album-composer-cont1">${a.compos_}</h4>
       <div class='albumimages---cont'>       
       <div class="album-brighntnessCovers"></div>
       <img src="${a.image}" alt="albums-cover" 
           onload=${function() {
             setStyle(
               {
                 width: this.width > this.height ? "auto" : "100%",
                 height: this.width > this.height ? "100%" : "auto"
               },
               this
             );
           }}/>
          <div class="album-control___" id="${`albumsa${i}`}" onclick=${(() => {
      const ___ = this;
      return function() {
        const N___ = ___.state.albums[this.getAttribute("id").slice(7) * 1];
        N___.name.map((n___, Y) =>
          now_play.push({
            colorScheme: N___.colorScheme,
            compos_: N___.compos_,
            duration: N___.duration[Y],
            image: N___.image,
            name: n___,
            period_: N___.period_,
            src: N___.src[Y],
            title: N___.title
          })
        );
        ___.dispatch("play_");
        ___.dispatch("playAudios_");
        songs_from_allmusic_ = false;
        now_play = [];
        now_play_play = [];
      };
    })()}>              
           
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
          })()}>   
          add to playlist
          <span class='dodaj-u__listu'>
          </span></p>`
  )}
<div class="O-------addtoplaylist"> </div>

</div><div class="songsearch----" style=${{
      display: this.state.songs.length === 0 ? "none" : "block"
    }}>
    <h1 class="searched-results searched-results-songs">Songs</h1>
    </table>  
    <tr><th>name</th><th>play</th>       
         <th>composer</th><th>composition</th>       
         <th>duration</th>   
      
        </tr>
   ${this.state.songs.map(
     (n, i) => wire(n)`  
     <tr class="search-line--"><td>${
       n.name
     }</td> <td class="td-Search-With-------PlayAndplists-" id="${`listsea${i}`}"><span class="shuffle_list3 playFrom-serach" onclick=${(() => {
       const ___ = this;
       return function(event) {
         const playlistT_______ = this.parentNode.parentNode.parentNode
           .parentNode.nextElementSibling;

         //

         wire()`${new Newplaylists({
           this___: ___,

           parent____: playlistT_______,

           isByAUTHORS___: false,

           AmbumName:
             event.currentTarget.parentNode.nextElementSibling
               .nextElementSibling.textContent,
           Songs:
             event.currentTarget.parentNode.previousElementSibling.textContent,
           textContent__:
             event.currentTarget.parentNode.nextElementSibling.textContent
         }).createList()}`;
       };
     })()} ><img src="./src/images/playlist.png" alt="playlist"/></span> 
       <span class="shuffle_list3 playFrom-serach" 
      onclick=${(() => {
        const ___ = this;
        return function() {
          now_play = [
            ___.state.songs[this.parentNode.getAttribute("id").slice(7) * 1]
          ];
          ___.dispatch("play_");
          ___.dispatch("playAudios_");
          songs_from_allmusic_ = false;
          now_play = [];
          now_play_play = [];
        };
      })()}>
       <svg height="8" width="8">
        <polygon points="0,0 0,8, 8,4" style="stroke:#f4f4f4;fill:#f4f4f4;"/>
        </svg>
       </span></td> <td>${n.compos_}</td>
    <td>${n.title}</td>
     <td>${n.duration}</td></tr>`
   )}</table><div class="O-------addtoplaylist">            
              </div></div>${
                [].concat(
                  this.state.songs,
                  this.state.composers,
                  this.state.albums
                ).length === 0
                  ? wire()`<div class="nothing-to">Nothing to display for "${
                      document.getElementById("inputsearch").value
                    }"</div>`
                  : ""
              }</div> `;
  }
}
