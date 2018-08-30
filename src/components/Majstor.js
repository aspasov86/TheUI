import React, { Component } from 'react';
import { Grid, Container } from 'semantic-ui-react';
import MajstorProfile from './MajstorProfile';
import { withRouter } from 'react-router-dom';
import { majstors } from '../mock-data/constants';
import MajstorStatistics from './MajstorStatistics';

class Majstor extends Component {
    state = {
        imageLoad: false,
        active: false,
    }

    getData = () => {
        const { match: { params: { id: majstorId }} } = this.props;
        return majstors.filter(majstor => majstor.id === parseInt(majstorId, 0))[0];
    }

    renderMajstorInfo = () => {
        const { place, email, phoneNumber } = this.getData();
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
        const { firstName, lastName, stats, image, occupation } = this.getData();
        const { imageLoad } = this.state;
        return (
        <Container style={{ marginTop: 50 }}>
            <Grid style={{width:600, margin: 'auto'}}>
                <Grid.Row columns={2}>
                    <Grid.Column>
                        <MajstorProfile 
                            imageLoad={imageLoad}
                            majstorInfo={this.renderMajstorInfo()}
                            occupation={occupation}
                            firstName={firstName}
                            lastName={lastName}
                            image={image}
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
        )
    }
}

export default withRouter(Majstor);