import React, { Component } from 'react';
import axios from 'axios';
import { withRouter } from 'react-router-dom';

export const DataContext = React.createContext();

const getUsername = email => {
    const index = email.indexOf('@');
    return email.substring(0, index);
}

class DataProvider extends Component {
    initialState = null;

    state = {
        auth: false,
        username: false,
        error: false,
    };

    componentDidMount() {
        const token = localStorage.getItem('e-majs-auth');
        const username = localStorage.getItem('e-majs-username');
        if (token && username) {
            this.setState({ auth: true, username });
        }
        this.initialState = this.state;
    }

    resetState = () => {
        this.setState(this.initialState);
    }

    render() {
        return (
            <DataContext.Provider value={{
                state: this.state,
                actions: {
                    loginUser: async (email, password) => {
                        const data = { email, password }
                        const options = {
                            headers: {
                                'Content-Type': 'application/json'
                            }
                        }
                        try {
                            const response = await axios.post('/api/users/login', data, options);
                            if (response) {
                                if (response.data.message === "Auth successful") {
                                    const auth = true;
                                    const username = getUsername(email)
                                    localStorage.setItem('e-majs-auth', response.data.token);
                                    localStorage.setItem('e-majs-username', username);
                                    this.setState({ auth, username, error: false });
                                    this.props.history.push('/overview');
                                }
                            }
                        }
                        catch(err) {
                            this.setState({ error: ["Username or password are incorrect!"] });
                        }                        
                    },
                    logoutUser: async () => {
                        localStorage.removeItem('e-majs-auth');
                        localStorage.removeItem('e-majs-username');
                        this.resetState();
                        this.props.history.push('/login');
                    }
                }
            }}>
                { this.props.children }
            </DataContext.Provider>
        );
    }
}

export default withRouter(DataProvider);