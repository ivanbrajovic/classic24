const { wire, Component } = hyperHTML;
import { coordinates__, regulate__ } from "../../global";
import { Volume } from "../../Players";
export class ProgressNowplay extends Component {
  constructor(props) {
    super(props);
    this.Volume = new Volume();
    window.addEventListener("resize", () => {
      let n, i;
      location.hash.includes("#Nowplaying") &&
        ((n = document.querySelector(".now-progress-overflow___hidden-")
          .offsetWidth),
        (i = document.querySelector(".volume___").offsetWidth),
        this.setState({
          progres_width: ((n - 15) * 100) / n / 100,
          progres_width_volume: ((i - 15) * 100) / i / 100
        }));
    });
  }
  get defaultState() {
    return {
      removeMousemove__: false,
      removeMousemove____: false,
      mousedown__: false,
      currentTime: "00:00",
      length_ofsong_: "",
      progress_: 0,
      progres_width: 0,
      progres_width_volume: 0,
      mute__: false,
      pointerEVENT: false,
      repeat: false,
      play: { icon: "./src/images/pause_image.png", name: "pause" },
      shuffl: false,
      shuffl_: false,
      settimer___: () => 0,
      z___index: -1,
      duration: 0,

      commands: [
        { icon: "./src/images/shufle_image.png", name: "random" },

        { icon: "./src/images/img777.png", name: "prev" },
        { icon: "./src/images/play_image.png", name: "play" },
        { icon: "./src/images/img777.png", name: "next" },
        { icon: "./src/images/again_images.png", name: "repeat" }
      ],
      volumes_: 100,
      volumeicons: "./src/images/volume3.png",
      resizeImages__: 0
    };
  }
  movemousee(____) {
    let x, i, o, s;
    !this.state.removeMousemove__ &&
      window.removeEventListener("mousemove", this.movemousee());
    return event => {
      this.state.removeMousemove__ &&
        ((x = event.clientX),
        (i = document.querySelector(".now-progress-overflow___hidden-")),
        (o = coordinates__(i)),
        ____.setState({
          progress_: regulate__(
            (~(o - x) * 100) / i.offsetWidth,
            i.offsetWidth
          ),
          movingTime: (____.state.progress_ * 100) / ____.state.length_ofsong_
        }),
        ((s = this.state.progress_ > 99 ? 99.8 : this.state.progress_),
        this.dispatch("clickprogre", { s })));
    };
  }
  press_(event) {
    const _ = event.currentTarget.data;
    _ === "play" &&
      this.setState({
        play: { icon: "./src/images/pause_image.png", name: "pause" }
      });
    _ === "pause" &&
      this.setState({
        play: { icon: "./src/images/play_image.png", name: "play" }
      });
    _ === "random" &&
      (this.setState(i_ => ({
        shuffl_: !i_.shuffl
      })),
      this.dispatch("randomiseAndShuff", this.state.shuffl_));
    this.dispatch("nowplayControlPressed", { _ });
  }
  moveVol(____) {
    let x, i, z, _;
    !this.state.removeMousemove____ &&
      window.removeEventListener("mousemove", this.moveVol());
    return event => {
      this.state.removeMousemove____ &&
        ((x = event.clientX),
        (i = document.querySelector(".volume___")),
        (z = coordinates__(i)),
        ____.setState({
          volumes_: regulate__((~(z - x) * 100) / i.offsetWidth, i.offsetWidth),
          volumeicons: this.setVolumeIcons(this.state.volumes_)
        }),
        (_ = this.state.volumes_),
        this.dispatch("volumedowns", { _ }));
    };
  }
  setVolumeIcons(a) {
    return a >= 0 && a < 25
      ? "./src/images/volume0.png"
      : a >= 25 && a <= 50
      ? "./src/images/volume1.png"
      : a > 50 && a <= 75
      ? "./src/images/volume2.png"
      : "./src/images/volume3.png";
  }
  mouseDown(event) {
    this.setState({
      removeMousemove__: true,
      mousedown__: true
    });
    let x = event.clientX;
    let i = event.currentTarget;
    let o = coordinates__(i);
    this.setState({
      progress_: (~(o - x) * 100) / i.offsetWidth
    });
    const _ = this.state.progress_;
    window.addEventListener("mousemove", this.movemousee(this));
    this.dispatch("downfromnownanaen", { _ });
  }
  mouseup_() {
    this.setState({
      removeMousemove__: false
    });
    this.dispatch("nowKeyUp___");
  }
  klikovi() {
    const _ = this.state.progress_;
    this.dispatch("kliknutoizNowanana", { _ });
  }
  volumedown_() {
    this.setState({
      removeMousemove____: true,
      mousedown__: true
    });
    let x = event.clientX;
    let i = event.currentTarget;
    let o = coordinates__(i);
    this.setState({
      volumes_: (~(o - x) * 100) / i.offsetWidth
    });
    window.addEventListener("mousemove", this.moveVol(this));
  }
  volumedownsklik() {
    this.setState({
      volumeicons: this.setVolumeIcons(this.state.volumes_)
    });
    const _ = this.state.volumes_;
    this.dispatch("volumedownsklik__", { _ });
  }
  volumeup_() {
    this.setState({
      removeMousemove____: false
    });
  }

