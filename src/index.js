import Main from "./main";
const { bind } = hyperHTML;
const application = document.getElementById("app");
const main = new Main();
bind(application)`${main}`;

addEventListener("load", () =>
  setTimeout(
    () => (
      document.querySelector(".menu-item a").click(),
      (document.body.style.visibility = "visible")
    ),
    1000
  )
);
