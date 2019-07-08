const { Component, wire, bind } = hyperHTML;
export default class Newplaylists extends Component {
  constructor(props) {
    super(props);
    this.props = props;
  }
  createList() {
    const ___ = this;
    return function() {
      ___.props.parent____.style.display = "block";
      bind(___.props.parent____)`<div class="addtoplaylist-">
      <div class="addtoplaylist--">add to:</div>
      <div class="newplaylist---">
     <input type="text" placeholder="Playlist name..."/>
     <input type="button" value="ADD"
          onclick=${(() => {
            return function() {
              let plays_ = JSON.parse(localStorage.getItem("playlist")) || [];
              let lists;
              const niz___ = [];
              const lists___ = ___.props.isByAUTHORS___
                ? ___.props.textContent__
                    .replace(/\s(?=\s)/g, "")
                    .slice(___.props.slice____ || 0)
                    .split(" ")
                : ___.props.textContent__;
              lists = ___.props.isByAUTHORS___
                ? lists___.splice(1).join(" ") + " " + [lists___[0]].join("")
                : lists___;
              let texts_ = this.previousElementSibling.value || "My Playlist";
              let texts__ = plays_
                .map(n => n.localST___ === texts_)
                .some(i___ => i___ === true);
              let _, _____;
              return texts__
                ? (() => {
                    const _ = document.createElement("div");
                    _.innerHTML =
                      "<div>Attention</div> \nPlaylist with the name " +
                      texts_ +
                      " already exist";
                    _.setAttribute("class", "alert");
                    document.body.appendChild(_);
                    setTimeout(() => {
                      document.body.removeChild(_);
                    }, 3000);
                  })()
                : (fetch("../MUSIC_DATA_BASE.json")
                    .then(response => response.json())
                    .then(item =>
                      item.map(a =>
                        a.composers.map(
                          A =>
                            Object.keys(A)[0] === lists &&
                            A[Object.keys(A)[0]].album
                              .filter(C =>
                                ___.props.AmbumName
                                  ? C.title === ___.props.AmbumName
                                  : C.title === C.title
                              )
                              .map(N__ =>
                                N__.tracks_
                                  .filter(C =>
                                    ___.props.Songs
                                      ? C.name === ___.props.Songs
                                      : C.name === C.name
                                  )
                                  .map(
                                    i_ => (
                                      ((i_.compos_ = Object.keys(A)[0]),
                                      (i_.title = N__.title),
                                      (i_.image = A[Object.keys(A)].image),
                                      (i_.period_ = a.genre),
                                      (i_.colorScheme = a.colorScheme)),
                                      niz___.push(i_),
                                      localStorage.setItem(
                                        "playlist",
                                        JSON.stringify(
                                          plays_.concat({
                                            localST___: texts_,
                                            object: niz___
                                          })
                                        )
                                      )
                                    )
                                  )
                              )
                        )
                      )
                    ),
                  ((_ = this.parentNode.parentNode),
                  ___.props.this___.dispatch("updatePlaylist"),
                  (_.parentNode.style.display = "none")));
            };
          })()}/> 
    </div>
        ${(
          JSON.parse(localStorage.getItem("playlist")) || [{ localST___: "" }]
        ).map(
          n_ =>
            wire(n_)`
        <p style=${{
          padding: n_.localST___ ? "7px" : "0",
          display: n_.localST___ ? "block" : "none"
        }} onclick=${(() => {
              return function(event) {
                const niz___ = [];
                let lists;
                const lists___ = ___.props.isByAUTHORS___
                  ? ___.props.textContent__
                      .replace(/\s(?=\s)/g, "")
                      .slice(___.props.slice____ || 0)
                      .split(" ")
                  : ___.props.textContent__;
                lists = ___.props.isByAUTHORS___
                  ? lists___.splice(1).join(" ") + " " + [lists___[0]].join("")
                  : lists___;
                const node____ = event.currentTarget.parentNode.parentNode;
                fetch("../MUSIC_DATA_BASE.json")
                  .then(response => response.json())
                  .then(item =>
                    item.map(a =>
                      a.composers.map(
                        A =>
                          Object.keys(A)[0] === lists &&
                          A[Object.keys(A)[0]].album
                            .filter(C =>
                              ___.props.AmbumName
                                ? C.title === ___.props.AmbumName
                                : C.title === C.title
                            )
                            .map(N__ =>
                              N__.tracks_
                                .filter(C =>
                                  ___.props.Songs
                                    ? C.name === ___.props.Songs
                                    : C.name === C.name
                                )
                                .map(
                                  i_ => (
                                    ((i_.compos_ = Object.keys(A)[0]),
                                    (i_.title = N__.title),
                                    (i_.image = A[Object.keys(A)].image),
                                    (i_.period_ = a.genre),
                                    (i_.colorScheme = a.colorScheme)),
                                    niz___.push(i_)
                                  )
                                )
                            )
                      )
                    )
                  );
                (() => {
                  const _ = document.createElement("div");
                  _.innerHTML =
                    "<div>list updated</div> \nNew content added to " +
                    JSON.parse(localStorage.getItem("playlist")).filter(
                      n => n.localST___ === this.textContent
                    )[0]["localST___"] +
                    " palylist";
                  _.setAttribute("class", "alert");
                  document.body.appendChild(_);
                  setTimeout(() => {
                    document.body.removeChild(_);
                  }, 3000);
                })();
                setTimeout(() => {
                  JSON.parse(localStorage.getItem("playlist"))
                    .map(n => n.localST___ === this.textContent)
                    .some(i_ => i_ === true)
                    ? ((localStorage.playlist = JSON.stringify(
                        JSON.parse(localStorage.playlist).map((i, _z__) => ({
                          localST___: i.localST___,
                          object:
                            i.localST___ === this.textContent
                              ? i.object.concat(niz___)
                              : i.object
                        }))
                      )),
                      (___.props.this___.dispatch("updatePlaylist"),
                      (node____.style.display = "none")))
                    : false;
                }, 3000);
              };
            })()}>${n_.localST___}</p>`
        )}
<div class="exit-----adtoplay--" 
onclick=${function() {
        this.parentNode.parentNode.style.display = "none";
      }}> exit </div></div>`;
    };
  }
}
