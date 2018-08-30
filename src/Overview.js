import React, { Component } from 'react';
import { Container } from 'semantic-ui-react';
import MajstorsTable from './components/MajstorsTable';

class Overview extends Component {
    render() {
        return (
            <Container style={{ marginTop: 50 }}>
                <MajstorsTable />
            </Container>
        )
    }
}

export default Overview