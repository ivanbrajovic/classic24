const { wire } = hyperHTML;
const Bodytitle = state =>
  wire(state)`<h1 class="${`bodytitle ${
    state.title === "Now playing" ? "nowplaying---title---" : ""
  }`}">${state.title}</h1>`;

export { Bodytitle };
