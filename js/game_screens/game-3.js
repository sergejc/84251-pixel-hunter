import {getElementFromTemplate, render} from '../utils';
import stats from './stats';
import intro from './intro';
import getHeader from '../page_elements/header';
import getFooter from '../page_elements/footer';
import getStats from '../page_elements/stats';

const getGameScreen = () => {
  const html = `
    ${getHeader()}
    <div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="http://placehold.it/304x455" alt="Option 1" width="304" height="455">
        </div>
      </form>
      ${getStats()}
    </div>
    ${getFooter()}`;

  return getElementFromTemplate(html);
};

const game3 = getGameScreen();

game3.querySelector(`.back`).addEventListener(`click`, () => {
  render(intro);
});

const answers = game3.querySelectorAll(`.game__option`);
Array.from(answers).forEach((btn) => {
  btn.addEventListener(`click`, () => {
    render(stats);
  });
});

export default game3;
