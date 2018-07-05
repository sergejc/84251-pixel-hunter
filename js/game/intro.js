import {changeScreen} from '../utils';
import IntroView from '../view/intro-view';
import greetingScreen from '../game/greeting';

export default () => {
  const introView = new IntroView();
  introView.onStart = () => greetingScreen();

  changeScreen(introView.element);
};
