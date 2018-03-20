import blogs from './blogs';
import { requestBlogs, receiveBlogs, setFilter } from './../actions/blogs';

const initialState = {
  isFetching: false,
  filter: 'None',
  items: []
};
let expectedState;

describe('blogs reducer', () => {
  let initialState;
  let expectedState;
  
  beforeEach(() => {
    initialState = {
      isFetching: false,
      filter: 'None',
      items: []
    };
  });

  it('should return state by default', () => {
    expect(blogs(undefined, {})).toEqual(initialState);
  });

  it('should set fetching flag', () => {
    expectedState = {
      isFetching: true,
      filter: 'None',
      items: []
    };
    expect(blogs(initialState, requestBlogs())).toEqual(expectedState);
  });
  
  it('should set data and fetching flag', () => {
    expectedState = {
      isFetching: false,
      filter: 'None',
      items: ['test']
    };
    expect(blogs(initialState, receiveBlogs(['test']))).toEqual(expectedState);
  });
  
  it('should set filter by author', () => {
    expectedState = {
      isFetching: false,
      filter: 'test',
      items: []
    };
    expect(blogs(initialState, setFilter('test'))).toEqual(expectedState);
  });
});