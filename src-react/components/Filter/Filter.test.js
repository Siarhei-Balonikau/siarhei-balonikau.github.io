import React, { Component } from 'react';
import { shallow } from 'enzyme';
import Filter from './Filter'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      options: [
        'test',
        'test1'
      ]
    };
  
    wrapper = shallow(<Filter {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});