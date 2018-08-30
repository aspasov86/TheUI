import React, { Component } from 'react';
import { Table, Rating } from 'semantic-ui-react';
import { majstors } from '../mock-data/constants';
import { withRouter } from 'react-router-dom';

class MajstorsTable extends Component {
    headers = ['ime', 'rating', 'mesto'];
    renderTableHeader = () => (
        <Table.Header>
            <Table.Row>
                {this.headers.map((title, index) => (
                    <Table.HeaderCell key={index}>{title}</Table.HeaderCell>
                ))}
            </Table.Row>
        </Table.Header>
    )

    handleRowClick = data => {
        this.props.history.push(`/majstori/${data.id}`)
    }
    renderTableRows = data => {
      return  data.map((majstor, i) => {
        const { firstName, lastName, stats, place } = majstor;
        const numOfStats = Object.keys(stats).length;
        const statsSum = Object.keys(stats).map(stat => stats[stat]).reduce((a,b) => a + b);
        const rating = (5 * (statsSum / numOfStats)) / 100;
        return (
            <Table.Row 
                key={i}
                onClick={() => this.handleRowClick(majstor)}>
                <Table.Cell>{`${firstName} ${lastName}`}</Table.Cell>
                <Table.Cell><Rating disabled rating={rating} maxRating={5} /></Table.Cell>
                <Table.Cell>{place}</Table.Cell>
            </Table.Row>
        ) 
      })
    }

    renderTable = () => (
        <Table compact selectable striped style={{width: 700, margin: 'auto'}}>
            {this.renderTableHeader()}
            <Table.Body>{this.renderTableRows(majstors)}</Table.Body>
        </Table>
    )

    render() {
        return this.renderTable();
    };
};

export default withRouter(MajstorsTable);