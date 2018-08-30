import React from 'react';
import { Card, Progress } from 'semantic-ui-react';

const majstorStatistics = ({ stats }) => (
    <Card style={{minHeight: 379.146}}>
        <Card.Content>
            <Card.Header style={{ marginBottom: 50 }}>Statistika</Card.Header>
            <Card.Description>
                {Object.keys(stats).map((stat, i) => (
                    <Progress 
                        key={i}
                        active
                        progress
                        percent={stats[stat]}>
                        {stat}
                    </Progress>
                ))}
            </Card.Description>
        </Card.Content>
    </Card>   
)

export default majstorStatistics;