const readmoreButton = (state = 'HIDDEN', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_BUTTON':
      return action.state;
    default:
      return state;
  }
};

const loaderStatus = (state = 'HIDDEN', action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_LOADER':
      return action.state;
    default:
      return state;
  }
};

const news = (state = [], action) => {
  switch (action.type) {
    case 'ADD_NEWS':
      return state.concat(action.news);
    default:
      return state;
  }
};

const currentPage = (state = 1, action) => {
  switch (action.type) {
    case 'NEXT_PAGE':
      return state + 1;
    case 'FIRST_PAGE':
      return 1;
    default:
      return state;
  }
};

const sources = (state = [], action) => {
  switch (action.type) {
    case 'ADD_SOURCES':
      return state.concat(action.sources);
    default:
      return state;
  }
};

const currentSource = (state = 'abc-news', action) => {
  switch (action.type) {
    case 'SET_CURRENT_SOURCE':
      return action.source;
    default:
      return state;
  }
};

export {readmoreButton, loaderStatus, news, currentPage, sources, currentSource};