import React, { Component } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import { Get } from 'react-axios';

import MajstorsTable from './components/MajstorsTable';



class Overview extends Component {
    render() {
        return (
            <Get url="/api/majstors">
                {(error, response, isLoading) => {
                    if (error) {
                        return (<div>We are experiencing network issues!</div>);
                    } else if (isLoading) {
                        return <Loader size="huge" active />
                    } else if (response !== null) {
                        return (
                            <Container>
                                <MajstorsTable majstors={response.data.majstors}/>
                            </Container>
                        );
                    }
                    return <div/>
                }}
            </Get>
        )
    }
}

export default Overview