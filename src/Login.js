import React, { Component } from 'react';
import {
    Button,
    Form,
    Grid,
    Segment,
    Message,
} from 'semantic-ui-react';
import { DataContext } from './DataProvider';
import { trueLogin } from './mock-data/constants'


class Login extends Component {
    state = {
        username: '',
        password: '',
        usernameError: false,
        passwordError: false,
        errorMessages: [],
    }

    usernameErrorMessage = 'Email must be properly formatted'
    passwordErrorMessage = 'Password must not be empty'

    changeHandler = (e) => {
        this.setState({
            [e.target.id]: e.target.value
        });
    }

    componentDidMount() {
        if (localStorage.getItem('e-majs-auth')) {
            this.goHome()
        }
    }

    goHome = () => {
        this.props.history.push('/overview')
    }

    resetComponent = () => {
        this.setState({
            username: '',
            password: '',
            usernameError: false,
            passwordError: false,
            errorMessage: [],
        })
    }

    isValid = () => {
        const { username, password } = this.state;
        const userCheck = username.indexOf('@') !== -1 && username.indexOf('.') !== -1;
        const passCheck = password !== '';
        let errorMessages = [];
        if (!userCheck) {
            errorMessages.push(this.usernameErrorMessage)
        }
        if (!passCheck) {
            errorMessages.push(this.passwordErrorMessage)
        }
        this.setState({ 
            usernameError: !userCheck, 
            passwordError: !passCheck,
            errorMessages,
        });
        if (userCheck && passCheck) {
            return true;
        } 
        return false;
    }

    renderErrorMessage = errorMessages => {
        const content = (
            <ul>
                {errorMessages.map((msg, i) => (
                    <li key={i} style={{textAlign: 'left'}}>{msg}</li>
                ))}
            </ul>
        )
        return  (
            <Message error header='Invalid Input' content={content}/>
        )
}

    submitHandler = context => {
        if (this.isValid()) {
            const { username, password } = this.state;
            if (username === trueLogin.username && password === trueLogin.password) {
                context(username, password);
                localStorage.setItem('e-majs-auth', username)
                this.goHome()
            } else if (username !== trueLogin.username) {
                const errorMessages = ['Email does not exist in our database'];
                this.setState({ usernameError: true, errorMessages });
            } else if (username === trueLogin.username && password !== trueLogin.password) {
                const errorMessages = ['You typed in a wrong password'];
                this.setState({ passwordError: true, errorMessages });
            } 
        }
    }

    render() {
        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450, marginTop: '100px' }}>
                        <DataContext.Consumer>
                            {context => (
                                <Form 
                                    id="submit-btn" 
                                    size='large' 
                                    error={this.state.usernameError || this.state.passwordError} 
                                    onSubmit={() => this.submitHandler(context.actions.loginUser)}>
                                    <Segment stacked style={{height: '350px'}}>
                                        <Form.Input 
                                            id='username' 
                                            fluid 
                                            icon='user' 
                                            iconPosition='left' 
                                            placeholder='E-mail address'
                                            error={this.state.usernameError} 
                                            onChange={this.changeHandler} 
                                        />
                                        <Form.Input
                                            id='password'
                                            fluid
                                            icon='lock'
                                            iconPosition='left'
                                            placeholder='Password'
                                            type='password'
                                            error={this.state.passwordError} 
                                            onChange={this.changeHandler}
                                        />
                                        {(this.state.usernameError || this.state.passwordError) && this.renderErrorMessage(this.state.errorMessages)}
                                        <Button color='teal' floated='right' size='large'>
                                            Login
                                        </Button>
                                    </Segment>
                                </Form>
                            )}
                        </DataContext.Consumer>
                    </Grid.Column>
                </Grid>
            </div>
        )
    };
};

export default Login;