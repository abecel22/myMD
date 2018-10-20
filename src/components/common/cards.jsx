import React, { Component } from 'react';

class Cards extends Component {
    render() {
        return (
            <div className="card">
                <div className="card-header">Title</div>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Cras justo odio</li>
                    <li className="list-group-item">Cras justo odio</li>
                </ul>
            </div>
        );
    }
}

export default Cards;
