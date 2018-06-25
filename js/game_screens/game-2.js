import {render, changeScreen} from '../utils';
import getHeader from '../page_elements/header';
import getFooter from '../page_elements/footer';
import game3 from './game-3';
import intro from './intro';
import getStats from '../page_elements/stats';

const getGameScreen = () => {
  const html = `
    ${getHeader()}
    <div class="game">
      <p class="game__task">Угадай, фото или рисунок?</p>
      <form class="game__content  game__content--wide">
        <div class="game__option">
          <img src="http://placehold.it/705x455" alt="Option 1" width="705" height="455">
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
      ${getStats()}
    </div>
    ${getFooter()}`;

  return render(html);
};

const game2 = getGameScreen();

game2.querySelector(`.back`).addEventListener(`click`, () => {
  changeScreen(intro);
});

const answers = game2.querySelectorAll(`.game__answer`);
Array.from(answers).forEach((btn) => {
  btn.addEventListener(`change`, () => {
    changeScreen(game3);
  });
});

export default game2;
