"use strict";

var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  var _this = this;

  _classCallCheck(this, App);

  this._pass = "c6313e2417184bc09025eae3a4e8c909";
  this._news = new News();
  this._sources = new Source();

  var filterButtonSelector = ".filter__button",
      moreButtonSelector = ".news-list__more-button",
      filterSelectSelector = ".filter__select";

  // Fetch news resources.
  this._sources.fetchSources(this._pass);

  // Fetch by click to filter button.
  document.querySelector(filterButtonSelector).addEventListener("click", function () {
    var currentSource = document.querySelector(filterSelectSelector).value;
    _this._news.fetchNews(currentSource, _this._pass, true);
  });

  // Fetch more by click to more button.
  document.querySelector(moreButtonSelector).addEventListener("click", function () {
    var currentSource = document.querySelector(filterSelectSelector).value;
    _this._news.fetchNews(currentSource, _this._pass);
  });
};

var Source = function () {
  function Source() {
    _classCallCheck(this, Source);
  }

  _createClass(Source, [{
    key: "fetchSources",
    value: function fetchSources(pass) {
      var _this2 = this;

      fetch("https://newsapi.org/v2/sources?apiKey=" + pass).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status === "ok") {
          _this2.print(data.sources);
        }
      }).catch(function (error) {
        console.log("Source error: + " + error.message);
      });
    }
  }, {
    key: "print",
    value: function print(sources) {
      var listItemsHtml = "";
      var selectClass = "filter__select",
          sourcesSelector = ".filter__sources";

      sources.forEach(function (source) {
        listItemsHtml += "<option value=\"" + source.id + "\">" + source.name + "</option>";
      });
      listItemsHtml = "<select class=\"" + selectClass + "\">" + listItemsHtml + "</select>";

      document.querySelector(sourcesSelector).innerHTML = listItemsHtml;
    }
  }]);

  return Source;
}();

var News = function () {
  function News() {
    _classCallCheck(this, News);

    this._page = 1;
  }

  _createClass(News, [{
    key: "fetchNews",
    value: function fetchNews(source, pass, fromStart) {
      var _this3 = this;

      var loaderSelector = ".loader",
          loaderActiveClass = "loader__active";

      // If loading from new source, then set page to 1.
      if (fromStart) {
        this._page = 1;
      }

      // Turn on loader.
      document.querySelector(loaderSelector).classList.add(loaderActiveClass);

      fetch("https://newsapi.org/v2/everything?sources=" + source + "&apiKey=" + pass + "&page=" + this._page).then(function (response) {
        return response.json();
      }).then(function (data) {
        if (data.status === "ok") {
          _this3._page += 1;
          _this3.print(data.articles, fromStart);

          // Turn off loader.
          document.querySelector(loaderSelector).classList.remove(loaderActiveClass);
        }
      }).catch(function (error) {
        console.log("News error: + " + error.message);
      });
    }
  }, {
    key: "print",
    value: function print(news, fromStart) {
      var _this4 = this;

      var listItemsHtml = "";
      var newsListSelector = ".news-list__content",
          moreButtonSelector = ".news-list__more-button",
          moreButtonActiveClass = "news-list__more-button_active";

      // If was click more button, then add new news to previous.
      if (fromStart !== true) {
        listItemsHtml = document.querySelector(newsListSelector).innerHTML;
      }

      news.forEach(function (singleNews) {
        var date = _this4.splitDate(singleNews.publishedAt);

        listItemsHtml += _this4.buildSingleNews(singleNews, date);
      });

      // Turn on 'more button'.
      document.querySelector(moreButtonSelector).classList.add(moreButtonActiveClass);
      document.querySelector(newsListSelector).innerHTML = listItemsHtml;
    }
  }, {
    key: "splitDate",
    value: function splitDate(rawDate) {
      var year = void 0,
          month = void 0,
          day = void 0,
          date = void 0,
          time = void 0;

      var _rawDate$split = rawDate.split("T");

      var _rawDate$split2 = _slicedToArray(_rawDate$split, 2);

      date = _rawDate$split2[0];
      time = _rawDate$split2[1];

      var _date$split = date.split("-");

      var _date$split2 = _slicedToArray(_date$split, 3);

      year = _date$split2[0];
      month = _date$split2[1];
      day = _date$split2[2];

      time = time.slice("0", "-1");

      return {
        year: year,
        month: month,
        day: day,
        date: date,
        time: time
      };
    }
  }, {
    key: "buildSingleNews",
    value: function buildSingleNews(singleNews, date) {
      var singleNewsClass = "single-news",
          titleClass = "single-news__title",
          dateClass = "single-news__date",
          descriptionClass = "single-news__description",
          sourceClass = "single-news__source",
          authorClass = "single-news__author";

      return "<a href=\"" + singleNews.url + "\" class=\"" + singleNewsClass + "\">\n      <div class=\"" + titleClass + "\">" + singleNews.title + "</div>\n      <div class=\"" + dateClass + "\">" + date.year + "." + date.month + "." + date.day + " " + date.time + "</div>\n      <div class=\"" + descriptionClass + "\">" + singleNews.description + "</div>\n      <div class=\"" + sourceClass + "\">source: <span class=\"" + authorClass + "\">" + singleNews.source.name + "</span></div>\n    </a>";
    }
  }]);

  return News;
}();

var app = new App();
