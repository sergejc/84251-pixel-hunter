import {getNewState} from '../../utils';

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
  </div>`;
};

const updateGame2 = (game, level) => {
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

export {screen2, updateGame2};
