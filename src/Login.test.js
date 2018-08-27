import React from 'react';
import { shallow, mount, render } from 'enzyme';
import Login from './Login';

it('should render without errors', () => {
    expect(shallow(<Login/>).find('div.login-form').exist()).toBe(true)
})

it('renders a username input', () => {
    expect(shallow(<Login/>).find('#username').length).toEqual(1)
})

it('renders a password input', () => {
    expect(shallow(<Login/>).find('#password').length).toEqual(1)
})

it('should respond to change event and change the state of the Login Component', () => {
    const wrapper = shallow(<Login/>);
    wrapper.find('#username').simulate('change', { target: { name: 'username', value: 'aspasov'} });
    wrapper.find('#password').simulate('change', { target: { name: 'password', value: '12345'} });
})

