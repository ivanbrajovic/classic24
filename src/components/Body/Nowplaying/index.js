const { Component, wire } = hyperHTML;
import { ProgressNowplay } from "../ProgressNowplay";
export default class Nowplaying extends Component {
  constructor() {
    super();

    this.ProgressNowplay = new ProgressNowplay();
  }
  get defaultState() {
    return {
      whichInMenu: [
        {
          duration: "",
          compos_: "",
          name: "",

          src: "",
          title: "No current plays",
          image: ""
        }
      ],
      whichInMenuTitles: [
        {
          compos_: "",
          name: "",
          title: "No current plays"
        }
      ],
      nowPlay: "",
      setFIRSonLOAD: true,
      background____: "",
      notSetBottom: true
    };
  }
  set__() {
    this.setState({
      whichInMenu: []
    });
  }
  click777(event) {
    const id = event.currentTarget.getAttribute("id");

    const ___ = id.slice(id.lastIndexOf("_") + 1);
    this.state.whichInMenu.filter((A, a1) => a1 >= ___);

    this.dispatch("playnowplay", { ___ });
    event.currentTarget.click();
    document.getElementById("audio").play();
  }

  setminimalWindows__() {
    this.setState(n___ => ({
      notSetBottom: !n___.notSetBottom
    }));
  }
  render() {
    return this.html`
  <div class="nowPlaying_">
    ${
      this.state.background____
        ? wire()`<img src="${this.state.background____.replace(
            "default-sound",
            "clasicizam_"
          )}"
           alt="background"/>`
        : ""
    }
   </div>
  
   <button class="sort___LIST" id="now-playnig"
     onclick=${this.set__.bind(this)}></button>
     <div class="now----playing----container----" 
       style=${{
         position: this.state.notSetBottom ? "static" : "absolute",
         top: this.state.notSetBottom ? "auto" : "calc(100% - 398px)"
       }}  >
         <div class="now----playing----now____">
             <h2 class="now----playing----now____T--">
             ${this.state.whichInMenuTitles[0].title}    
            </h2>
             <h3 class="now-plays-tracks">
               ${this.state.whichInMenuTitles[0].name}</h3>
          ${(this.state.whichInMenuTitles[0].name && wire()`<p>by</p>`) ||
            wire()`<div></div>`}
             <h4 class="now----playing----now____authors---">
             ${this.state.whichInMenuTitles[0].compos_}
             </h4></div>
             <div class="audio-animation">                
            ${this.ProgressNowplay}          
           </div>
        ${(this.state.whichInMenu[0].name &&
          wire()`
      <div class="setMinimal" 
      onclick=${this.setminimalWindows__.bind(this)}
      style=${{
        transform: this.state.notSetBottom
          ? "rotate(135deg) translateX(-50%)"
          : "rotate(-45deg) translateX(-50%)"
      }}></div>
       <div class='nows-table' style=${{
         display: this.state.notSetBottom ? "block" : "none"
       }}><table>
            <tr class="now_tables_"><th>name</th><th>author</th><th>duration</th></tr>
                 ${this.state.whichInMenu.map(
                   (i_, i___) =>
                     wire(i_)`
               <tr class="now----playing---line----" id="${`now_plays____${i___}`}"
                onclick=${this.click777.bind(this)}>
               <td class="nowPlaying---song">
                 ${
                   this.state.nowPlay ===
                     `${i_.name} ${i_.compos_} ${i_.title} ${i_.period_} ${
                       i_.duration
                     }` ||
                   (this.state.setFIRSonLOAD && i___ === 0)
                     ? wire(i_)`                    
                     <span class="current_anim">                  
                     <img 
                     src="./src/images/list----green---33.png"   
                     alt="shufle"                     
                      style=${{
                        width: "100%"
                      }}/>                  
                    <span class="border---puls---"></span></span>                 
                      `
                     : ""
                 }                      
                  ${i_.name}               
              </td> <td class="nowPlaying---song">${
                i_.compos_
              }</td><td class="nowPlaying---song">${i_.duration}</td></tr>
               `
                 )}</table> </div>
        `) ||
          wire()`<div></div>`} </div> `;
  }
}
