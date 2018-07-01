import {render, changeScreen} from '../utils';
import {INITIAL_GAME, levels} from '../data/game-state';
import header from '../page_elements/header';
import footer from '../page_elements/footer';
import introScreen from './intro';
import statsScreen from './game-over';

// container element
const gameContainerElement = render();

const headerElement = render();
const levelElement = render();
const footerElement = render(footer());

// init game content
gameContainerElement.appendChild(headerElement);
gameContainerElement.appendChild(levelElement);
gameContainerElement.appendChild(footerElement);

const updateGame = (levelHtml) => {
  headerElement.innerHTML = header(game);
  levelElement.innerHTML = levelHtml;
};

// start over
const backHandler = (evt) => {
  const element = evt.target;
  if (element.alt === `Back`) {
    evt.currentTarget.removeEventListener(`click`, backHandler);
    introScreen();
  }
};

const getLevel = (levelNum) => levels[`level-${levelNum}`];

const onGameChange = (evt) => {
  try {
    const currentLevel = getLevel(game.level);
    const nextLevel = getLevel(game.level + 1);

    game = currentLevel.getState(game, currentLevel, evt);

    // game over
    if (game.lives < 0 || !nextLevel) {
      gameOver();
      return;
    }

    updateGame(nextLevel.render(game, nextLevel));
  } catch (error) {
    // ups something unexpected happen
  }
};

const gameOver = () => {
  gameContainerElement.removeEventListener(`click`, onGameChange);
  gameContainerElement.removeEventListener(`change`, onGameChange);
  statsScreen(game);
};

gameContainerElement.addEventListener(`click`, onGameChange);
gameContainerElement.addEventListener(`click`, backHandler);
gameContainerElement.addEventListener(`change`, onGameChange);

let game;


export default () => {
  game = Object.assign({}, INITIAL_GAME);

  const currentLevel = getLevel(game.level);
  updateGame(currentLevel.render(game, currentLevel));
  changeScreen(gameContainerElement);
};
