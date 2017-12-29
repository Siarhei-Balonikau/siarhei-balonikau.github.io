import Cookie from './cookie.js';

function lastVisit(target, key, descriptor) {
  const visitSelector = '.last-visit',
  dateString = Cookie.getCookie('lastVisit');
  let text = '';
  
  if (dateString !== undefined) {
    const date = new Date(dateString);
    text = `${date.getDate()}.${date.getMonth() + 1}`;
  } else {
    text = `Welcome to our news aggregator!`;
  }
  
  Cookie.setCookie('lastVisit', new Date());
  document.querySelector(visitSelector).innerHTML = text;
}

export {lastVisit};