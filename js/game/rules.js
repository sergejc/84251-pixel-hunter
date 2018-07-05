import {changeScreen} from '../utils';
import RulesView from '../view/rules-view';
import greetingScreen from '../game/greeting';
import startGame from '../game_screens/game';

export default () => {
  const rulesView = new RulesView();
  rulesView.onStart = () => startGame();
  rulesView.onStartOver = () => greetingScreen();

  changeScreen(rulesView.element);
};
