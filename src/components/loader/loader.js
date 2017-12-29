import './loader.scss';

import Component from './../component/component.js';

export default class Loader extends Component {
  render() {
    const state = this._store.getState(),
    loaderSelector = '.loader',
    loaderActiveClass = 'loader__active';
    
    switch (state.loader) {
      case 'VISIBLE':
        document.querySelector(loaderSelector).classList.add(loaderActiveClass);
        break;
      case 'HIDDEN':
        document.querySelector(loaderSelector).classList.remove(loaderActiveClass);
        break;
      default:
        document.querySelector(loaderSelector).classList.remove(loaderActiveClass);
        break;
    }
  }
}