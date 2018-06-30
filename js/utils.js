const render = (html = ``) => {
  const template = document.createElement(`div`);
  template.innerHTML = html.trim();

  return template;
};

const parent = document.querySelector(`.central`);

const changeScreen = (element) => {
  parent.innerHTML = ``;
  parent.appendChild(element);
};

const DEFAULT_TIME = 30;

const getNewState = (answer, game) => {
  return {
    lives: answer ? game.lives : game.lives - 1,
    level: game.level + 1,
    time: DEFAULT_TIME,
    stats: game.stats.concat({answer, time: game.time})
  };
};

export {render, changeScreen, getNewState};
