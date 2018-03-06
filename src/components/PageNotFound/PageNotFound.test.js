import React, { Component } from 'react';
import { shallow } from 'enzyme';
import PageNotFound from './PageNotFound'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      
    };
  
    wrapper = shallow(<PageNotFound {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});