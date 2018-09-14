import React, { Component } from 'react'
import logo from '../assets/logo.png';
import { withRouter } from 'react-router-dom';
import './LogoBar.css';

class LogoBar extends Component {
    state = {
        code: '',
    }

    componentDidUpdate() {
        const { code } = this.state;
        const { history, location } = this.props;
        if (code === "Aut0bu5") {
            history.push("/admin", { code, pathname: location.pathname });
            this.setState({ code:'' });
        }
    }

    codeHandler = () => {
        this.code.focus();
    }

    changeHandler = event => {
        this.setState({ code: event.target.value });
    }

    render() {
        return (
            <div className="logo-bar">
                <div className="logo" onClick={this.codeHandler}>
                    <img src={logo} alt="logo" />
                </div>
                <input
                    value={this.state.code}  
                    ref={input => { this.code = input }} 
                    onChange={this.changeHandler}/>
            </div>
        );
    }
}

export default withRouter(LogoBar);