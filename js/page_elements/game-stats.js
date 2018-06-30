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

const gameStats = (stats) => {
  const html = [...Array(10).keys()].map((key) => {
    return `<li class="stats__result stats__result--${getGameStatus(stats[key])}"></li>`;
  });
  return `<ul class="stats">${html.join(``)}</ul>`;
};

export default gameStats;
