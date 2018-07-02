const canContinue = (game) => {
  return game.lives > 0;
};

const die = (game) => {
  const lives = game.lives - 1;
  return Object.assign({}, game, {lives});
};

const changeLevel = (game, level) => {
  return Object.assign({}, game, {level});
};

const updateGameState = (game, result) => {
  return Object.assign({}, game, result);
};

export {canContinue, changeLevel, die, updateGameState};
