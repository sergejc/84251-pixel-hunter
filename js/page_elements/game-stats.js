import {GameSpeed, ATTEMPTS_COUNT, AnswerType} from '../data/game-state';

const getTypeByTime = (time) => {
  if (time < GameSpeed.FAST) {
    return AnswerType.FAST;
  }

  if (time > GameSpeed.SLOW) {
    return AnswerType.SLOW;
  }

  return AnswerType.CORRECT;
};

const getGameStatus = (stat) => {
  if (!stat) {
    return AnswerType.UNKNOWN;
  }

  if (!stat.answer) {
    return AnswerType.WRONG;
  }

  return getTypeByTime(stat.time);
};

const convertToTypes = (stats) => {
  return [...Array(ATTEMPTS_COUNT).keys()].map((key) => {
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
