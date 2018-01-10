import 'whatwg-fetch';
import './filter.scss';

import './../button/button.js';

export default class Source {
  constructor(store) {
    this._store = store;
    this.fetchSources = this.fetchSources.bind(this);
    this.render = this.render.bind(this);
    
    const selectSelector = '.filter__select';
    
    this.onChange(selectSelector);
  }
  
  fetchSources (pass) {
    fetch(`https://newsapi.org/v2/sources?apiKey=${pass}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === 'ok') {
        this._store.dispatch({type: 'ADD_SOURCES', sources: data.sources});
      }
    }).catch((error) => {
      console.log(`Source error: + ${error.message}`);
    });
  }
  
  render() {
    let listItemsHtml = '';
    const sources = this._store.getState().sources,
    sourcesSelector = '.filter__select';
    
    sources.forEach((source) => {
      listItemsHtml += `<option ${source.id===this._store.getState().currentSource ? 'selected' : false} value="${source.id}">${source.name}</option>`;
    });
    
    document.querySelector(sourcesSelector).innerHTML = listItemsHtml;
  }
  
  onChange(selector) {
    document.querySelector(selector).addEventListener('change', (e) => { 
      this._store.dispatch({type: 'SET_CURRENT_SOURCE', source: e.currentTarget.value});
    });
  }
}