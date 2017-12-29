import 'whatwg-fetch';
import './news-list.scss';

import './../single-news/single-news.js';
import './../button/button.js';
import './../loader/loader.js';
import Component from './../component/component.js';

export default class News extends Component {
  fetchNews (source, pass, fromStart) {
    // If loading from new source, then set page to 1.
    if (fromStart) {
      this._store.dispatch({type: 'FIRST_PAGE'});
    }
     
    // Turn on loader.
    this._store.dispatch({type: 'SET_VISIBILITY_LOADER', state: 'VISIBLE'});
    
    fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${pass}&page=${this._store.getState().currentPage}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'ok') {
        this._store.dispatch({type: 'NEXT_PAGE'});
        if (fromStart) {
          this._store.dispatch({type: 'CLEAR_NEWS'});
        }
        this._store.dispatch({type: 'ADD_NEWS', news: data.articles});
        this._store.dispatch({type: 'SET_VISIBILITY_BUTTON', state: 'VISIBLE'});
        this._store.dispatch({type: 'SET_VISIBILITY_LOADER', state: 'HIDDEN'});
      }
    }).catch((error) => {
      console.log(`News error: + ${error.message}`);
    });
  }
  
  render(fromStart) {
    let listItemsHtml = '';
    const news = this._store.getState().news;
    const newsListSelector = '.news-list__content';
    
    news.forEach((singleNews) => {
      let date = this.splitDate(singleNews.publishedAt);
      
      listItemsHtml += this.buildSingleNews(singleNews, date);
    });
    
    document.querySelector(newsListSelector).innerHTML = listItemsHtml;
  }
  
  splitDate(rawDate) {
    let year, 
    month, 
    day, 
    date,
    time;
    
    [date, time] = rawDate.split('T');
    [year, month, day] = date.split('-');
    time = time.slice('0', '-1');
    
    return {
      year: year,
      month: month,
      day: day,
      date: date,
      time: time
    };
  }
  
  buildSingleNews(singleNews, date) {
    const singleNewsClass = 'single-news',
    titleClass = 'single-news__title',
    dateClass = 'single-news__date',
    descriptionClass = 'single-news__description',
    sourceClass = 'single-news__source',
    authorClass = 'single-news__author';
    
    return `<a href="${singleNews.url}" class="${singleNewsClass}">
      <div class="${titleClass}">${singleNews.title}</div>
      <div class="${dateClass}">${date.year}.${date.month}.${date.day} ${date.time}</div>
      <div class="${descriptionClass}">${singleNews.description}</div>
      <div class="${sourceClass}">source: <span class="${authorClass}">${singleNews.source.name}</span></div>
    </a>`;
  }
}