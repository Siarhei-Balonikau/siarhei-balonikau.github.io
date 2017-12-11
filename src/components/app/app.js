import "./app.scss";

import "./../container/container.js";
import "./../copyright/copyright.js";
import Source from "./../filter/filter.js";
import "./../preview-text/preview-text.js";

class App {
  constructor() {
    this._pass = `c6313e2417184bc09025eae3a4e8c909`;
    this._sources = new Source();
    this._news = undefined;
    
    const filterButtonSelector = `.button_filter`,
    moreButtonSelector = `.button_news-list`,
    filterSelectSelector = `.filter__select`;
    
    // Fetch news resources.
    this._sources.fetchSources(this._pass);
    
    // Fetch by click to filter button.
    document.querySelector(filterButtonSelector).addEventListener("click", () => { 
      require.ensure([], () => {
          const newsList = require('./../news-list/news-list.js');
          this._news = new newsList.News();
          
          const currentSource = document.querySelector(filterSelectSelector).value;
          this._news.fetchNews(currentSource, this._pass, true);
      });
    });
    
    // Fetch more by click to more button.
    document.querySelector(moreButtonSelector).addEventListener("click", () => { 
      require.ensure([], () => {
          const newsList = require('./../news-list/news-list.js');
          this._news = new newsList.News();
          
          const currentSource = document.querySelector(filterSelectSelector).value;
          this._news.fetchNews(currentSource, this._pass);
      });
    });
  }
}

let app = new App();