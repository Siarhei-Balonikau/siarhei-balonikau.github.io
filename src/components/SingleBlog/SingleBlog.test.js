import React, { Component } from 'react';
import { shallow } from 'enzyme';
import SingleBlog from './SingleBlog'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      blog: {
        title: 'test',
        text: 'test',
        author: 'test'
      }
    };
  
    wrapper = shallow(<SingleBlog {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});