import {getNewState} from '../../utils';
import {gameStats} from '../../page_elements/game-stats';

const screen2 = (game, level) => {
  return `<div class="game">
  <p class="game__task">Угадай, фото или рисунок?</p>
  <form class="game__content  game__content--wide">
    <div class="game__option">
      <img src="${level.data[0].src}" alt="Option 1" width="705" height="455">
      <label class="game__answer  game__answer--photo">
        <input name="question1" type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer  game__answer--wide  game__answer--paint">
        <input name="question1" type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>
  </form>
  <div class="stats">
    ${gameStats(game.stats)}
  </div>
  </div>`;
};

const updateGame2 = (game, level) => {
  const element = document.querySelector(`[name="question1"]:checked`);

  if (!element) {
    throw Error(`the input result is not valid`);
  }

  const answer = element.value === level.data[0].type;
  return getNewState(answer, game);
};

export {screen2, updateGame2};
