import {getNewState} from '../../utils';
import {gameStats} from '../../page_elements/game-stats';

class LevelView {
  constructor(game, level) {
    this.level = level;
    this.game = game;
  }

  render() {
    return `<div class="game">
      <p class="game__task">Найдите рисунок среди изображений</p>
      <form class="game__content  game__content--triple">
        <div class="game__option">
          <img src="${this.level.data[0].src}" alt="Option 1" width="304" height="455">
        </div>
        <div class="game__option  game__option--selected">
          <img src="${this.level.data[1].src}" alt="Option 2" width="304" height="455">
        </div>
        <div class="game__option">
          <img src="${this.level.data[2].src}" alt="Option 3" width="304" height="455">
        </div>
      </form>
      <div class="stats">
        ${gameStats(this.game.stats)}
      </div>
    </div>`;
  }

  onAnswer(answer) {
    // must be overloaded
  }

  bind() {
    const answerElements = this._element.querySelectorAll(`img[alt^="Option"]`);
    const answersElements = Array.from(answerElements);

    answersElements.forEach((element) => {
      element.addEventListener(`click`, (evt) => {
        this.onAnswer(evt.target.alt);
      });
    });
  }

  get element() {
    if (this._element) {
      return this._element;
    }

    this._element = document.createElement(`div`);
    this._element.innerHTML = this.render();
    this.bind();
    return this._element;
  }
}

const updateGame3 = (game, level, evt) => {
  const attribute = evt.target.querySelector(`img`).getAttribute(`alt`);

  if (!attribute) {
    throw Error(`the result is not valid`);
  }

  const num = attribute.replace(/[^0-9]/g, ``);
  const answer = level.data[num - 1].type === `paint`;
  return getNewState(answer, game);
};

const screen3 = (game, level) => {
  const levelView = new LevelView(game, level);
  return levelView.render();
};

export {screen3, updateGame3};
