import MenuButton from "./MenuButton";
import MenuContent from "./MenuContent";
import MenuSeach from "./MenuSearch";

const { Component } = hyperHTML;

class Menu extends Component {
  constructor() {
    super();
    this.menuBitton = new MenuButton();
    this.menuContent = new MenuContent();
    this.menuSeach = new MenuSeach();
  }
  get defaultState() {
    return {
      clcikedMenu: false,
      searchFiled: null,
      display___: "block",
      Images: "./src/images/medieval.jpg",
      mHeight__: "calc(100% - 88px)",
      menuImageOpacit____: 1,
      invert__colors_: "invert(0)"
    };
  }

  onmenuhide() {
    this.setState({
      clcikedMenu: this.menuBitton.checked
    });
    this.menuSeach.setState({ showOnly: this.menuBitton.checked });
    this.menuContent.menuitems.setState({ display: !this.menuBitton.checked });
  }
  click(event) {
    let elm = event.target;
    !elm.parentNode.classList.contains("searchfiled") &&
      !elm.parentNode.parentNode.classList.contains("searchfiled") &&
      this.menuSeach.setState({ focus: 1 });
  }
  onshows(event) {
    this.menuBitton.setState({
      display: event.detail !== "Now playing"
    });
  }
  render() {
    return this.html`
        <div class="menu-container" style=${{
          height: this.state.mHeight__,
          filter: window.location.hash.includes("Nowplaying")
            ? "invert(0)"
            : this.state.invert__colors_,
          borderRight: this.menuBitton.state.display
            ? "1px solid #282828"
            : "none",
          display: this.state.display___
        }}
         onmenuhide="${this}" onclick=${this.click.bind(this)} onshows=${this}>
        <div class="backgroundMenu" style=${{
          opacity: this.state.menuImageOpacit____
        }}><div class="backgroundmenu_blurs">
          </div>
         </div>
          ${this.menuBitton.update(this.state)}
    <div class='menuSearch' style="${{
      width: this.state.clcikedMenu ? "50px" : "300px",
      zIndex: this.menuBitton.state.display ? "1" : "-1",
      opacity: this.menuBitton.state.display ? "1" : "0"
    }}">
     ${this.menuSeach}
        </div>        
       <div class="menuContent" style="${{
         width: this.state.clcikedMenu ? "50px" : "300px",
         height: this.menuBitton.state.display
           ? "calc(calc(100% - 127px)"
           : "auto",
         top: this.menuBitton.state.display ? "auto" : "0"
       }}">  
         ${this.menuContent}  
        </div>
        <a href="../"> <div class="gotoweb_" style=${{
          display: this.menuBitton.state.display ? "flex" : "none"
        }}>
        <div style=${{
          display: this.state.clcikedMenu ? "none" : "block"
        }}>visit website for online radio</div>
        </div></a>
        </div>`;
  }
}

export default Menu;