  mute_() {
    this.setState(n_ => ({
      mute__: !n_.mute__,
      volumeicons: !n_.mute__
        ? "./src/images/iskljucizvukprivrremeno.png"
        : this.setVolumeIcons(this.state.volumes_)
    }));
    const _ = this.state.mute__ ? 0 : this.state.volumes_;
    this.dispatch("volumesmute____", { _ });
  }
  render() {
    const {
      currentTime,
      progres_width,
      progress_,
      removeMousemove__,
      duration,
      length_ofsong_
    } = this.state;
    return this.html`
  <div id="progress----now----playing----" style=${{
    zIndex: this.state.z___index
  }}>
     <div class="now---playin---timeline-prog---" style=${{
       pointerEvents: this.state.pointerEVENT ? "none" : "auto"
     }}>
       <span class="timenow-">${currentTime}</span>
       <div class="now-progress-overflow___hidden-" 
       onmousedown=${this.mouseDown.bind(this)}
       onmouseup=${this.mouseup_.bind(this)} 
       onclick=${this.klikovi.bind(this)}>
       <div class='now--outer---progress-----' >
         <div class="now---iprogr---" style=${{
           width: `calc(${progress_ * progres_width}% - 3px)`
         }}></div><div class="now---iprogr---circle"  style=${{
      left: `${progress_ * progres_width}%`,
      background: removeMousemove__ ? "white" : "transparent",
      transform: removeMousemove__
        ? "translateY(-50%)scale(1.5)"
        : "translateY(-50%)scale(1)"
    }}></div>
     <div class="moving-indicator" style=${{
       left: `calc(${progress_ * progres_width}% - 5px)`,
       display: removeMousemove__ ? "block" : "none"
     }}>${
      removeMousemove__ && !isNaN(Math.floor((progress_ * duration) / 100))
        ? this.state.settimer___(Math.floor((progress_ * duration) / 100))
        : ""
    }</div>
           <div class="progres-f-now" style=${{
             width: `calc(${100 - progress_ * progres_width}% - 20px)`
           }}></div>
       </div>
       </div>
       <span class="timenow-">${length_ofsong_}</span>
     </div> 
 <div class="now-controls_icon">
${this.state.commands.map(
  (N_, I_) =>
    wire(N_)`
<div class="${`now-__ic${
      I_ === 0 || I_ === 4
        ? " repeatShufle----"
        : I_ === 1
        ? " prev---button---3 set---other-paddings--"
        : I_ === 2
        ? " set---play---big-"
        : " set---other-paddings--"
    }`}" 
  onclick=${this.press_.bind(this)} data="${
      I_ == 2 ? this.state.play.name : N_.name
    }" style=${{
      background:
        (I_ === 4 && this.state.repeat) || (I_ === 0 && this.state.shuffl)
          ? "radial-gradient(#212424, #333)"
          : "transparent"
    }}>
    <img src="${I_ == 2 ? this.state.play.icon : N_.icon}" alt="commands" />
  </div>`
)}</div>
     ${this.Volume}</div> `;
  }
}
