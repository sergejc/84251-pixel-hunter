import {gameStats} from '../../page_elements/game-stats';
import AbstractView from '../../view/abstract-view';
import {Result} from '../../data/game-state';

export default class LevelView1 extends AbstractView {
  constructor(game, level) {
    super();
    this.level = level;
    this.game = game;
  }

  get template() {
    return `<div class="game">
        <p class="game__task">Угадайте для каждого изображения фото или рисунок?</p>
        <form class="game__content">
          <div class="game__option">
            <img src="${this.level.data[0].src}" alt="Option 1" width="468" height="458">
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
            <img src="${this.level.data[1].src}" alt="Option 2" width="468" height="458">
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
          ${gameStats(this.game.stats)}
        </div>
      </div>`;
  }

  bind() {
    const element = this._element;
    element.querySelector(`.game__content`).addEventListener(`change`, () => {
      const options = element.querySelectorAll(`input:checked`);
      if (options.length !== 2) {
        this.onAnswer({result: Result.NOOP});
        return;
      }
      const option1 = document.querySelector(`input[name="question1"]:checked`);
      const option2 = document.querySelector(`input[name="question2"]:checked`);

      const answer1 = option1.value === this.level.data[0].type;
      const answer2 = option2.value === this.level.data[1].type;
      const answer = answer1 && answer2;

      if (!answer) {
        this.onAnswer({result: Result.DIE, answer: {time: 15, answer: false}});
      }

      this.onAnswer({result: Result.NEXT, answer: {time: 15, answer: true}});
    });
  }
}
