import {getNewState} from '../../utils';

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
  </div>
</div>`;
};

const updateGame3 = (game, level) => {
  const element = document.querySelector(`[name="question1"]:checked`);

  if (!element) {
    return {isNext: false, game};
  }
  const answer = element.value === level.data[0].type;
  if (answer) {
    game.stats.push(`normal`);
  } else {
    game.stats.push(`wrong`);
  }

  const result = {
    lives: answer ? game.level : game.lives - 1,
  };

  return {
    isNext: true,
    game: Object.assign({}, game, result)
  };
};

export {screen3, updateGame3};
