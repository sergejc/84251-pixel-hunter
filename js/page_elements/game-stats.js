const getTypeByTime = (time) => {
  if (time < 10) {
    return `fast`;
  }

  if (time > 20) {
    return `slow`;
  }

  return `correct`;
};

const getGameStatus = (stat) => {
  if (!stat) {
    return `unknown`;
  }

  if (!stat.answer) {
    return `wrong`;
  }

  return getTypeByTime(stat.time);
};

const convertToTypes = (stats) => {
  return [...Array(10).keys()].map((key) => {
    return getGameStatus(stats[key]);
  });
};

const gameStats = (stats) => {
  const html = convertToTypes(stats).map((value) => {
    return `<li class="stats__result stats__result--${value}"></li>`;
  });
  return `<ul class="stats">${html.join(``)}</ul>`;
};

export {gameStats, convertToTypes};
