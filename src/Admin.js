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
        const { id, value, files } = event.target;
        let content = value;
        if (id === 'image') {
            content = files[0];
        }
        this.setState({ [id]: content });
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
                            {/*ToDo: Error handling*/}
                            {context.state.adminUpload ? (<p>Dodato!</p>) : (<Button>Dodaj</Button>)}
                        </Form>
                    </Container>
                )}
            </DataContext.Consumer>
        )
    }
}

export default Admin;