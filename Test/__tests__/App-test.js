/**
 * @format
 */

import 'react-native';
import React from 'react';
import App from '../App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

configure({adapter: new Adapter()});

describe('App Component', () => {

  it('App renders correctly', () => {
    const tree = renderer.create(
      <App />
      ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('App initial state ', () => {
    const wrapper = shallow(<App />);

    const componentInstance = wrapper.instance();

    expect(wrapper.state('isLogined')).toEqual(false);
    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
 
  });

  it('App valid login', () => {
    const wrapper = shallow(<App />);
    const componentInstance = wrapper.instance();
    componentInstance.setState({username: 'lavinia', password: '123456'})

    componentInstance.login();

    expect(wrapper.state('username')).toEqual('lavinia');
    expect(wrapper.state('password')).toEqual('123456');
    expect(wrapper.state('isLogined')).toEqual(true);
    
  });

  it('App invalid login - wrong password', () => {
    const wrapper = shallow(<App />);
    const componentInstance = wrapper.instance();
    componentInstance.setState({username: 'lavinia', password: '12345'})

    componentInstance.login();

    expect(wrapper.state('username')).toEqual('lavinia');
    expect(wrapper.state('password')).toEqual('12345');
    expect(wrapper.state('isLogined')).toEqual(false);
    
  });

  it('App invalid login - wrong username', () => {
    const wrapper = shallow(<App />);
    const componentInstance = wrapper.instance();
    componentInstance.setState({username: 'lstan', password: '123456'})

    componentInstance.login();

    expect(wrapper.state('username')).toEqual('lstan');
    expect(wrapper.state('password')).toEqual('123456');
    expect(wrapper.state('isLogined')).toEqual(false);
    
  });

  it('App invalid login - null input', () => {
    const wrapper = shallow(<App />);
    const componentInstance = wrapper.instance();

    componentInstance.login();

    expect(wrapper.state('username')).toEqual('');
    expect(wrapper.state('password')).toEqual('');
    expect(wrapper.state('isLogined')).toEqual(false);
    
  });
});



