const { Component, wire } = hyperHTML;
const sliceHref = links____ => links____.slice(0, links____.indexOf(" "));
export class Bodymensu extends Component {
  get defaultState() {
    return { lst: [{ item: "" }], curent__: "", playlistCreate: false };
  }
  link_() {
    setTimeout(() => this.dispatch("menuClick"), 100);
  }

  get___(event) {
    this.dispatch("menuClick");
    document
      .querySelectorAll(".bodyMenuLIin")
      .forEach(
        elm =>
          (elm.style.background =
            event.currentTarget.lastElementChild === elm
              ? "rgb(226, 138, 30)"
              : "transparent")
      );
    try {
      event.currentTarget.parentNode.parentNode.previousElementSibling
        .textContent !== "Playlist" &&
        document.getElementById("body-links").click();
    } catch (e) {}
    event.currentTarget.textContent.includes("Sort by") &&
      document.getElementById("body-links").click();
  }
  render() {
    return this.html`${this.state.lst.map(
      n => wire(n)`
          <li 
         onclick=${this.get___.bind(this)} 
          class="body-list-menusMain">${wire(n)`<a
        href=${location.href.slice(0, location.href.indexOf("/#")) +
          (location.href.includes("Mymusic")
            ? "/#Mymusic/"
            : location.href.includes("Playlist")
            ? "/#Playlist/"
            : "") +
          (n.item ? sliceHref(n.item) : "")}
           >${n.item}   
      ${
        n.item === "Sort by"
          ? wire(n)`<span class='sort-FROM'>&nbsp;A - Z</span>`
          : ""
      }`}</a><div class="bodyMenuLIin"></div></li>`
    )}`;
  }
}
