import {changeScreen, render} from '../utils';
import getFooter from '../page_elements/footer';
import greetingScreen from './greeting';

export default () => {
  const html = `
    <div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </div>
    ${getFooter()}`;

  const element = render(html);

  // next screen handler
  const clickHandler = (evt) => {
    evt.currentTarget.removeEventListener(`click`, clickHandler);
    greetingScreen();
  };

  element.querySelector(`.intro__asterisk`).addEventListener(`click`, clickHandler);

  changeScreen(element);
};
