import React, { Component } from 'react';
import { Container, Input, Header, Button, Form } from 'semantic-ui-react';
import { DataContext } from './DataProvider';


class Admin extends Component {
    state = {}

    inputs = [
        { id: 'firstName', label: 'Ime', type: 'text'},
        { id: 'lastName', label: 'Prezime', type: 'text'},
        { id: 'phoneNumber', label: 'Br. telefona', type: 'text'},
        { id: 'email', label: 'Email', type: 'text'},
        { id: 'occupation', label: 'Zanimanje', type: 'number'},
        { id: 'place', label: 'Mesto', type: 'text'},
        { id: 'image', label: 'Slika', type: 'file'}
    ];

    changeHandler = event => {
        this.setState({ [event.target.id]: event.target.value });
    }

    render() {
        return (
            <DataContext.Consumer>
                {context => (
                    <Container>
                        <Header as="h2">Admin privilegije</Header>
                        <p>Dodaj Majstora</p>
                        <Form onSubmit={() => context.actions.uploadMajstor(this.state)}>
                            {this.inputs.map((input, index) => (
                                <div key={index}>
                                    <Input 
                                        type={input.type} 
                                        id={input.id} 
                                        label={input.label} 
                                        labelPosition='left corner' 
                                        onChange={this.changeHandler} 
                                    />
                                </div>
                            ))}
                            <Button>Dodaj</Button>
                        </Form>
                    </Container>
                )}
            </DataContext.Consumer>
        )
    }
}

export default Admin;