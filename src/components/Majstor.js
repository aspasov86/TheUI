import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import MajstorProfile from './MajstorProfile';
import { withRouter } from 'react-router-dom';
import { Get } from 'react-axios';
import MajstorStatistics from './MajstorStatistics';
import occupationCodes from './occupation';

class Majstor extends Component {
    state = {
        imageLoad: false,
        active: false,
    }

    getData = data => {
        const { match: { params: { id: majstorId }} } = this.props;
        return data.filter(majstor => majstor.id === majstorId)[0];
    }

    renderMajstorInfo = data => {
        const { place, email, phoneNumber } = this.getData(data);
        const { active } = this.state
        let info;
        switch ( active ) {
            case 'mobile alternate':
                info = phoneNumber;
                break;
            case 'mail':
                info = email;
                break;
            case 'home':
                info = place;
                break;
            default:
                return '';
        }
        return info;
    }

    handleClickIcon = icon => {
        let active;
        if ( this.state.active !== icon ) {
            active = icon;
        } else {
            active = false;
        }
        this.setState({ active })
    }

    render() {
        return (
            <Get url="/api/majstors">
                {(error, response, isLoading) => {
                    if (error) {
                        return (<div>We are experiencing network issues!</div>);
                    } else if (isLoading) {
                        return (<div>Loading...</div>);
                    } else if (response !== null) {
                        const { firstName, lastName, stats, image, occupation } = this.getData(response.data.majstors);
                        const { imageLoad } = this.state;
                        return (
                            <Container style={{ marginTop: 150 }}>
                                <Grid style={{ width:600, margin: 'auto'}}>
                                    <Grid.Row columns={2}>
                                        <Grid.Column>
                                            <MajstorProfile 
                                                imageLoad={imageLoad}
                                                majstorInfo={this.renderMajstorInfo(response.data.majstors)}
                                                occupation={occupationCodes[occupation]}
                                                firstName={firstName}
                                                lastName={lastName}
                                                image={`../${image}`}
                                                isImageLoaded={() => this.setState({ imageLoad: true})}
                                                showInfoHandler={this.handleClickIcon}
                                            />
                                        </Grid.Column>
                                        <Grid.Column>
                                            <MajstorStatistics stats={stats} />
                                        </Grid.Column>
                                    </Grid.Row>
                                </Grid>
                            </Container>
                        );
                    }
                    return <div/>
                }}
            </Get>
        )
    }
}

export default withRouter(Majstor);