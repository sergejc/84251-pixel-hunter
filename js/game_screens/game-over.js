import {render, changeScreen} from '../utils';
import introScreen from './intro';
import headerStatic from '../page_elements/header_static';
import {gameStats} from '../page_elements/game-stats';
import getFooter from '../page_elements/footer';
import {convertToTypes} from '../page_elements/game-stats';

const getScore = (game) => {
  const stats = convertToTypes(game.stats);

  const fastBonus = stats.filter((type) => type === `fast`).length;
  const fastBonusScore = fastBonus * 50;

  const slowBonus = stats.filter((type) => type === `slow`).length;
  const slowBonusScore = slowBonus * -50;

  const rightAnswers = stats.filter((type) => type !== `wrong`).length;
  const rightAnswersScore = rightAnswers * 100;

  const livesBonusScore = game.lives * 50;

  return {
    fastBonus: {count: fastBonus, score: fastBonusScore},
    slowBonus: {count: slowBonus, score: slowBonusScore},
    livesBonus: {count: game.lives, score: livesBonusScore},
    rightAnswers: {count: rightAnswers, score: rightAnswersScore},
    totalScore: rightAnswersScore + fastBonusScore + slowBonusScore + livesBonusScore
  };
};

const renderPoints = (game, bonus) => {
  if (game.lives < 0) {
    return `
      <td class="result__points"></td>
      <td class="result__total">Проигрыш</td>`;
  }

  return `<td class="result__points">×&nbsp;${bonus.rightAnswers.count}</td>
    <td class="result__total">${bonus.totalScore}</td>`;
};

const renderSpeedBonus = (bonus) => {
  if (!bonus.count) {
    return ``;
  }

  return `<tr>
      <td></td>
      <td class="result__extra">Бонус за скорость:</td>
      <td class="result__extra">1&nbsp;<span class="stats__result stats__result--fast"></span></td>
      <td class="result__points">×&nbsp;50</td>
      <td class="result__total">${bonus.score}</td>
    </tr>`;
};

const renderLiveBonus = (bonus) => {
  if (!bonus.count) {
    return ``;
  }

  return `<tr>
    <td></td>
    <td class="result__extra">Бонус за жизни:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--alive"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${bonus.score}</td>
  </tr>`;
};

const renderSlowFine = (bonus) => {
  if (!bonus.count) {
    return ``;
  }

  return `<tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;50</td>
    <td class="result__total">${bonus.score}</td>
  </tr>`;
};

const renderTotal = (bonus, total) => {
  if (!bonus.count) {
    return ``;
  }

  return `<tr>
    <td></td>
    <td class="result__extra">Штраф за медлительность:</td>
    <td class="result__extra">2&nbsp;<span class="stats__result stats__result--slow"></span></td>
    <td class="result__points">×&nbsp;${bonus.score}</td>
    <td class="result__total">${total}</td>
  </tr>`;
};

const renderFigures = (game, score) => {
  if (game.lives < 0) {
    return ``;
  }

  return `${renderSpeedBonus(score.fastBonus)}
    ${renderLiveBonus(score.livesBonus)}
    ${renderSlowFine(score.slowBonus)}
    ${renderTotal(score.totalScore, score.totalScore)}`;
};

export default (game) => {
  const score = getScore(game);
  debugger;

  const html = `
  ${headerStatic}
    <div class="result">
    <h1>${game.lives >= 0 ? `Победа!` : `Проигрыш!`}</h1>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${gameStats(game.stats)}
        </td>
        ${renderPoints(game, score)}
      </tr>
      ${renderFigures(game, score, score.totalScore)}
    </table>
    </div>
    ${getFooter()}`;

  const element = render(html);

  // back button hanler
  const backHandler = (evt) => {
    evt.currentTarget.removeEventListener(`click`, backHandler);
    introScreen();
  };

  element.querySelector(`.back`).addEventListener(`click`, backHandler);
  changeScreen(element);
};
