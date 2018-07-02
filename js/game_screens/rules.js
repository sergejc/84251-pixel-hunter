import {render, changeScreen} from '../utils';
import startGame from './game';
import introScreen from './intro';
import headerStatic from '../page_elements/header_static';
import footer from '../page_elements/footer';

export default () => {
  const html = `
    ${headerStatic}
    <div class="rules">
      <h1 class="rules__title">Правила</h1>
      <p class="rules__description">Угадай 10 раз для каждого изображения фото <img
        src="img/photo_icon.png" width="16" height="16"> или рисунок <img
        src="img/paint_icon.png" width="16" height="16" alt="">.<br>
        Фотографиями или рисунками могут быть оба изображения.<br>
        На каждую попытку отводится 30 секунд.<br>
        Ошибиться можно не более 3 раз.<br>
        <br>
        Готовы?
      </p>
      <form class="rules__form">
        <input class="rules__input" type="text" placeholder="Ваше Имя">
        <button class="rules__button  continue" type="submit" disabled>Go!</button>
      </form>
    </div>
    ${footer}`;

  const element = render(html);

  // back button hanler
  const backHandler = (evt) => {
    evt.currentTarget.removeEventListener(`click`, backHandler);
    introScreen();
  };
  element.querySelector(`.back`).addEventListener(`click`, backHandler);

  // next screen handler
  const submitHander = (evt) => {
    evt.preventDefault();
    evt.currentTarget.removeEventListener(`click`, submitHander);
    startGame();
  };
  element.querySelector(`.rules__form`).addEventListener(`submit`, submitHander);

  // input name handler
  const submit = element.querySelector(`.rules__button`);
  const keyUpHandler = (evt) => {
    evt.currentTarget.removeEventListener(`click`, keyUpHandler);

    if (evt.target.value) {
      submit.removeAttribute(`disabled`);
    } else {
      submit.setAttribute(`disabled`, true);
    }
  };
  element.querySelector(`.rules__input`).addEventListener(`keyup`, keyUpHandler);

  changeScreen(element);
};
