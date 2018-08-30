import React from 'react';
import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import Login from './Login';
import Overview from './Overview';
import { trueLogin } from './mock-data/constants';

function History() {
    this.history = [];
    this.push = function(a) {
        this.history.push(a);
    }
}

describe('Login Component', () => {
    it('should render without errors', () => {
        expect(shallow(<Login/>).find('div.login-form').exists()).toBe(true);
    })
    it('renders a username input', () => {
        expect(shallow(<Login/>).find('#username').length).toEqual(1);
    })
    
    it('renders a password input', () => {
        expect(shallow(<Login/>).find('#password').length).toEqual(1);
    })
})

describe('Component state change', () => {
    it("should be affected when username is invalid", () => {
        const wrapper = mount(<Login />);
        wrapper.find('input#username').simulate('change', { target: { id: 'username', value: 'aspasov' }});
        wrapper.find('form#submit-btn').simulate('submit');
        expect(wrapper.state('usernameError')).toBe(true);
        expect(wrapper.state('username')).toBe('aspasov');
        expect(wrapper.state('errorMessages')).toContain('Email must be properly formatted');
    })

    it('should be affected when password is invalid', () => {
        const wrapper = mount(<Login/>);
        wrapper.find('form#submit-btn').simulate('submit');
        expect(wrapper.state('passwordError')).toBe(true);
        expect(wrapper.state('password')).toBe('');
        expect(wrapper.state('errorMessages')).toContain('Password must not be empty');
    })
})

describe('User authentication', () => {
    it("should accept correct user's credentials", () => {
        const overview = shallow(<Overview/>);
        const wrapper = mount(<Login history={new History()}/>);
        wrapper.find('input#username').simulate('change', { target: { id: 'username', value: trueLogin.username} });
        wrapper.find('input#password').simulate('change', { target: { id: 'password', value: trueLogin.password} });
        wrapper.find('form#submit-btn').simulate('submit');
        expect(toJson(overview)).toMatchSnapshot();
    })
})