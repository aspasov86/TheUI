import React from 'react';
import {
    Icon,
    Menu,
    Container,
    Dropdown,
} from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

const navigation = ({ history }) => {
    const getUsername = email => {
        const index = email.indexOf('@');
        return email.substring(0, index);
    }
    const email = localStorage.getItem('e-majs-auth');
    const auth = email ? true : false;
    let username;
    if (auth) {
        username = getUsername(email);
    }
    const handleLogout = () => {
        localStorage.removeItem('e-majs-auth');
        history.push('/login');
    }
    return (
    <Menu fixed="top" inverted>
        <Container>
            <Menu.Item as="a" header>
                <Icon name="setting" loading/>
                eMajstore
            </Menu.Item>
            <Menu.Item disabled={!auth} as="a">Naslovna</Menu.Item>
            <Dropdown disabled={!auth} item simple text="Ostalo">
                <Dropdown.Menu>
                    <Dropdown.Item>Nesto 1</Dropdown.Item>
                    <Dropdown.Item>Nesto 2</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
            <Menu.Menu position="right">
                <Menu.Item disabled={!auth}>{username}</Menu.Item>
                <Menu.Item 
                    disabled={!auth} 
                    as="a"
                    onClick={handleLogout}>
                    Logout
                </Menu.Item>
            </Menu.Menu>
        </Container>
    </Menu>
)};

export default withRouter(navigation);