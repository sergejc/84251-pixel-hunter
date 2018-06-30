import {getNewState} from '../../utils';
import {gameStats} from '../../page_elements/game-stats';

const screen1 = (game, level) => {
  return `<div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        <div class="game__option">
          <img src="${level.data[0].src}" alt="Option 1" width="468" height="458">
          <label class="game__answer game__answer--photo">
            <input name="question1" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer game__answer--paint">
            <input name="question1" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
        <div class="game__option">
          <img src="${level.data[1].src}" alt="Option 2" width="468" height="458">
          <label class="game__answer  game__answer--photo">
            <input name="question2" type="radio" value="photo">
            <span>Фото</span>
          </label>
          <label class="game__answer  game__answer--paint">
            <input name="question2" type="radio" value="paint">
            <span>Рисунок</span>
          </label>
        </div>
      </form>
      <div class="stats">
        ${gameStats(game.stats)}
      </div>
    </div>`;
};

const isFormValid = (elements) => {
  return elements.length === 2;
};

const updateGame1 = (game, level) => {
  const elements = document.querySelectorAll(`input[type="radio"]:checked`);

  if (!isFormValid(elements)) {
    throw Error(`the input result is not valid`);
  }

  const option1 = document.querySelector(`input[name="question1"]:checked`);
  const option2 = document.querySelector(`input[name="question2"]:checked`);

  const answer1 = option1.value === level.data[0].type;
  const answer2 = option2.value === level.data[1].type;
  const answer = answer1 && answer2;

  return getNewState(answer, game);
};

export {screen1, updateGame1};
