import GreetingView from '../view/greeting-view';
import {changeScreen} from '../utils';
import rulesScreen from './rules';

export default () => {
  const introView = new GreetingView();
  introView.onStart = () => rulesScreen();

  changeScreen(introView.element);
};
