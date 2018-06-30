import {getNewState} from '../../utils';
import gameStats from '../../page_elements/game-stats';

const screen3 = (game, level) => {
  return `<div class="game">
  <p class="game__task">Найдите рисунок среди изображений</p>
  <form class="game__content  game__content--triple">
    <div class="game__option">
      <img src="${level.data[0].src}" alt="Option 1" width="304" height="455">
    </div>
    <div class="game__option  game__option--selected">
      <img src="${level.data[1].src}" alt="Option 2" width="304" height="455">
    </div>
    <div class="game__option">
      <img src="${level.data[2].src}" alt="Option 3" width="304" height="455">
    </div>
  </form>
  <div class="stats">
    ${gameStats(game.stats)}
  </div>
</div>`;
};

const updateGame3 = (game, level, evt) => {
  const attribute = evt.target.querySelector(`img`).getAttribute(`alt`);

  if (!attribute) {
    throw Error(`the result is not valid`);
  }

  const num = attribute.replace(/[^0-9]/g, ``);
  const answer = level.data[num - 1].type === `paint`;
  return getNewState(answer, game);
};

export {screen3, updateGame3};
