import './app.scss';

import {createStore, combineReducers} from './../../js/redux.js';
import {readmoreButton, loaderStatus, news, currentPage, sources, currentSource} from './../../js/reducers.js';
import './../container/container.js';
import './../copyright/copyright.js';
import Source from './../filter/filter.js';
import './../preview-text/preview-text.js';
import Button from './../button/button.js';
import Loader from './../loader/loader.js';
import News from './../news-list/news-list.js';
import {lastVisit} from './../../js/decorators.js';

const appReducer = combineReducers({
  readmoreButton,
  loaderStatus,
  news,
  currentPage,
  sources,
  currentSource
});

const rootReducer = (state, action) => {
  if (action.type === 'CLEAR_NEWS') {
    state.news = undefined
  }

  return appReducer(state, action)
}

const store = createStore(rootReducer);

let instance = null;

@lastVisit
class App {
  constructor(store) {
    if(!instance){
      instance = this;
    }
    
    this._pass = 'c6313e2417184bc09025eae3a4e8c909';
    this._store = store;
    
    const filterButtonSelector = '.button_filter',
    moreButtonSelector = '.button_news-list';
    
    const button = new Button(this._store);
    this._store.subscribe(button.render);
    button.render();
    
    const loader = new Loader(this._store);
    this._store.subscribe(loader.render);
    button.render();
    
    const source = new Source(this._store);
    this._store.subscribe(source.render);
    source.fetchSources(this._pass);
    
    this.setFetchNews(filterButtonSelector, true);
    this.setFetchNews(moreButtonSelector, false);
    
    return instance;
  }
  

  setFetchNews(selector, fromStart) {
    document.querySelector(selector).addEventListener('click', () => { 
      require.ensure([], () => {
        const newsList = require('./../news-list/news-list.js');
        const news = new newsList.default(this._store);
        this._store.subscribe(news.render);
        
        news.fetchNews(this._store.getState().currentSource, this._pass, fromStart);
      });
    });
  }
}

let app = new App(store);

export {store};