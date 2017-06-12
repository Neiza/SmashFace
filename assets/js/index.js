"use strict"
const gameContainer = () => {
  const gameCont = $(".game-container");
  gameCont.prepend(ClassmateName());
  gameCont.prepend(Sede());
  gameCont.prepend(Header());

}

const render = (root) => {
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  wrapper.append(ClassmatePicture(_ => render(root)));

  root.append(wrapper);
}

const state = {
  stations: null,
  selectedStation: null
};

$( _ => {

/*  getJSON('stations.json', (err, json) => {

    if (err) { return alert(err.message);}

    state.stations = json;
    const root = $('.root');
    gameContainer();
    render(root);
  });*/

  const root = $('.root');
  gameContainer();
  render(root);
});
