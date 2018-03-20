import React, { Component } from 'react';
import { shallow } from 'enzyme';
import BlogForm from './BlogForm'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      form: {
        title: 'test',
        text: 'test',
        author: 'test'
      }
    };
  
    wrapper = shallow(<BlogForm {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});