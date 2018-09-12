import React from 'react';
import {
    Menu,
    Container,
    Dropdown,
} from 'semantic-ui-react';
import { DataContext } from '../DataProvider';
import logo from '../assets/logo.png';
import './Navigation.css';

const navigation = () => {
    return (
    <Menu fixed="top" inverted>
        <Container>
            <Menu.Menu>
                <Menu.Item as="a" className="logo" header>
                    <span>eMajstore</span>
                    <img src={logo} alt="logo" />
                </Menu.Item>
            </Menu.Menu>
            <DataContext.Consumer>
                {context => context.state.auth && (
                    <Menu.Menu>
                        <Menu.Item as="a">Naslovna</Menu.Item>
                        <Dropdown item simple text="Ostalo">
                            <Dropdown.Menu>
                                <Dropdown.Item>Nesto 1</Dropdown.Item>
                                <Dropdown.Item>Nesto 2</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                        <Menu.Menu position="right">
                            <Menu.Item>{context.state.username}</Menu.Item>
                            <Menu.Item 
                                as="a"
                                onClick={context.actions.logoutUser}>
                                Logout
                            </Menu.Item>
                        </Menu.Menu>
                </Menu.Menu>
                )}
            </DataContext.Consumer>
        </Container>
    </Menu>
)};

export default navigation;