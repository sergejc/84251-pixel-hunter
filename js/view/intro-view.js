import footer from '../page_elements/footer';

import AbstractView from '../view/abstract-view';

export default class IntroView extends AbstractView {
  constructor() {
    super();
  }

  onStart() {
    // on start button handler
  }

  bind() {
    this._element.querySelector(`.intro__asterisk`).addEventListener(`click`, this.onStart);
  }

  get template() {
    return `<div id="main" class="central__content">
    <div id="intro" class="intro">
      <h1 class="intro__asterisk">*</h1>
      <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
    </div>
    </div>
    ${footer}`;
  }
}
