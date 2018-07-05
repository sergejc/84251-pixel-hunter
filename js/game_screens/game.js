import {render, changeScreen} from '../utils';
import {INITIAL_GAME, levels, Result} from '../data/game-state';
import {die, canContinue, changeLevel, updateGameState} from '../rules';

import HeaderView from '../view/header-view';

/*
import footer from '../page_elements/footer';
import statsScreen from './game-over';
*/

// container element
const gameContainerElement = render();

// render wrappers
const headerElement = render();
const levelElement = render();
const footerElement = render();

// init game content
gameContainerElement.appendChild(headerElement);
gameContainerElement.appendChild(levelElement);
gameContainerElement.appendChild(footerElement);

// state container
let game;

const getLevel = (levelNum) => levels[`level-${levelNum}`];

const onAnswer = (answer) => {
  const nextLevel = getLevel(game.level + 1);

  switch (answer.result) {
    case Result.NEXT:
      game = updateGameState(game, {time: answer.time, result: 1});
      if (nextLevel) {
        game = changeLevel(game, game.level + 1);

      }
      break;
    case Result.DIE:
      game = die(game, answer);
      break;
    case Result.NOOP:
      // nope
      return void 0;
  }

  if (nextLevel && canContinue(game)) {
    updateGame(game);
    game = updateGameState(game, answer);
  } else {
    // game over
  }
};

// GAME
const updateView = (container, view) => {
  container.innerHTML = ``;
  container.appendChild(view.element);
};


const updateGame = (state) => {
  updateView(headerElement, new HeaderView(state));

  const level = getLevel(game.level);
  const view = level.view;
  const levelView = view(game, level);

  levelView.onAnswer = onAnswer;
  updateView(levelElement, levelView);
};

export default () => {
  game = Object.assign({}, INITIAL_GAME);

  updateGame(game);
  changeScreen(gameContainerElement);
};
