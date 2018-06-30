import {render, changeScreen} from '../utils';
import {INITIAL_GAME, levels} from '../data/game-state';
import header from '../page_elements/header';
import footer from '../page_elements/footer';

let game;

export default () => {
  game = Object.assign({}, INITIAL_GAME);

  const gameContainerElement = render();

  const headerElement = render();
  const levelElement = render();
  const footerElement = render(footer());

  // init game content
  gameContainerElement.appendChild(headerElement);
  gameContainerElement.appendChild(levelElement);
  gameContainerElement.appendChild(footerElement);

  changeScreen(gameContainerElement);

  const updateScreen = (levelHtml) => {
    headerElement.innerHTML = header(game);
    levelElement.innerHTML = levelHtml;
  };

  const onGameChange = (evt) => {
    const currentLevel = levels[`level-${game.level}`];
    const nextLevel = levels[`level-${game.level + 1}`];

    try {
      game = currentLevel.updateGame(game, currentLevel, gameContainerElement, evt);

      // game over
      if (!game.lives) {
        return;
      }

      updateScreen(nextLevel.render(game, nextLevel));
    } catch (error) {
      // ups something unexpected happend
    }
  };

  const currentLevel = levels[`level-${game.level}`];
  updateScreen(currentLevel.render(game, currentLevel));

  gameContainerElement.addEventListener(`click`, onGameChange);
  gameContainerElement.addEventListener(`change`, onGameChange);
};
