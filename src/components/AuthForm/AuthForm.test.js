import React, { Component } from 'react';
import { shallow } from 'enzyme';
import AuthForm from './AuthForm'; 
import toJson from 'enzyme-to-json'

describe('subscribe component', () => {
  let wrapper, props;

  beforeEach(() => {
    props = {
      form: {
        login: 'test'
      }
    };
  
    wrapper = shallow(<AuthForm {...props} />);
  });
  
  it('should render component', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});