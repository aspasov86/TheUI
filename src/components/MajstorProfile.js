import React from 'react';
import { Card, Image, Loader, Button } from 'semantic-ui-react';

const icons = ['mobile alternate', 'mail', 'home'];

const majstorProfile = ({ 
    imageLoad,
    majstorInfo, 
    occupation, 
    firstName, 
    lastName, 
    image, 
    isImageLoaded,
    showInfoHandler
    }) => (
    <Card>
        <Image src={image} onLoad={isImageLoaded}/>
            {!imageLoad && (<div style={{ width: 290, height: 290 }}>
                <Loader size="large" active/>
            </div>)}
        <Card.Content>
            <Card.Header>{`${firstName} ${lastName}`}{' '}
                <Button.Group basic floated="right">
                    {icons.map((ico, i) => (
                        <Button 
                            key={i}
                            icon={ico}
                            onClick={() => showInfoHandler(ico)} />
                        ))}
                </Button.Group>
            </Card.Header>
            <Card.Meta>
                <span>{occupation}</span>
            </Card.Meta>
            <Card.Description textAlign="right" style={{minHeight: 33}}>
                <strong>{majstorInfo}</strong>
              </Card.Description>
        </Card.Content>
    </Card>
)


export default majstorProfile;