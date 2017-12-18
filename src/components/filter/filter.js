import 'whatwg-fetch';
import "./filter.scss";

import "./../button/button.js";

export default class Source {
  fetchSources (pass) {
    fetch(`https://newsapi.org/v2/sources?apiKey=${pass}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === `ok`) {
        this.print(data.sources);
      }
    }).catch((error) => {
      console.log(`Source error: + ${error.message}`);
    });
  }
  
  print(sources) {
    let listItemsHtml = ``;
    const selectClass = `filter__select`,
    sourcesSelector = `.filter__sources`;
    
    sources.forEach((source) => {
      listItemsHtml += `<option value="${source.id}">${source.name}</option>`;
    });
    listItemsHtml = `<select class="${selectClass}">${listItemsHtml}</select>`;
    
    document.querySelector(sourcesSelector).innerHTML = listItemsHtml;
  }
}