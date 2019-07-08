const { wire } = hyperHTML;

const sethash1 = a =>
  a === "My music" ? "/Song" : a === "Playlist" ? "/new" : "";
const { Component } = hyperHTML;

export default class menuitems extends Component {
  constructor() {
    super();
    this.title = "";
  }
  ////////////

  get defaultState() {
    return {
      display: "true",
      currentItem: "Now playing",
      curententer: null,
      backgroundsMenu: null,

      images_paths: [
        { "./src/images/notes.png": "My music" },
        { "./src/images/clock.png": "Recent plays" },
        { "./src/images/nowpl.png": "Now playing" },
        { "./src/images/playlist.png": "Playlist" },
        { "./src/images/settings.png": "Settings" },
        { "": "Search" }
      ],
      hovers: false,
      anotherc_: false
    };
  }
  click(event) {
    let style = document.querySelector("style");
    let trenutniElement = event.currentTarget;
    this.title = trenutniElement.children[0].children[1].textContent;
    this.state.anotherc_ &&
      (style.innerHTML = window.location.hash.includes("Nowplaying")
        ? style.innerHTML
            .replace("#fffFFf", "rgb(226, 138, 30)")
            .replace("#c8b8b8", "#333")
        : //
          //
          style.innerHTML
            .replace("rgb(226, 138, 30)", "#fffFFf")
            .replace("#333", "#c8b8b8"));
    trenutniElement.firstElementChild.click();
    this.setState({ backgroundsMenu: event.currentTarget });

    this.dispatch("shows", this.title);

    document.querySelector(".menu-container").style.background =
      this.title === "Now playing" && window.innerWidth > 1025
        ? document.getElementById("audio").src
          ? "transparent"
          : "rgba(0, 0, 0, 0.888)"
        : "transparent";
  }

  enter(event) {
    this.setState({ curententer: event.currentTarget, hovers: true });
  }
  mousleave() {
    this.setState({ hovers: false });
  }

  render() {
    return this.html`${this.state.images_paths.map(
      (A, N) => wire(A)`<div class="${`menu-item${
        N === 2
          ? " menu-item-pre"
          : N === 5
          ? " serach---items---"
          : N === 4
          ? " settings-items"
          : ""
      }`}"  onmousemove=${this.enter.bind(
        this
      )} onmouseleave=${this.mousleave.bind(this)}  onclick=${this.click.bind(
        this
      )}>  
                      <a href=javascript:void(0) 
                      
                      onclick="${() =>
                        (location.href =
                          "#" +
                          Object.values(A)[0].replace(" ", "") +
                          sethash1(Object.values(A)[0]))}" 
                          draggable="false">
                          <div class="menu-item-images">
                          <img  src=${Object.keys(A)[0]}     
                          alt=${Object.keys(A)[0].slice(
                            Object.keys(A)[0].lastIndexOf("/") + 1,
                            Object.keys(A)[0].lastIndexOf(".")
                          )}></div>                           
                        <div class="menu-item-tekst" style=${{
                          display: this.state.display ? "block" : "none"
                        }}>${Object.values(A)[0]}</div></a>      
                    <div class="menu-hover-anim" style=${{
                      background:
                        this.state.curententer &&
                        this.state.hovers &&
                        Object.values(A)[0].replace(/\s/g, "") ===
                          this.state.curententer.textContent.replace(/\s/g, "")
                          ? `radial-gradient(circle at ${Math.round(
                              event.clientX * 0.3
                            )}%, #888,#777,#333)`
                          : "transparent"
                    }}></div><div class="top-menu-line-border-------" 
                    style=${{
                      display:
                        this.state.display && (N === 3 || N === 4)
                          ? "block"
                          : "none"
                    }}></div>
                    <div class="meni_ndikatori"                                     
                    style=${this.state.backgroundsMenu && {
                      background:
                        Object.values(A)[0].replace(/\s/g, "") ===
                        this.state.backgroundsMenu.textContent.replace(
                          /\s/g,
                          ""
                        )
                          ? `rgb(226, 138, 30)`
                          : "transparent"
                    }}></div></div>`
    )}`;
  }
}
//
//
//
