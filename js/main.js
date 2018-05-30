'use strict';

const renderScreen = (parent, template) => {
  while (parent.firstChild) {
    parent.firstChild.remove();
  }

  const content = template.content.cloneNode(true);
  parent.appendChild(content);
};

const findScreen = (templateList, id) => {
  return templateList.find((el) => el.getAttribute(`id`) === id);
};

const getNextSlideNum = (current, next, maxSlideNum) => {
  const nextSlide = current + next;
  if (nextSlide >= 0 && nextSlide <= maxSlideNum) {
    return nextSlide;
  }
  return current;
};

const addControls = () => {
  const html = `
    <div class="arrows__wrap">
    <style>
      .arrows__wrap {
        position: absolute;
        top: 95px;
        left: 50%;
        margin-left: -56px;
      }
      .arrows__btn {
        background: none;
        border: 2px solid black;
        padding: 5px 20px;
      }
    </style>
    <button class="arrows__btn"><-</button>
    <button class="arrows__btn">-></button>
  </div>
  `;

  return new DOMParser().parseFromString(html, `text/html`).querySelector(`.arrows__wrap`);
};

const runGame = () => {
  const parent = document.querySelector(`.central`);
  const templates = document.querySelectorAll(`template`);
  const order = [`greeting`, `rules`, `game-1`, `game-2`, `game-3`, `stats`];
  const RIGHT_ARROW = 39;
  const LEFT_ARROW = 37;
  let currentScreen = 0;

  document.body.appendChild(addControls());
  const controlArrows = document.querySelectorAll(`.arrows__btn`);

  controlArrows[0].addEventListener(`click`, () => {
    currentScreen = getNextSlideNum(currentScreen, -1, order.length - 1);
    renderScreen(parent, findScreen([...templates], order[currentScreen]));
  });

  controlArrows[1].addEventListener(`click`, () => {
    currentScreen = getNextSlideNum(currentScreen, 1, order.length - 1);
    renderScreen(parent, findScreen([...templates], order[currentScreen]));
  });

  document.addEventListener(`keydown`, (evt) => {
    switch (evt.keyCode) {
      case RIGHT_ARROW:
        currentScreen = getNextSlideNum(currentScreen, 1, order.length - 1);
        break;
      case LEFT_ARROW:
        currentScreen = getNextSlideNum(currentScreen, -1, order.length - 1);
        break;
    }

    renderScreen(parent, findScreen([...templates], order[currentScreen]));
  });

  renderScreen(parent, findScreen([...templates], order[currentScreen]));
};

document.addEventListener(`DOMContentLoaded`, () => {
  runGame();
});
