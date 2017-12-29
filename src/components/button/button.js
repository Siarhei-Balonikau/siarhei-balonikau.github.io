import './button.scss';
import Component from './../component/component.js';

export default class Button extends Component {
  render() {
    const state = this._store.getState(),
    moreButtonSelector = '.button_news-list',
    moreButtonHiddenClass = 'button_hidden';
  
    switch (state.readmoreButton) {
      case 'VISIBLE':
        document.querySelector(moreButtonSelector).classList.remove(moreButtonHiddenClass);
        break;
      case 'HIDDEN':
        document.querySelector(moreButtonSelector).classList.add(moreButtonHiddenClass);
        break;
      default:
        document.querySelector(moreButtonSelector).classList.add(moreButtonHiddenClass);
        break;
    }
  }
}