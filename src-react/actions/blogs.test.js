import { requestBlogs, receiveBlogs, setFilter, addBlog } from './blogs';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const middlewares = [ thunk ];
const mockStore = configureMockStore(middlewares);

describe('blogs actions', () => {
  let expectedAction, store;

  beforeEach(() => {
    nock.cleanAll();
    store = mockStore({});
  });

  it('Should create an action to request blogs', () => {
    let expectedAction = {
      type: 'REQUEST_BLOGS'
    };
    
    expect(requestBlogs()).toEqual(expectedAction);
  });

  it('Should create an action to request blogs', () => {
    let expectedAction = {
      type: 'RECEIVE_BLOGS',
      data: ['test']
    };
    
    expect(receiveBlogs(['test'])).toEqual(expectedAction);
  });
  
  it('Should create an action to request blogs', () => {
    let expectedAction = {
      type: 'SET_FILTER',
      author: 'test'
    };
    
    expect(setFilter('test')).toEqual(expectedAction);
  });
  
  it('Should add blog', () => {
    nock('http://localhost:3001')
      .get(`/blog`)
      .reply(200);
      
    let expectedActions = [
      { type: 'REQUEST_BLOGS' }
    ];
    
    return store.dispatch(addBlog({
      title: "test",
      text: "test",
      author: "test"
    })).then(() => {
      expect(store.getActions()).toEqual(expectedActions)
    })
  });
});