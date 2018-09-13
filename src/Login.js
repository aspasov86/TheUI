import React, { Component } from 'react';
import {
    Button,
    Form,
    Grid,
    Segment,
    Message,
} from 'semantic-ui-react';
import { DataContext } from './DataProvider';


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
            context(username, password);
        }
    }

    render() {
        const { usernameError, passwordError, errorMessages } = this.state;
        let error = null;
        if (usernameError || passwordError) {
            error = this.renderErrorMessage(errorMessages)
        }
        return (
            <div className='login-form'>
                <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                    <Grid.Column style={{ maxWidth: 450 }}>
                        <DataContext.Consumer>
                            {context => (
                                <Form 
                                    id="submit-btn" 
                                    size='large' 
                                    error={this.state.usernameError || this.state.passwordError || !!context.state.error} 
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
                                        {context.state.error ? this.renderErrorMessage(context.state.error) : error}
                                        <Button floated='right' size='large'>
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