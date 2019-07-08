export let fun = [
  ...new Set(FUN_.map(n => n.compos_ + "|||" + n.composerimage_))
];

let N___ = a => a.split(" ");

export let sortedByComposers__fun = (sortedByComp = []) =>
  FUN_.map(n =>
    n.name.map((a, i) =>
      sortedByComp.push({
        colorScheme: n.colorScheme,
        songs: a,
        compo:
          N___(n.compos_)[N___(n.compos_).length - 1] +
          " " +
          N___(n.compos_)
            .slice(0, N___(n.compos_).length - 1)
            .join(" "),
        titl: n.title,
        periods: n.period_,
        duration_: n.duration[i],
        src: n.src[i],
        image: n.image__
      })
    )
  ) && sortedByComp.sort((a, b) => a.compo.localeCompare(b.compo));
export let sortBygenres__fun = (sortBygenres = []) =>
  FUN_.map(n =>
    n.name.map((a, i) =>
      sortBygenres.push({
        colorScheme: n.colorScheme,
        songs: a,
        compo: n.compos_,
        titl: n.title,
        periods: n.period_,
        duration_: n.duration[i],
        src: n.src[i],
        image: n.image__
      })
    )
  ) && sortBygenres;

export let ALbum_sort_ = (album__1 = []) =>
  FUN_.map(a =>
    album__1.push({
      titl: a.title,
      compo: a.compos_,
      slika_1: a.image__,

      colorScheme: a.colorScheme
    })
  ) && album__1;
export let ALbum_sort_Name_ = (album__1name__ = []) =>
  FUN_.map(a =>
    album__1name__.push({
      colorScheme: a.colorScheme,
      titl: a.title,
      compo: a.compos_,
      slika_1: a.image__
    })
  ) && album__1name__.sort((a, b) => a.compo.localeCompare(b.compo));

export let coordinates__ = E =>
  E.getBoundingClientRect().left +
  (window.pageXOffset || document.documentElement.scrollLeft);

export let coordinates___ = E =>
  E.getBoundingClientRect().top +
  (window.pageXOffset || document.documentElement.scrollLeft);
export let regulate__ = (n__, n) => (n__ < 0 ? 0 : n__ > 100 ? 100 : n__);
window.now_play = [];

window.now_play_play = [];
window.volume___SET = 100;
window.songs_from_allmusic_ = false;
window.timelinePlay = 0;
