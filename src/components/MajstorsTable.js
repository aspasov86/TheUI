import React, { Component } from 'react';
import { Table, Rating } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

class MajstorsTable extends Component {
    handleRowClick = data => {
        this.props.history.push(`/majstori/${data.id}`)
    }
    renderTableRows = data => {
      return  data.map((majstor, i) => {
        const { firstName, lastName, stats, place, occupation } = majstor;
        const numOfStats = Object.keys(stats).length;
        const statsSum = Object.keys(stats).map(stat => stats[stat]).reduce((a,b) => a + b);
        const rating = (5 * (statsSum / numOfStats)) / 100;
        return (
            <Table.Row 
                key={i}
                onClick={() => this.handleRowClick(majstor)}>
                <Table.Cell><strong>{occupation}</strong></Table.Cell>
                <Table.Cell>{`${firstName} ${lastName}`}</Table.Cell>
                <Table.Cell><Rating disabled rating={rating} maxRating={5} /></Table.Cell>
                <Table.Cell>{place}</Table.Cell>
            </Table.Row>
        ) 
      })
    }

    renderTable = data => (
        <Table compact selectable striped style={{width: 700, margin: 'auto'}}>
            <Table.Body>{this.renderTableRows(data)}</Table.Body>
        </Table>
    )
    
    render() {
        const { majstors } = this.props;
        return this.renderTable(majstors);
    };
};

export default withRouter(MajstorsTable);