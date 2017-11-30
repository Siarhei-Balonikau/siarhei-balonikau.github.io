class App {
  constructor() {
    this._pass = `c6313e2417184bc09025eae3a4e8c909`;
    this._news = new News();
    this._sources = new Source();
    
    const filterButtonSelector = `.filter__button`,
    moreButtonSelector = `.news-list__more-button`,
    filterSelectSelector = `.filter__select`;
    
    // Fetch news resources.
    this._sources.fetchSources(this._pass);
    
    // Fetch by click to filter button.
    document.querySelector(filterButtonSelector).addEventListener("click", () => { 
      const currentSource = document.querySelector(filterSelectSelector).value;
      this._news.fetchNews(currentSource, this._pass, true);
    });
    
    // Fetch more by click to more button.
    document.querySelector(moreButtonSelector).addEventListener("click", () => { 
      const currentSource = document.querySelector(filterSelectSelector).value;
      this._news.fetchNews(currentSource, this._pass);
    });
  }
}

class Source {
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

class News {
  constructor() {
    this._page = 1;
  }
  
  fetchNews (source, pass, fromStart) {
    const loaderSelector = `.loader`,
    loaderActiveClass = `loader__active`;
     
    // If loading from new source, then set page to 1.
    if (fromStart) {
      this._page = 1;
    }
     
    // Turn on loader.
    document.querySelector(loaderSelector).classList.add(loaderActiveClass);
    
    fetch(`https://newsapi.org/v2/everything?sources=${source}&apiKey=${pass}&page=${this._page}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.status === `ok`) {
        this._page += 1;
        this.print(data.articles, fromStart);
        
        // Turn off loader.
        document.querySelector(loaderSelector).classList.remove(loaderActiveClass);
      }
    }).catch((error) => {
      console.log(`News error: + ${error.message}`);
    });
  }
  
  print(news, fromStart) {
    let listItemsHtml = ``;
    const newsListSelector = `.news-list__content`,
    moreButtonSelector = `.news-list__more-button`,
    moreButtonActiveClass = `news-list__more-button_active`;
    
    // If was click more button, then add new news to previous.
    if (fromStart !== true) {
      listItemsHtml = document.querySelector(newsListSelector).innerHTML;
    } 
    
    news.forEach((singleNews) => {
      let date = this.splitDate(singleNews.publishedAt);
      
      listItemsHtml += this.buildSingleNews(singleNews, date);
    });
    
    // Turn on 'more button'.
    document.querySelector(moreButtonSelector).classList.add(moreButtonActiveClass);
    document.querySelector(newsListSelector).innerHTML = listItemsHtml;
  }
  
  splitDate(rawDate) {
    let year, 
    month, 
    day, 
    date,
    time;
    
    [date, time] = rawDate.split(`T`);
    [year, month, day] = date.split(`-`);
    time = time.slice(`0`, `-1`);
    
    return {
      year: year,
      month: month,
      day: day,
      date: date,
      time: time
    };
  }
  
  buildSingleNews(singleNews, date) {
    const singleNewsClass = `single-news`,
    titleClass = `single-news__title`,
    dateClass = `single-news__date`,
    descriptionClass = `single-news__description`,
    sourceClass = `single-news__source`,
    authorClass = `single-news__author`;
    
    return `<a href="${singleNews.url}" class="${singleNewsClass}">
      <div class="${titleClass}">${singleNews.title}</div>
      <div class="${dateClass}">${date.year}.${date.month}.${date.day} ${date.time}</div>
      <div class="${descriptionClass}">${singleNews.description}</div>
      <div class="${sourceClass}">source: <span class="${authorClass}">${singleNews.source.name}</span></div>
    </a>`;
  }
}

let app = new App();