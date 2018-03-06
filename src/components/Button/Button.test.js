import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Button from './Button'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      
    };
  
    wrapper = shallow(<Button {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});