import {render, changeScreen} from '../utils';
import getHeader from '../page_elements/header';
import getFooter from '../page_elements/footer';
import game2 from './game-2';
import intro from './intro';
import getStats from '../page_elements/stats';

const getGameScreen = () => {
  const html = `
    ${getHeader()}
    <div class="game">
      <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
      <form class="game__content">
        <div class="game__option">
          <img src="http://placehold.it/468x458" alt="Option 1" width="468" height="458">
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
          <img src="http://placehold.it/468x458" alt="Option 2" width="468" height="458">
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
      ${getStats()}
    </div>
    ${getFooter()}`;

  return render(html);
};

const game1 = getGameScreen();
const buttons = game1.querySelectorAll(`input[type="radio"]`);

game1.querySelector(`.back`).addEventListener(`click`, () => {
  changeScreen(intro);
});

const isFormValid = () => {
  const selected = Array.from(buttons).reduce((curry, element) => {
    return element.checked ? curry + 1 : curry;
  }, 0);

  return selected === 2;
};

Array.from(buttons).forEach((btn) => {
  btn.addEventListener(`change`, () => {
    if (isFormValid()) {
      changeScreen(game2);
    }
  });
});

export default game1;
