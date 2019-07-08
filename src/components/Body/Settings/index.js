const { wire, Component } = hyperHTML;
const setStyle = (style, element) => Object.assign(element.style, style);
export default class Settings extends Component {
  constructor() {
    super();
  }
  get defaultState() {
    return {
      clickfont_: false,
      click1: false,
      click2: false
    };
  }

  fadeout___() {
    this.setState(I___ => ({
      click1: !I___.click1
    }));
  }
  setStyles(click, __) {
    click
      ? (setStyle(
          {
            background: "radial-gradient(#337d77, #337d77, #777)",
            boxShadow: "-3px 0px 21px solid #000",
            left: "23px"
          },
          __
        ),
        setStyle({ backgroundColor: "#337d77" }, __.parentNode))
      : (setStyle(
          {
            background: "radial-gradient(#888, #777, #777)",
            boxShadow: "3px 0px 21px solid #000",
            left: "0"
          },

          __
        ),
        setStyle({ backgroundColor: "#333333" }, __.parentNode));
  }

  changefont__() {
    this.setState(I__ => ({
      clickfont_: !I__.clickfont_
    }));
    document.body.style.fontFamily = this.state.clickfont_
      ? '"GeosansLight", Arial, sans-serif'
      : "segoeui";
    this.dispatch("changeFont", document.body.style.fontFamily);
  }
  render() {
    return this.html`
      <div class="settingsbody----">
         <div class="aboutset---"> <h2>About</h2>
            <ul>
                <li>version : 1.0.0</li>
                <li>published: may 2019</li>
                <li>by: Ivan Brajovic</li>
            </ul>
             <p>24 classic music player is an desktop mp3 player software for online '24 Classic' music database. Inspired by modern online players 24Classic brings modern design and friendly user interface. '24 Classic' database only contains classical music from medieval to contemporary period</p> 
       </div>
    <div class="setting-o-">
        <h4>Toggle font family</h4>
        <div class="c----hn----font----"
        
         onclick=${this.changefont__.bind(this)}>change</div>


        </div><div class="setting-o-">
        <h4>Toggle background theme</h4>
        <div class="change_0__stting----">
            <div class="cange_0_kugel----"
        onclick=${(() => {
          const _ = this;

          return function() {
            _.setState(I___ => ({
              click1: !I___.click1
            }));
            _.setStyles(_.state.click1, this);

            document.querySelector("style").innerHTML = _.state.click1
              ? `::-webkit-scrollbar {
                width: 12px;
                background-color:#f4f4f4;
                }
                ::-webkit-scrollbar-thumb {
                background-color: #c8b8b8 !important;
                }
                .albumFrames {
                
                  box-shadow: 2px 4px 19px #c7c7c7 !important;
                }            .bodytitle
                , 
                 .composerName,
                 .album-title-container1,
                 .album----addToPlaylst,.playlist---title,.now----playing----now____T----,.searched-results,.td-Search-With-------PlayAndplists- { filter: invert(1)!important }
                 .search-line--{background-color: #e4e4e4; }.search-line--:nth-child(odd){background-color: #f4f4f4;}.search-line-- td{color:#282828}.songsearch---- table tr:first-child{background:linear-gradient(to right,rgb(200, 184, 184), rgb(207, 156, 119), rgb(206, 192, 193))}.body-menu li:hover {
                        color: #333 !important;
                } .nowplaying---title---,.searched-results-songs{filter: invert(0)!important}`
              : "";
            _.dispatch("promeniback__", _.state.click1);
          };
        })()}></div></div>    
        <div class="settings-on--off" style=${{
          color: this.state.click1 ? "#0c0c0c" : "#F4F4f4"
        }}>${this.state.click1 ? "Light" : "Dark"}</div>
    </div>
    <div class="setting-o-">
        <h4>Disable lists autorepeat</h4>
        <div class="change_0__stting----">
            <div class="cange_0_kugel----"
        onclick=${(() => {
          const _ = this;
          return function() {
            _.setState(I___ => ({
              click2: !I___.click2
            }));
            _.setStyles(_.state.click2, this);
            _.dispatch("repeat", _.state.click2);
          };
        })()}></div></div>      
        <div class="settings-on--off" 
           style=${{
             color: this.state.click1 ? "#0c0c0c" : "#F4F4f4"
           }}>${this.state.click2 ? "ON" : "OFF"}</div>
  
    </div>
    
   </div>`;
  }
}
