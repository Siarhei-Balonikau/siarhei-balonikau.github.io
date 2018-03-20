import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Textarea from './Textarea'; 
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
  
    wrapper = shallow(<Textarea {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});