import React from 'react';
import {
    Menu,
    Container,
    Dropdown,
} from 'semantic-ui-react';
import { DataContext } from '../DataProvider';


const navigation = () => {
    return (
    <Menu fixed="top" inverted>
            <DataContext.Consumer>
                {context => context.state.auth && (
                    <Container>
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
                    </Container>
                )}
            </DataContext.Consumer>
    </Menu>
)};

export default navigation;