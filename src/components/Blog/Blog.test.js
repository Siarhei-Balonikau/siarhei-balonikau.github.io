import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Blog from './Blog'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      blog: {
        _id: '1', 
        title: 'test', 
        date: 'test', 
        text: 'test', 
        author: 'test'
      }
    };
  
    wrapper = shallow(<Blog {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});