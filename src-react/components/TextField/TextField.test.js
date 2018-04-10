import React, { Component } from 'react';
import { shallow } from 'enzyme';
import TextField from './TextField'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {

    };
  
    wrapper = shallow(<TextField {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});