import { fun, sortedByComposers__fun, sortBygenres__fun } from "../../global";
const { wire, Component } = hyperHTML;
import Newplaylists from "../Newplaylists";
const getIniti____ = n =>
  n
    .split(" ")
    .slice(0, -1)
    .map(i___ => i___[0].toUpperCase())
    .join(".") +
  "." +
  n.split(" ").slice(-1);
function setStyle(style, element) {
  return Object.assign(element.style, style);
}

export class songList extends Component {
  constructor() {
    super();
    this.sort__By____COMPOS = sortedByComposers__fun();
    console.log(this.sort__By____COMPOS);
    this.sort__By____PERIOD = sortBygenres__fun();
  }

  get defaultState() {
    return {
      sorted: this.sort__By____PERIOD,
      checked: false,
      nowPlay: "null",
      nowPlay___e: null,
      nowplays___: 0,
      nowplays____l: 0,
      pointerEvents: "",
      clickedby___: true,
      resizeValue: false
    };
  }
  sort2() {
    this.setState({
      sorted: this.sort__By____PERIOD
    });
  }

  sort3() {
    this.setState({
      sorted: this.sort__By____COMPOS
    });
  }
  render() {
    let i = 0;
    let __ = this;
    return this.html`
  <button class="sort___LIST" id="sort___2"
      onclick=${this.sort2.bind(this)}></button> 
  <button class="sort___LIST" id="sort___1" 
       onclick=${this.sort3.bind(this)}></button>
     ${this.state.sorted.map(
       (A, i3) => wire(A)`
       <tr class='song---lists' data-key="${i3}">       
        <td class="shuffle_list3" 
            style=${{
              opacity:
                this.state.nowPlay ===
                `${A.songs} ${A.compo} ${A.titl} ${A.periods} ${A.duration_}`
                  ? "1"
                  : ".3"
              //
            }}>
         <img src="${`./src/images/${
           this.state.nowPlay ===
           `${A.songs} ${A.compo} ${A.titl} ${A.periods} ${A.duration_}`
             ? "list----green---33"
             : "list----333---3"
         }.png`}" alt="shufle"/>
         </td>       
         <td class="shuffle_list3">           
        <div class='play-lists---img'
           id=${"radio" + i++} 
           style=${this.state.pointerEvents && {
             pointerEvents:
               this.state.nowPlay ===
               `${A.songs} ${A.compo} ${A.titl} ${A.periods} ${A.duration_}`
                 ? "none"
                 : "auto"
           }} 
           onclick=
              ${(() => {
                let ____ = this;
                return function() {
                  ____.state.sorted
                    .filter((A, i) => i >= i3)
                    .map(A =>
                      now_play.push({
                        title: A.titl,
                        name: A.songs,
                        colorScheme: A.colorScheme,
                        compos_: A.compo,
                        duration: A.duration_,
                        src: A.src,
                        period_: A.periods,
                        image: A.image
                      })
                    );
                  songs_from_allmusic_ = true;
                  ____.setState({
                    clickedby___: ____.state.sorted === ____.sort__By____PERIOD
                  });
                  ____.dispatch("play_");
                  ____.dispatch("playAudios_");

                  ____.setState({
                    nowPlay: `${A.songs} ${A.compo} ${A.titl} ${A.periods} ${
                      A.duration_
                      //
                    }`,
                    nowplays___: i3
                  });
                  now_play = [];

                  now_play_play = [];
                };
              })()}>      
                  <svg height="8" width="8">
                    <polygon points="0,0 0,8, 8,4" style="stroke:#f4f4f4;fill:#f4f4f4;"/>
                  </svg>
                       </div></td>
                <td class='track-title-lis'>  
                    ${A.songs} 
                   <span class="play-lists---img" 
                   style=${this.sort__By____COMPOS === this.state.sorted &&
                     !this.state.clickedby___ && {
                       opacity:
                         this.state.nowplays___ <= i3 && songs_from_allmusic_
                           ? "1"
                           : "0"
                     }}>
                     <img src="./src/images/nowpl.png"
                      alt="imageof now plays"/>
                   </span></td>      
                    <td>${
                      this.state.resizeValue ? getIniti____(A.compo) : A.compo
                    }</td>
                  
                    <td class="nowrap">${A.titl}</td>
                    <td class="periods---show---hide">${A.periods}</td>
                    <td>${A.duration_}</td>
                  </tr>`
     )}  
    `;
  }
}

export class Autor extends Component {
  get defaultState() {
    let n = fun;
    let a = [],
      c,
      N__ = [],
      func,
      set;
    return {
      N_: JSON.parse(localStorage.getItem("playlist")) || [
        {
          localST___: [true],
          object: []
        }
      ],
      N__:
        n.map(I =>
          a.push(
            I.slice(I.lastIndexOf(" ")) + " " + I.slice(0, I.lastIndexOf(" "))
          )
        ) &&
        (c = a.sort()) &&
        (set = [...new Set(c.map(i => i[1]))]) &&
        (func = (i_, i) =>
          i === set.length
            ? N__
            : (N__.push({
                [set[i]]: i_.filter(A_ => A_[1].toUpperCase() === set[i])
              }),
              func(i_, i + 1)))(c, 0)
    };
  }
  _click(event) {
    let lists___;
    let COM___ = event.target.getAttribute("class");
    let lis____ = event.currentTarget.parentNode.parentNode.lastElementChild.textContent
      .replace(/\s(?=\s)/g, "")
      .slice(1)
      .split(" ");
    lists___ = lis____.splice(1).join(" ") + " " + [lis____[0]].join("");
    COM___ === "play-aut__image_" &&
      ((funfrom(lists___, true).map(i => i.map(i => now_play.push(i))),
      (this.dispatch("play_"),
      this.dispatch("playAudios_"),
      (songs_from_allmusic_ = false))),
      (now_play = []),
      (now_play_play = []),
      document.getElementById("audio").play());
  }
  render() {
    return this.html`
        ${this.state.N__.map(
          i => wire(i)`
            <div class="author-line"><div class='Letters----index'>
                    ${Object.keys(i)}</div>
                    ${i[Object.keys(i)]
                      .map(i => ({ A: i }))
                      .map(
                        I =>
                          wire(I)`<div class="composers1">
                        <div class="composerIMG">
                     <img src="${I.A.split(" ")[1].slice(
                       I.A.lastIndexOf("|")
                     )}" alt=${"composer image"} 
                          onload=${function() {
                            setStyle(
                              {
                                width:
                                  this.width > this.height ? "auto" : "100%",
                                height:
                                  this.width > this.height ? "100%" : "auto"
                              },
                              this
                            );
                          }}/>
                          <div class="composersPlays__plsts" 
                          onclick=${this._click.bind(this)}>
                                <svg class="play-aut__image_" 
                                    xmlns="http://www.w3.org/2000/svg"                               
                                    fill="#fff"                                                          
                                    viewBox="-5 2 24 12"
                                    width="50px"
                                    height="50px">             
                                    <path d="M 3 0.87304688 L 3 14.203125 L 3.7695312 13.712891 L 13.427734 7.5371094 L 3 0.87304688 z M 4 2.6992188 L 11.572277 7.5390625 L 4 12.377752 L 4 2.6772188 z"/>
                                   </svg>
                                <svg class="addToPlays-aut__image_"
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
                                            parent____: this.parentNode
                                              .parentNode.parentNode.parentNode
                                              .nextElementSibling,
                                            isByAUTHORS___: true,
                                            textContent__:
                                              event.currentTarget.parentNode
                                                .parentNode.parentNode
                                                .lastElementChild.textContent,

                                            slice____: 1
                                          }).createList()}`;
                                        };
                                      })()}
                                      >
                                      <polygon fill="#fff"
                                      points="612,286.893 325.116,286.893 325.116,0.296 286.903,0.296 286.903,286.893 0,286.893 0,325.107 286.903,325.107 
                                        286.903,611.704 325.116,611.704 325.116,325.107 612,325.107 			"/>                             
                                      </svg>
                                    </div>
                        </div><div class='composerName'>
                        ${I.A.slice(0, I.A.indexOf("|")) +
                          " " +
                          I.A.split(" ")
                            .splice(2)
                            .toString()
                            .replace(/\,/g, " ")}</div></div>`
                      )}</div><div class="O-------addtoplaylist">
                                                </div>`
        )}`;
  }
}
