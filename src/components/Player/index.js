const { Component, bind, wire } = hyperHTML;
import { Volume, Playermain } from "../Players";
import { ProgressNowplay } from "../Body/ProgressNowplay";

import { coordinates__ } from "../global";
let sethover___ = (event, HOVERs) => {
  let x = event.clientX;
  let i = event.currentTarget;
  let o = coordinates__(i);
  let s = x - o;
  let _ = document.querySelectorAll(HOVERs);
  let a = s - 377;
  const _i = (i, n = 0.3) => (x - coordinates__(i)) * n;
  _.forEach(
    n =>
      (n.style.background =
        s < coordinates__(n) - o + 80 && s + 80 > coordinates__(n) - o
          ? `radial-gradient(ellipse at ${i.offsetLeft -
              a +
              10}%, transparent, ${57 +
              (_i(n) < 10 ? 15 - _i(n) : _i(n))}%,          
               #FFFFFF, #ffffff)`
          : "transparent")
  );
};
class Player extends Component {
  constructor() {
    super();
    this.Volume = new Volume();
    this.Playermain = new Playermain();
    this.ProgressNowplay = new ProgressNowplay();
    this.Playermain.setState({
      additionalClassName: "set----player---com----main-"
    });
  }
  get defaultState() {
    return {
      opacity: 1,
      displays__: "flex",
      backgroundColor:
        "linear-gradient(to right, #d3c8b3, #9f6424,#ad3f26,#d3bb8d)",
      title: "",
      cover: "",
      composers__: "",
      composition: "",
      zIndexvolumes__: false
    };
  }

  hovers_(event) {
    sethover___(event, ".HOVERs");
  }
  hoverremove___() {
    document
      .querySelectorAll(".HOVERs")
      .forEach(n => (n.style.background = "transparent"));
  }
  render() {
    const { opacity, displays__, backgroundColor } = this.state;
    return this.html`
        <div class='player-container' style=${{
          opacity: opacity,
          display: displays__,

          background: backgroundColor
        }}>
        <div class="playerLeftInfo">
        <div class="leftplayerimage_">
          ${
            this.state.zIndexvolumes__
              ? wire(this.state)`<img src="${
                  this.state.cover
                }" alt="Cover images" 
          onload="${function() {
            (this.style.width = this.width > this.height ? "auto" : "100%"),
              (this.style.height = this.width > this.height ? "100%" : "auto");
          }}"/>`
              : ""
          }
        </div>
        <div class="leftplayertitl__">
          <h3 class="leftplayerTITLE___">${this.state.composition}</h3>
          <p class="leftPlayer_titlefrom_">${this.state.title}</p>
        </div>
      </div>
      <div class="player-con---centarl--all---">
        <div class="player-main-" 
       style=${{
         zIndex: this.state.zIndexvolumes__ ? "1" : "-1"
       }}
       onmousemove=${this.hovers_.bind(this)}
       onmouseleave=${this.hoverremove___.bind(this)}
       >${this.Playermain}</div><div class="player-main-volumes--------" 
        style=${{
          zIndex: this.state.zIndexvolumes__ ? "1" : "-1"
        }}>
        ${this.Volume}
      
      </div>
        </div>
      `;
  }
}
export default Player;
